import React, { useEffect, useState } from "react";
import * as S from "../styles/MainStyle";
import { useAggrogram } from "../context/AggrogramContext";

const Main = () => {
  const { posts } = useAggrogram();

  // console.log("posts =>", posts);

  return (
    <S.MainContainer>
      <S.PostList>
        {posts.map((card) => (
          <S.PostCard key={card.id}>
            <div className="imageArea">
              <img src={card.img_url} alt="이미지" />
            </div>
            <div className="contentsArea">
              <h1>{card.title}</h1>
              <div className="profileArea">
                <div className="userInfo">
                  <img src="" alt=" " />
                  <p>{card.nickname}</p>
                </div>
                <div className="engagementStats">
                  <p>좋아요</p>
                  <p>조회수</p>
                </div>
              </div>
            </div>
          </S.PostCard>
        ))}
      </S.PostList>
    </S.MainContainer>
  );
};

export default Main;
