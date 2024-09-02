// React 라이브러리
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 스타일
import * as S from "../../styles/BoardFormStyle.js";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext.jsx";

// supabase
import { uploadPostImage, getImageUrl } from "../../api/supabaseStorage.js";
import { updatePost } from "../../api/supabasePost.js";

const UpdateBoard = () => {
  const { user, posts, setPosts } = useContext(AggrogramContext);
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));

  // 미리보기 이미지
  const [previewImage, setPreviewImage] = useState("");

  // post 정보
  const [uploadImage, setUploadImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === postId);

    if (post) {
      setPreviewImage(post.img_url);
      setTitle(post.title);
      setContent(post.context);
    }
  }, [posts]);

  // 미리보기 임시 URL 생성
  const handlePreviewImage = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    setUploadImage(file);
  };

  // 뒤로가기
  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    // 이미지 업로드
    const { data, error } = await uploadPostImage(uploadImage, user.id);
    if (error) throw error;

    const imageUrl = getImageUrl(data.fullPath);

    const postObj = {
      id: postId,
      userId: user.id,
      title: title,
      imageUrl: uploadImage ? imageUrl : previewImage,
      content: content,
      nickname: user.user_metadata.nickname
    };

    const { data: updatedPost } = await updatePost(postObj);

    // post 업데이트
    const updatedList = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(updatedList);

    alert("수정이 완료되었습니다.");
    navigate("/");
  };

  return (
    <S.BoardFormContainer>
      <form onSubmit={handleUpdatePost}>
        <input
          value={title}
          className="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {previewImage ? (
          <div className="previewImage">
            <img src={previewImage} alt="미리보기 이미지" />
          </div>
        ) : null}

        <input
          type="file"
          onChange={(e) => {
            handlePreviewImage(e.target.files[0]);
          }}
        />

        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div>
          <button onClick={handleBackClick}>뒤로가기</button>
          <button type="submit">수정하기</button>
        </div>
      </form>
    </S.BoardFormContainer>
  );
};

export default UpdateBoard;
