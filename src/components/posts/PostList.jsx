import React, { useEffect } from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useAggrogram } from "../../contexts/AggrogramContext";
import Spinner from "../commons/Spinner";

const PostList = ({ isMyPage }) => {
  const { user, posts, getAsyncPosts } = useAggrogram();

  useEffect(() => {
    getAsyncPosts();
  }, [getAsyncPosts]);

  const filteredPosts = isMyPage ? posts.filter((post) => post.user_id === user.id) : posts;

  return (
    <StyledPostList>
      {filteredPosts.length === 0 ? <Spinner /> : filteredPosts.map((post) => <PostCard key={post.id} post={post} />)}
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
