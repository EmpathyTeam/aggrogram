import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";
import Spinner from "../commons/Spinner";
import Sidebar from "../commons/sideBar";

const PostList = ({ isMyPage }) => {
  // Context
  const { user, posts, getAsyncPosts, loading } = useAggrogram();

  // 상태
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [postLoadingMore, setPostLoadingMore] = useState(false);

  const filteredPosts = isMyPage ? displayedPosts.filter((post) => post.user_id === user.id) : displayedPosts;

  const loadingLength = 6;
  // 옵저버
  // observerRef는 DOM 요소를 참조하기 위한 객체입니다.
  const observerRef = useRef(null);

  /*
      IntersectionObserverEntry 객체 정리
  
      boundingClientRect: 요소의 크기와 위치를 나타내는 DOMRect 객체
      intersectionRect: 요소와 뷰포트가 교차하는 영역을 나타내는 DOMRect 객체
      intersectionRatio: 요소가 뷰포트와 교차하는 비율입니다.
      isIntersecting: 요소가 뷰포트와 교차하는지 (닿는지) 여부를 나타내는 불리언 값
      rootBounds: 루트 요소의 DOMRect 객체
      target: 관찰 중인 요소를 참조하는 Element 
    */

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting && !postLoadingMore) {
      setPostLoadingMore(true);
    }
  };

  // 화면에 보이는 요소를 감지하는 객체
  const observer = new IntersectionObserver(handleObserver, {
    threshold: 0.7 // threshold는 0 기준으로 보이기만 하면 바로 감지 1 로 갈수록 감지 영역이 적어짐

    
  });

  useEffect(() => {
    const loadInitialPosts = async () => {
      await getAsyncPosts();
      setDisplayedPosts(posts.slice(0, 6));
    };

    loadInitialPosts();
  }, []);

  useEffect(() => {
    if (postLoadingMore) {
      const loadMorePosts = async () => {
        await getAsyncPosts();
        setDisplayedPosts((prevPosts) => [...prevPosts, ...posts.slice(prevPosts.length, prevPosts.length + loadingLength)]);
        setPostLoadingMore(false);
      };

      loadMorePosts();
    }

    // observerRef.current =>  참조하는 DOM 요소를나타냄

    if (observerRef.current) {
      observer.observe(observerRef.current);
      console.log("감지중입니다");
    }

    // return
    // 컴포넌트가 DOM에서 제거될 때 => 컴포넌트가 언마운트 될 때
    // 언마운트: 컴포넌트가 더 이상 화면에 렌더링되지 않고, React의 DOM에서 사라지는 것
    // useEffect의 의존성 배열이 변경될 때 => 변경됨과 동시에 바로 실행돰
    // return 문으로 해당 useEffect 종료

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
        console.log("감지끝이요!!");
      }
    };
  }, [postLoadingMore]);

  return (
    <>
      <StyledPostList>
        {loading && !postLoadingMore ? (
          <Spinner />
        ) : (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
        <Sidebar />
      </StyledPostList>
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
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;
