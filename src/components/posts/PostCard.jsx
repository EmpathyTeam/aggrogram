import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/board?id=${post.id}`);
  };
  
  return (
    <StyledPostCard onClick={goToDetail} key={post.id}>
      <div className="imageArea">
        <img src={post.img_url} alt="이미지" />
      </div>
      <div className="contentsArea">
        <h1>{post.title}</h1>
        <div className="profileArea">
          <div className="userInfo">
            <img src="" alt=" " />
            <p className="userNickname">{post.nickname}</p>
          </div>
          <div className="engagementStats">
            <p>좋아요</p>
            <p>조회수</p>
          </div>
        </div>
      </div>
    </StyledPostCard>
  );
};

export default PostCard;

const StyledPostCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(33% - 28px);
  height: 300px;
  border: 1px solid #777777;
  border-radius: 3px;
  padding: 5px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }

  .imageArea {
    width: 100%;
    height: 70%;
    background-color: #9e9e9e;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .contentsArea {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    h1 {
      font-size: 22px;
      font-weight: bold;
    }

    .profileArea {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        font-size: 16px;
        font-weight: bolder;
        color: #616161;
      }

      .userInfo {
        display: flex;
        flex-direction: row;
        gap: 10px;

        .userNickname {
          color: red;
        }
      }

      .engagementStats {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
`;
