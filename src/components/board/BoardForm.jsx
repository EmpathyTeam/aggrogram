// React 라이브러리
import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext.jsx";

// 스타일
import * as S from "../../styles/BoardFormStyle.js";

// supabase
import { uploadPostImage, getImageUrl } from "../../api/supabaseStorage.js";

const BoardForm = ({ onSubmit, isEditMode = false, postId }) => {
  const navigate = useNavigate();
  const { user, posts } = useContext(AggrogramContext);

  // 미리보기 이미지
  const [previewImage, setPreviewImage] = useState("");

  // post 정보
  const [uploadImage, setUploadImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleRef = useRef("");

  useEffect(() => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      setPreviewImage(post.img_url);
      setTitle(post.title);
      setContent(post.context);
    }
  }, [posts]);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // 미리보기 임시 URL 생성
  const handlePreviewImage = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    setUploadImage(file);
  };

  // 등록 & 수정
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = previewImage;

    // 업로드한 이미지가 있으면 새로 이미지 등록 후 url 발급
    if (uploadImage) {
      const { data, error: imageUploadError } = await uploadPostImage(uploadImage, user.id);
      if (imageUploadError) throw imageUploadError;
      imageUrl = getImageUrl(data.fullPath);
    }

    console.log(user.user_metadata.avatar_url);
    const postObj = {
      id: postId, // 수정에만 필요 (등록할때는 null)
      userId: user.id,
      nickname: user.user_metadata.nickname,
      title: title,
      imageUrl: imageUrl,
      content: content,
      avatar_url: user.user_metadata.avatar_url
    };

    onSubmit(postObj);
  };
  return (
    <S.BoardFormContainer>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          value={title}
          className="title"
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />

        {previewImage ? (
          <div className="previewImage">
            <img src={previewImage} alt="미리보기 이미지" />
          </div>
        ) : (
          <div className="emptyImage">
            <span>사진을 첨부해주세요. </span>
            <span>사진은 1장 첨부 가능합니다.</span>
          </div>
        )}

        <label htmlFor="file">
          <div className="uploadBtn">이미지 파일첨부</div>
        </label>
        <input type="file" id="file" onChange={(e) => handlePreviewImage(e.target.files[0])} />

        <textarea placeholder="내용을 입력하세요." value={content} onChange={(e) => setContent(e.target.value)} />
        <div>
          <button type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </button>
          <button type="submit">{isEditMode ? "수정하기" : "등록하기"}</button>
        </div>
      </form>
    </S.BoardFormContainer>
  );
};

export default BoardForm;
