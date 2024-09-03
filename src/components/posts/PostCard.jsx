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
        <img src={post.img_url} alt=" " />
      </div>
      <div className="contentsArea">
        <h1>{post.title}</h1>
        <div className="profileArea">
          <div className="userInfo">
            <img src={post.avatar_url} alt=" " />
            <p className="userNickname">{post.nickname}</p>
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
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  cursor: pointer;

  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 3px 6px rgba(80, 80, 80, 0.4);
  }

  .imageArea {
    width: 100%;
    height: 70%;
    background-image: linear-gradient(145deg, rgba(245, 245, 245, 0.9), #ffd9b9);

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
    gap: 15px;

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
        align-items: center;
        justify-content: center;
        gap: 5px;

        img {
          object-fit: cover;
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }

        .userNickname {
          color: #3f3f3f;
        }
      }
    }
  }
`;
