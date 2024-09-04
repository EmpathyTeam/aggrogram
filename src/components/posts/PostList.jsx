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
  const { getAllPosts, user, posts, setPosts, getSixPosts, loading } = useAggrogram();

  const [postLoadingMore, setPostLoadingMore] = useState(true);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isView, setIsView] = useState(true);

  const navigate = useNavigate();
  const limitLength = 6;

  const filteredPosts = isMyPage ? displayedPosts.filter((post) => post.user_id === user.id) : displayedPosts;

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting && !postLoadingMore) {
      setPostLoadingMore(true);
    }
  };

  const observerRef = useRef(null);

  const observer = new IntersectionObserver(handleObserver, {
    threshold: 0.7
  });

  useEffect(() => {
    const loadInitialPosts = async () => {
      getAllPosts();

      if (!displayedPosts) {
        const { data } = await getSixPosts(limitLength, offset);
        setDisplayedPosts(data);
        setOffset(offset + limitLength);
      } else if (displayedPosts && offset !== 0) {
        const { data } = await getSixPosts(limitLength, 0);
        setDisplayedPosts(data);
        setOffset(0 + limitLength);
      }
    };

    loadInitialPosts();
  }, [isView]);

  useEffect(() => {
    if (postLoadingMore) {
      const loadMorePosts = async () => {
        const { data } = await getSixPosts(limitLength, offset);
        setDisplayedPosts((prevPosts) => [...prevPosts, ...data]);
        setOffset(offset + limitLength);
        setPostLoadingMore(false);
      };

      loadMorePosts();
    }

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [postLoadingMore]);

  const handleEdit = (userId, postId) => {
    console.log(postId);
    console.log(userId);
    if (userId === user.id) {
      navigate(`/update?id=${postId}`);
    } else {
      alert("작성자만 수정이 가능합니다.");
    }
  };

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

const moveBack = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const moveToRight = keyframes`
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
