import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAggrogram } from "../contexts/AggrogramContext";
import styled from "styled-components";

const MyPage = () => {
  // // const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, posts } = useAggrogram();

  const paramsId = searchParams.get("id");
  console.log("paramsId:", paramsId);

  // console.log("userId from URL params:", paramsId);
  console.log("posts:", posts);
  console.log("user:", user);

  // 유저 ID에 해당하는 게시글 필터링
  const userPosts = posts.filter((post) => post.user_id === paramsId);

  console.log("userPosts:", userPosts);

  return (
    <Section>
      <ProfileContainer>
        <ProfileImage src={user.user_metadata.avatar_url} />
        <ProfileInfo>
          <Nickname>{user.user_metadata.nickname}</Nickname>
          {user.user_metadata.description.length === 0 || !user.user_metadata.description ? (
            <Description>자기소개를 회원정보 수정 페이지에서 추가해 보세요!</Description>
          ) : (
            <Description>{user.user_metadata.description}</Description>
          )}
          <Description>{user.user_metadata.description}</Description>
        </ProfileInfo>
      </ProfileContainer>

      <SectionTitle>{user.user_metadata.nickname}님의 게시글</SectionTitle>
      <PostsContainer>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <PostCard key={post.id}>
              <img src={post.img_url} alt={post.title} />
              <h4>{post.title}</h4>
            </PostCard>
          ))
        ) : (
          <p>게시글이 없습니다.</p>
        )}
      </PostsContainer>
    </Section>
  );
};

export default MyPage;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

const PostCard = styled.div`
  flex: 1 1 250px;
  background-color: #fff;
  max-width: 250px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h4 {
    font-size: 1em;
    margin: 10px;
    text-align: center;
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 2em;
  text-align: center;
  margin: 40px 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Nickname = styled.h2`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  display: flex;
  align-items: center;
`;
