import React, { useEffect, useState } from "react";
import * as S from "../styles/MainStyle";
import { createClient } from "@supabase/supabase-js";

const API_URL = import.meta.env.VITE_SUPABASE_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(API_URL, API_KEY);


const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  console.log("posts =>", posts);

  const getPosts = async () => {
    const { data } = await supabase.from("posts").select();
    setPosts(data);
    console.log("data =>", data);
  };  


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
