// React 라이브러리
import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext.jsx";

// supabase
import { updatePost } from "../../api/supabasePost.js";

// sweetalert2 라이브러리
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import BoardForm from "./BoardForm.jsx";

const UpdateBoard = () => {
  const { posts, setPosts } = useContext(AggrogramContext);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const postId = Number(searchParams.get("id"));

  const handleUpdatePost = async (postObj) => {
    const { data: updatedPost, error: postUpdateError } = await updatePost(postObj);
    if (postUpdateError) throw postUpdateError;

    const updatedList = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));

    Swal.fire({
      title: "수정이 완료되었습니다.",
      confirmButtonColor: "#fc913a",
      confirmButtonText: "확인"
    }).then(() => {
      setPosts(updatedList);
      navigate("/");
    });
  };

  return <BoardForm onSubmit={handleUpdatePost} isEditMode={true} postId={postId} />;
};

export default UpdateBoard;
