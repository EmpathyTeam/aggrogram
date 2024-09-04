import React, { useEffect, useState } from "react";
import { useAggrogram } from "../contexts/AggrogramContext";
import styled, { css } from "styled-components";
import { supabase } from "../configs/supabaseConfig";
import { getFormatDate } from "../utils/formatDate"; // Supabase 설정 파일 import
import PostList from "../components/posts/PostList";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const MyPage = () => {
  const { user, setUser } = useAggrogram();
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [newAvatarFile, setNewAvatarFile] = useState("");

  useEffect(() => {
    if (user) {
      setNewNickname(user.user_metadata.nickname);
      setNewDescription(user.user_metadata.description);
      setNewAvatarUrl(user.user_metadata.avatar_url);
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewAvatarFile(file);
      setNewAvatarUrl(URL.createObjectURL(file));
    }
  };

  const getImageUrl = (fullPath) => {
    return `${SUPABASE_URL}/storage/v1/object/public/${fullPath}`;
  };

  const handleSaveClick = async () => {
    let imgUrl = newAvatarUrl;

    if (newAvatarFile) {
      const imgName = `${user.id}_${getFormatDate()}`;

      const { data, error: uploadError } = await supabase.storage.from("avatarImg").upload(imgName, newAvatarFile, {
        cacheControl: "3600",
        upsert: false
      });

      if (uploadError) {
        console.error("이미지 업로드 오류:", uploadError);
        return;
      }
      imgUrl = getImageUrl(data.fullPath);
    }
    if (newDescription.length > 100) {
      return alert(
        `          
        ${user.user_metadata.nickname}님 안녕하세요! 
        프로필 소개는 100자 이상으로 작성하실 수 없습니다 😎
        `
      );
    }
    const updates = {
      avatar_url: imgUrl,
      nickname: newNickname,
      description: newDescription
    };
    try {
      const { error: userError } = await supabase.auth.updateUser({
        data: updates
      });

      if (userError) {
        throw userError;
      }

      const { error: postsError } = await supabase
        .from("posts")
        .update({ nickname: newNickname, avatar_url: imgUrl })
        .eq("user_id", user.id);

      if (postsError) {
        throw postsError;
      }

      setUser((prevUser) => ({
        ...prevUser,
        user_metadata: {
          ...prevUser.user_metadata,
          ...updates
        }
      }));
      setIsEditing(false);
    } catch (error) {
      console.error("프로필 및 게시글 업데이트 오류:", error);
    }
  };

  return (
    <Section>
      {!user ? (
        <div>정보를 불러 올 수 없음</div>
      ) : (
        <>
          <ProfileContainer>
            <ProfileImage
              src={
                newAvatarUrl ||
                "https://untacqjpmvnegdbefbrr.supabase.co/storage/v1/object/public/avatarImg/m_20220509173224_d9N4ZGtBVR.jpeg"
              }
            />
            {isEditing ? (
              <>
                <ProfileInfo>
                  <input
                    className="nickname-input"
                    value={newNickname}
                    onChange={(e) => setNewNickname(e.target.value)}
                  />
                  <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                  <DescriptionLength length={newDescription.length}>{newDescription.length}/100</DescriptionLength>
                  <label htmlFor="file-upload" className="file-label">
                    이미지 파일첨부
                  </label>
                  <input id="file-upload" type="file" onChange={handleFileChange} />
                </ProfileInfo>
                <SaveButton onClick={handleSaveClick}>저장</SaveButton>
              </>
            ) : (
              <>
                <ProfileInfo>
                  <Nickname>{user.user_metadata.nickname}</Nickname>
                  <Description>
                    {user.user_metadata.description || "자기소개를 회원정보 수정 페이지에서 추가해보세요."}
                  </Description>
                </ProfileInfo>
                <EditButton onClick={handleEditClick}>프로필 수정</EditButton>
              </>
            )}
          </ProfileContainer>

          <SectionTitle>My Post</SectionTitle>
          <PostList isMyPage={true} />
        </>
      )}
    </Section>
  );
};

export default MyPage;

const Section = styled.section`
  width: 1340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const SectionTitle = styled.div`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  margin: 40px 0;
  color: #fc913a;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 400px;
  margin: 20px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input[type="text"],
  textarea {
    width: 90%;
    padding: 5px;
    margin-bottom: 15px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
  }

  .nickname-input {
    text-align: center;
    padding: 5px;
  }

  textarea {
    resize: none;
    height: 80px;
  }

  input[type="file"] {
    display: none;
  }

  .file-label {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: #fc913a;
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
    text-align: center;
    border: 1px solid #fc913a;
    font-weight: 700;
  }
`;

const Nickname = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
  word-wrap: break-word;
  max-width: 100%;
  line-height: 1.5;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #ff7300;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #fc913a;
  }

  &:active {
    border: 1px solid black;
  }
`;

const SaveButton = styled(EditButton)`
  background-color: #ff7300;

  &:hover {
    background-color: #fc913a;
  }

  &:active {
    border: 1px solid black;
  }
`;

const DescriptionLength = styled.div`
  position: relative;
  left: 150px;
  font-size: 14px;
  color: #b8b8b8;

  ${({ length }) =>
    length > 100 &&
    css`
      color: red; /* length가 100 이상일 때 빨간색으로 변경 */
    `}
`;
