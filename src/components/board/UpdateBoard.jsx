import React, { useContext, useEffect, useState } from "react";
import { uploadPostImage, getImageUrl } from "../../api/supabaseStorage.js";
import { updatePost } from "../../api/supabasePost.js";
import * as S from "../../styles/AddBoardStyle.js";
import { useNavigate, useParams } from "react-router-dom";
import { AggrogramContext, useAggrogram } from "../../contexts/AggrogramContext.jsx";

const UpdateBoard = () => {
  const { user, posts, setPosts } = useContext(AggrogramContext);

  // 미리보기 이미지
  const [previewImage, setPreviewImage] = useState("");

  // post 등록 시 데이터
  const [uploadImage, setUploadImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  // const postId = useParams().id;

  // 임시
  const postId = 55;

  useEffect(() => {
    const post = posts.find((post) => post.id === postId);

    if (post) {
      setPreviewImage(post.img_url);
      setTitle(post.title);
      setContent(post.context);
    }
  }, [posts]); // posts가 로드 되면 실행되어야하니까 의존성에 넣어줌..

  const handlePreviewImage = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    setUploadImage(file);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  // 업데이트
  const handleUpdatePost = async (e) => {
    e.preventDefault();

    // 이미지 업로드
    // TODO 에러
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

    const updatedList = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));

    setPosts(updatedList);

    alert("수정이 완료되었습니다.");
    navigate("/");
  };

  return (
    <S.AddBoardContainer>
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
    </S.AddBoardContainer>
  );
};

export default UpdateBoard;
