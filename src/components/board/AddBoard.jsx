// React 라이브러리
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// 스타일
import * as S from "../../styles/BoardFormStyle.js";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext.jsx";

// supabase
import { uploadPostImage, getImageUrl } from "../../api/supabaseStorage.js";
import { uploadPost } from "../../api/supabasePost.js";

const AddBoard = () => {
  const { user, setPosts } = useContext(AggrogramContext);
  const navigate = useNavigate();

  // 미리보기 이미지
  const [previewImage, setPreviewImage] = useState("");

  // post 정보
  const [uploadImage, setUploadImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const handleUploadPost = async (e) => {
    e.preventDefault();

    // 이미지 업로드
    const { data, error: imageUploadError } = await uploadPostImage(uploadImage, user.id);
    if (imageUploadError) throw error;
    const imageUrl = getImageUrl(data.fullPath);

    const postObj = {
      userId: user.id,
      title: title,
      imageUrl: imageUrl,
      content: content,
      nickname: user.user_metadata.nickname
    };

    // post 업로드
    const { error: postUploadError } = await uploadPost(postObj);
    if (postUploadError) throw error;

    setPosts((prev) => [...prev, postObj]);

    alert("등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <S.BoardFormContainer>
      <form onSubmit={handleUploadPost}>
        <input
          value={title}
          className="title"
          placeholder="제목을 입력하세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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

        <input
          type="file"
          onChange={(e) => {
            handlePreviewImage(e.target.files[0]);
          }}
        />

        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div>
          <button onClick={handleBackClick}>뒤로가기</button>
          <button type="submit">등록하기</button>
        </div>
      </form>
    </S.BoardFormContainer>
  );
};

export default AddBoard;
