import React, { useEffect, useState } from "react";
import AddBoard from "../components/board/AddBoard.jsx";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";

const Board = () => {
  // const searchParams = new URLSearchParams(location.search);
  // const postId = Number(searchParams.get("id"));
  const { posts } = useAggrogram();
  const foundPost = posts.find((p) => p.id === 1000);
  console.log(foundPost);
  return (
    <div>
      {!foundPost ? (
        <div>게시글 찾을 수 없음</div>
      ) : (
        <>
          <div>
            {foundPost.title}
            {foundPost.created_at}
            {foundPost.context}
            {foundPost.nickname}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
