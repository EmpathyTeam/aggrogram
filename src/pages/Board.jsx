import * as S from "../styles/BoardStyle.js";

import React, { useEffect } from "react";
import { supabase } from "../configs/supabaseConfig.js";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";
import BoardButton from "../components/commons/RadiusOrangeButton.jsx";

const Board = () => {
  const navigate = useNavigate();
  const { posts, setPosts, user } = useAggrogram();

  const searchParams = new URLSearchParams(location.search);
  const postId = Number(searchParams.get("id"));
  const foundPost = posts.find((p) => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //뒤로가기 버튼 클릭시
  const handleBack = () => {
    navigate(-1);
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

    if (foundPost.user_id === user.id && data) {
      const filteredList = posts.filter((post) => post.id !== postId);
      alert("삭제가 완료되었습니다.");
      setPosts(filteredList);
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
            </div>

            <div className="postInfo">
              <div className="postUserInfo">
                <img className="profileImg" src={foundPost.avatar_url} />
                <div>{foundPost.nickname}</div>
              </div>
              <div>{new Date(foundPost.created_at).toISOString().split("T")[0]}</div>
            </div>

            <div className="image">
              <img src={foundPost.img_url} alt="" />
            </div>

            <div className="context">{foundPost.context}</div>
          </div>

          <div>
            <div>
              <BoardButton onClick={handleBack}>뒤로가기</BoardButton>
              {user && foundPost.user_id === user.id ? (
                <>
                  <BoardButton onClick={handleEdit}> 수정하기</BoardButton>
                  <BoardButton onClick={() => handelDelete(postId)}>삭제하기</BoardButton>
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
