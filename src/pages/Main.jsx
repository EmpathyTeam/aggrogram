import React from "react";
import Sidebar from "../components/commons/sideBar";
import PostList from "../components/posts/PostList";
import styled from "styled-components";
const Main = () => {
  return (
    <MainContainer>
      <PostList isMyPage={false} />
        <Sidebar />
    </MainContainer>
  );
};

export default Main;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 100px;
`;
