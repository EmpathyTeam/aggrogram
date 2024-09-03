// React 라이브러리
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext.jsx";

// supabase
import { uploadPost } from "../../api/supabasePost.js";

import BoardForm from "./BoardForm.jsx";

const AddBoard = () => {
  const { setPosts } = useContext(AggrogramContext);
  const navigate = useNavigate();

  // post 등록 함수
  const handleUploadPost = async (postObj) => {
    const { error: postUploadError } = await uploadPost(postObj);
    if (postUploadError) throw postUploadError;

    setPosts((prev) => [...prev, postObj]);

    alert("등록이 완료되었습니다.");
    navigate("/");
  };

  return <BoardForm onSubmit={handleUploadPost} isEditMode={false} postId={null} />;
};

export default AddBoard;
