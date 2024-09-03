import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";
import Spinner from "../commons/Spinner";
import Sidebar from "../commons/sideBar"
const PostList = ({ isMyPage }) => {
  const { user, posts, getAsyncPosts, loading } = useAggrogram();

  useEffect(() => {
    getAsyncPosts();
  }, [user, getAsyncPosts]);

  const filteredPosts = isMyPage ? posts.filter((post) => post.user_id === user.id) : posts;
  return (
    <StyledPostList>
      {loading ? (
        <Spinner />
      ) : filteredPosts.length === 0 ? (
        <NullDataContainer>
          <h1>게시물이 없는데 이래도 안 쓰실 건가요..?</h1>
        </NullDataContainer>
      ) : (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      )}
      <Sidebar />
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

const NullDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 130px;
  }
`;
