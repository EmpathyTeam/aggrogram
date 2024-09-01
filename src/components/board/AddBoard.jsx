import React, { useContext, useState } from "react";
import { uploadPostImage, getImageUrl } from "../../api/supabaseStorage.js";
import { uploadPost } from "../../api/supabasePost.js";
import * as S from "../../styles/AddBoardStyle.js";
import { AggrogramContext, useAggrogram } from "../../contexts/AggrogramContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

const AddBoard = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadImage, setUploadImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { user, setPosts } = useContext(AggrogramContext);

  const navigate = useNavigate();

  const handlePreviewImage = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    setUploadImage(file);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // TODO 에러 처리
  const handleUploadPost = async (e) => {
    e.preventDefault();

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

    const { error: postUploadError } = await uploadPost(postObj);

    
    setPosts((prev) => [...prev, postObj]);
    alert("등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <S.AddBoardContainer>
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
        ) : null}

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
    </S.AddBoardContainer>
  );
};

export default AddBoard;
