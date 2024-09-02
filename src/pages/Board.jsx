import styled from "styled-components";
import React from "react";

import { supabase } from "../configs/supabaseConfig.js";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));
  const { posts, setPosts, user } = useAggrogram();
  const foundPost = posts.find((p) => p.id === postId);
  console.log(foundPost);
  const navigate = useNavigate();

  //뒤로가기 버튼 클릭시
  const handleBack = () => {
    navigate("/");
  };
  //수정버튼클릭시
  const handleEdit = () => {
    if (foundPost.user_id === user.id) {
      navigate(`/update?id=${postId}`);
    } else {
      alert("작성자만 수정이 가능합니다.");
    }
  };
  //삭제버튼클릭시
  const handelDelete = async (postId) => {
    const { data, error } = await supabase.from("posts").delete().eq("id", postId).select();

    console.log("삭제하기 데이터입니다", data);
    console.log("postid입니다", postId);
    if (foundPost.user_id === user.id && data) {
      const filteredList = posts.filter((post) => post.id !== postId);
      setPosts(filteredList);
      alert("삭제완료");
      navigate("/");
    } else {
      alert("작성자가 다릅니다");
      console.error(error);
    }
  };
  console.log("user입니다", user);
  return (
    <BoardContainer>
      {!foundPost ? (
        <div>게시글 찾을 수 없음</div>
      ) : (
        <div className="postArea">
          <div className="postInfoArea">
            <div className="title">
              {foundPost.title}
              {foundPost.created_at}
            </div>
            <div className="image">
              <img src={foundPost.img_url} alt="" />
            </div>
            <div className="context">{foundPost.context}</div>
          </div>
          <div>
            <button onClick={handleBack}>뒤로가기</button>
            <button onClick={handleEdit}> 수정하기</button>
            <button onClick={() => handelDelete(postId)}>삭제하기</button>
          </div>
        </div>
      )}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 50px;

  .postInfoArea{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .postArea {
    border: 1px solid #fc913a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 30px;
  }

  .title {
    background-color: lightgray;
    border: none;
    width: 500px;
    height: 50px;
    padding: 10px;
  }

  .image {
    width: 500px;
    height: 300px;
    border: 1px solid black;
    padding: 10px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .context {
    background-color: lightgray;
    border: none;
    width: 500px;
    height: 200px;
    padding: 10px;
  }

  button {
    background-color: #fc913a;
    color: white;
    border: none;
    padding: 10px;
    margin: 0 20px;
  }
`;
