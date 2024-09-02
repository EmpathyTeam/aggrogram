import * as S from "../styles/BoardStyle.js";
import React from "react";

import { supabase } from "../configs/supabaseConfig.js";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  const { posts, setPosts, user } = useAggrogram();

  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));
  const foundPost = posts.find((p) => p.id === postId);

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

  return (
    <S.BoardContainer>
      {!foundPost ? (
        <div>게시글 찾을 수 없음</div>
      ) : (
        <div className="postArea">
          <div className="postInfoArea">
            <div className="title">
              <div>{foundPost.title}</div>
              <div>{new Date(foundPost.created_at).toISOString().split("T")[0]}</div>
            </div>
            <div className="image">
              <img src={foundPost.img_url} alt="" />
            </div>
            <div className="context">{foundPost.context}</div>
          </div>
          <div>
            <div>
              <button onClick={handleBack}>뒤로가기</button>
              {user && foundPost.user_id === user.id ? (
                <>
                  <button onClick={handleEdit}> 수정하기</button>
                  <button onClick={() => handelDelete(postId)}>삭제하기</button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </S.BoardContainer>
  );
};

export default Board;
