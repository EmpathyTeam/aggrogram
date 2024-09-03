import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";
import Spinner from "../commons/Spinner";
import Sidebar from "../commons/sideBar";
import * as S from "../../styles/BoardStyle";
import RadiusOrangeButton from "../commons/RadiusOrangeButton";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../configs/supabaseConfig";

const PostList = ({ isMyPage }) => {
  // Context
  const { getAllPosts, user, posts, setPosts, getSixPosts, loading } = useAggrogram();

  // 상태
  const [postLoadingMore, setPostLoadingMore] = useState(true); // 데이터 추가할지에 대한 상태
  const [displayedPosts, setDisplayedPosts] = useState([]); // 렌더링할 데이터를 담아줄 배열
  const [offset, setOffset] = useState(0); // 어디서부터 가져올지
  const [isView, setIsView] = useState(true); // 상태에 따라서 뷰 방식 바뀜

  const navigate = useNavigate();
  const limitLength = 6;

  const filteredPosts = isMyPage ? displayedPosts.filter((post) => post.user_id === user.id) : displayedPosts;

  // 옵저버
  // observerRef는 DOM 요소를 참조하기 위한 객체입니다.
  // 화면에 보이는 요소를 감지하는 객체
  const handleObserver = (entries) => {
    if (entries[0].isIntersecting && !postLoadingMore) {
      setPostLoadingMore(true);
    }
  };

  const observerRef = useRef(null);

  const observer = new IntersectionObserver(handleObserver, {
    threshold: 0.7 // threshold는 0 기준으로 보이기만 하면 바로 감지 1 로 갈수록 감지 영역이 적어짐
  });

  /*
      IntersectionObserverEntry 객체 정리

      boundingClientRect: 요소의 크기와 위치를 나타내는 DOMRect 객체
      intersectionRect: 요소와 뷰포트가 교차하는 영역을 나타내는 DOMRect 객체
      intersectionRatio: 요소가 뷰포트와 교차하는 비율입니다.
      isIntersecting: 요소가 뷰포트와 교차하는지 (닿는지) 여부를 나타내는 불리언 값
      rootBounds: 루트 요소의 DOMRect 객체
      target: 관찰 중인 요소를 참조하는 Element
    */

  useEffect(() => {
    const loadInitialPosts = async () => {
      getAllPosts();

      // 현재 렌더링 할 데이터가 없으면 데이터 가져옴
      if (!displayedPosts) {
        const { data } = await getSixPosts(limitLength, offset);
        setDisplayedPosts(data);
        setOffset(offset + limitLength);
      }
      // 뷰 바꾸기 클릭시 데이터가 있고 오프셋이 0이 아니면
      // 0번째부터 6개를 다시 가져옴
      else if (displayedPosts && offset !== 0) {
        const { data } = await getSixPosts(limitLength, 0);
        setDisplayedPosts(data);
        setOffset(0 + limitLength);
      }
    };
    loadInitialPosts();
  }, [isView]);

  useEffect(() => {
    if (postLoadingMore) {
      // 로딩중인 상태가 true 라면
      // 새로운 데이터를 다시 가져오고
      // spread로 이전 게시글 유지한 상태로 넣어줌

      const loadMorePosts = async () => {
        const { data } = await getSixPosts(limitLength, offset);
        setDisplayedPosts((prevPosts) => [...prevPosts, ...data]);
        setOffset(offset + limitLength);
        setPostLoadingMore(false);
      };

      loadMorePosts();
    }

    // observerRef.current =>  참조하는 DOM 요소를나타냄

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // return
    // 컴포넌트가 DOM에서 제거될 때 => 컴포넌트가 언마운트 될 때
    // 언마운트: 컴포넌트가 더 이상 화면에 렌더링되지 않고, React의 DOM에서 사라지는 것
    // useEffect의 의존성 배열이 변경될 때 => 변경됨과 동시에 바로 실행돰
    // return 문으로 해당 useEffect 종료
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [postLoadingMore]);

  //수정버튼클릭시
  const handleEdit = (userId, postId) => {
    console.log(postId);
    console.log(userId);
    if (userId === user.id) {
      navigate(`/update?id=${postId}`);
    } else {
      alert("작성자만 수정이 가능합니다.");
    }
  };

  //삭제버튼클릭시
  const handelDelete = async (userId, postId) => {
    const { data, error } = await supabase.from("posts").delete().eq("id", postId).select();

    if (userId === user.id && data) {
      const filteredList = posts.filter((post) => post.id !== postId);
      alert("삭제가 완료되었습니다.");
      setPosts(filteredList);
      window.location.reload();
    } else {
      alert("작성자가 다릅니다");
      console.error(error);
    }
  };
  return (
    <>
      <ViewButtonContainer isView={isView}>
        <span>View</span>
        <button
          onClick={() => {
            setIsView(!isView);
          }}
        ></button>
      </ViewButtonContainer>
      {isView ? (
        <>
          {" "}
          <StyledPostList>
            {loading && !postLoadingMore ? (
              <Spinner />
            ) : (
              filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
            )}
            <Sidebar />
          </StyledPostList>
        </>
      ) : (
        <>
          <StyledPostList $isView={isView}>
            {loading && !postLoadingMore ? (
              <Spinner />
            ) : (
              filteredPosts.map((post) => (
                <S.BoardContainer key={post.id}>
                  <div className="postArea">
                    <div className="postInfoArea">
                      <div className="title">
                        <div>{post.title}</div>
                      </div>

                      <div className="postInfo">
                        <div className="postUserInfo">
                          <img className="profileImg" src={post.avatar_url} />
                          <div>{post.nickname}</div>
                        </div>
                        <div>{new Date(post.created_at).toISOString().split("T")[0]}</div>
                      </div>

                      <div className="image">
                        <img src={post.img_url} alt="" />
                      </div>

                      <div className="context">{post.context}</div>
                    </div>

                    <div>
                      <div>
                        {user && post.user_id === user.id ? (
                          <>
                            <RadiusOrangeButton onClick={() => handleEdit(post.user_id, post.id)}>
                              {" "}
                              수정하기
                            </RadiusOrangeButton>
                            <RadiusOrangeButton onClick={() => handelDelete(post.user_id, post.id)}>
                              삭제하기
                            </RadiusOrangeButton>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </S.BoardContainer>
              ))
            )}
            <Sidebar />
          </StyledPostList>
        </>
      )}
      <ObserverArea ref={observerRef}>
        {displayedPosts.length === posts.length ? (
          <div className="emptyArea">게시물이 없습니다.</div>
        ) : (
          <>
            <Spinner />
          </>
        )}
      </ObserverArea>
    </>
  );
};

export default PostList;

const ObserverArea = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  .emptyArea {
    font-size: 18px;
    font-weight: bold;
  }
`;

const StyledPostList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $isView }) => {
    if ($isView === false) {
      return "center";
    } else {
      return "normal";
    }
  }};
  align-items: center;
  flex-wrap: wrap;
  width: ${({ $isView }) => {
    if ($isView === false) {
      return "50%";
    } else {
      return "100%";
    }
  }};
  gap: 30px;
`;
const moveToRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const moveBack = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const ViewButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-end;

  span {
    text-align: center;
    color: #999999;
    margin-bottom: 10px;
  }

  button {
    cursor: pointer;
    width: 80px;
    height: 30px;
    background-color: white;
    border: 1px solid #dddddd;
    transition: all 0.3s ease-in-out;
    position: relative;
    border-radius: 10px;

    &::after {
      content: "";
      border-radius: 10px;
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 50%;
      height: 102%;
      background-color: ${({ isView }) => (isView ? "#ff7300" : "#fc913a")};
      transition: transform 0.3s ease-in-out;
      animation: ${({ isView }) =>
        isView
          ? css`
              ${moveToRight} 0.5s forwards
            `
          : css`
              ${moveBack} 0.5s forwards
            `};
    }
  }
`;
