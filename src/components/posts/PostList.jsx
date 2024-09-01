import React, { useEffect } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";

const PostList = () => {
  const { posts, getAsyncPosts } = useAggrogram();
  
  useEffect(() => {
    getAsyncPosts();
  }, [getAsyncPosts]);

  return (
    <StyledPostList>
      {posts.length === 0 ? <div>데이터 로딩중</div> : posts.map((post) => <PostCard key={post.id} post={post} />)}
    </StyledPostList>
  );
};

export default PostList;

const StyledPostList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`;
