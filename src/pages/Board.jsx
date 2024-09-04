import * as S from "../styles/BoardStyle.js";
import React, { useEffect, useState } from "react";
import { supabase } from "../configs/supabaseConfig.js";
import { useAggrogram } from "../contexts/AggrogramContext.jsx";
import { useNavigate } from "react-router-dom";
import RadiusOrangeButton from "../components/commons/RadiusOrangeButton.jsx";
import Spinner from "../components/commons/Spinner.jsx";

const Board = () => {
  const navigate = useNavigate();
  const { posts, setPosts, user } = useAggrogram();
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(window.location.search);
  const postId = Number(searchParams.get("id"));
  const foundPost = posts ? posts.find((p) => p.id === postId) : null;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select();
      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [setPosts]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    if (foundPost.user_id === user.id) {
      navigate(`/update?id=${postId}`);
    } else {
      alert("작성자만 수정이 가능합니다.");
    }
  };

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

  if (loading) {
    return <S.SpinnerContainer><Spinner/></S.SpinnerContainer>;
  }

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
                <img className="profileImg" src={foundPost.avatar_url} alt="Profile" />
                <div>{foundPost.nickname}</div>
              </div>
              <div>{new Date(foundPost.created_at).toISOString().split("T")[0]}</div>
            </div>

            <div className="image">
              <img src={foundPost.img_url} alt="Post" />
            </div>

            <div className="context">{foundPost.context}</div>
          </div>

          <div>
            <div>
              <RadiusOrangeButton onClick={handleBack}>뒤로가기</RadiusOrangeButton>
              {user && foundPost.user_id === user.id ? (
                <>
                  <RadiusOrangeButton onClick={handleEdit}> 수정하기</RadiusOrangeButton>
                  <RadiusOrangeButton onClick={() => handelDelete(postId)}>삭제하기</RadiusOrangeButton>
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
