import React, { useEffect, useState } from "react";
import InputImageArea from "./InputImageArea.jsx";
import { uploadPostImage, getImageUrl } from "../../api/fetchStorageData.js";
import { uploadPost } from "../../api/fetchPostData.js";

const FormArea = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  /** TODO 유저 정보 불러오기 context 에서 */
  const [userInfo, setUserInfo] = useState(null);

  /** 이미지가 첨부되면 수파베이스에 업로드 */
  useEffect(() => {
    const uploadImageAsync = async () => {
      try {
        if (uploadImage) {
          const { data, error } = await uploadPostImage(uploadImage, "22d8f79b-8cba-43aa-93e7-eca03f8f9064");
          if (error) throw error;
          setImageUrl(getImageUrl(data.fullPath));
        }
      } catch (error) {
        alert("이미지 업로드 실패: " + error.message);
      }
    };
    uploadImageAsync();
  }, [uploadImage]);

  const getRequestBoardObj = () => {
    return {
      /** TODO 임시 */
      userId: "22d8f79b-8cba-43aa-93e7-eca03f8f9064",
      title: title,
      imageUrl: imageUrl,
      content: content,
      nickname: "정민지"
    };
  };

  return (
    <div>
      <form
        value={title}
        onSubmit={(e) => {
          e.preventDefault();
          uploadPost(getRequestBoardObj());
        }}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div>{imageUrl ? <img src={imageUrl} /> : <InputImageArea setUploadImage={setUploadImage} />}</div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default FormArea;
