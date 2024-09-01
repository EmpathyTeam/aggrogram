import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";

const PostList = () => {
  const { posts } = useAggrogram();
  return (
    <StyledPostList>
      {posts.length === 0 ? (
        <div>포스트가 없습니다.</div>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
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
