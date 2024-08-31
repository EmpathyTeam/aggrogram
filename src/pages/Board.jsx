import * as S from "../styles/BoardStyle";

import React, { useEffect, useState } from "react";

import AddBoard from "../components/board/AddBoard.jsx";
import styled from "styled-components";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";

const Board = () => {
  // const searchParams = new URLSearchParams(location.search);
  // const postId = Number(searchParams.get("id"));
  const { posts } = useAggrogram();
  const foundPost = posts.find((p) => p.id === 1000);
  console.log(foundPost);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      {!foundPost ? (
        <div>게시글 찾을 수 없음</div>
      ) : (
        <>
          <S.ContentWrapper>
            <S.BoxContainer>
              <div>
                <div>
                  <div> {foundPost.title}</div>
                  <div> {foundPost.created_at}</div>

                  <S.ImageBox>사진</S.ImageBox>
                  <S.MainContainer>{foundPost.context}</S.MainContainer>
                </div>
              </div>
            </S.BoxContainer>
          </S.ContentWrapper>
          <div>
            <S.ButtonWrapper>
              <button onClick={handleBack}>뒤로가기</button>

              <button> 수정하기</button>
              <button>삭제하기</button>
            </S.ButtonWrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
