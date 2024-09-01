import React, { useEffect, useState } from "react";
import AddBoard from "../components/board/AddBoard.jsx";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { supabase } from "../configs/supabaseConfig.js";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));
  const { posts } = useAggrogram();
  const foundPost = posts.find((p) => p.id === postId);
  const navigate = useNavigate();
  console.log(foundPost);

  const deletePost = async (id) => {
    const { data, error } = await supabase.from("posts").delete().eq("id", id).select();

    if (error) {
      console.error("Error deleting post:", error);
      return;
    }

    if (data && data.length > 0) {
      const filteredPosts = posts.filter((post) => post.id !== deletedPost.id);
      setPosts(filteredPosts);
      navigate("/"); // 홈으로 이동
    }
  };
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
            <button onClick={deletePost}>삭제하기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
