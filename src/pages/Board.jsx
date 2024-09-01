import * as S from "../styles/BoardStyle";

import React, { useEffect, useState } from "react";

import AddBoard from "../components/board/AddBoard.jsx";
import styled from "styled-components";
import { supabase } from "../configs/supabaseConfig.js";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));
  const { posts, setPosts, user } = useAggrogram();
  const foundPost = posts.find((p) => p.id === postId);
  console.log(foundPost);
  const navigate = useNavigate();

  //뒤로가기 버튼 클릭시
  const handleBack = () => {
    navigate("/");
  };
  //수정버튼클릭시
  const handleEdit = () => {
    navigate(`/update?id=${postId}`);
  };
  //삭제버튼클릭시
  const handelDelete = async (postId) => {
    const { data, error } = await supabase.from("posts").delete().eq("id", postId).select();

    console.log("삭제하기 데이터입니다", data);
    console.log("postid입니다", postId);
    if (foundPost.user_id === user.id && data) {
      const filteredList = posts.filter((post) => post.id !== postId);
      setPosts(filteredList);
      alert("삭제완료");
      navigate("/");
    } else {
      alert("작성자가 다릅니다");
      console.error(error);
    }
  };
  console.log("user입니다", user);
  return (
    <div>
      {!foundPost ? (
        <div>게시글 찾을 수 없음</div>
      ) : (
        <>
          <div>
            <S.ButtonWrapper>
              <button onClick={handleBack}>뒤로가기</button>

              <button onClick={handleEdit}> 수정하기</button>
              <button onClick={() => handelDelete(postId)}>삭제하기</button>
            </S.ButtonWrapper>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
