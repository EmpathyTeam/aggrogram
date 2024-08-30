import React, { useContext } from "react";
import * as S from "../../styles/sideBarStyle";
import RoundButton from "./RoundButton";
import { useNavigate } from "react-router-dom";
import { AggrogramContext } from "../../context/AggrogramContext";
const Sidebar = () => {
  const { user } = useContext(AggrogramContext);

  const navigate = useNavigate("");

  const handleCreatePostClick = () => {
    if (user === null) {
      alert("로그인한 유저만 작성이 가능합니다.");
      navigate("signin");
    } else {
      navigate("board");
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 부드러운 스크롤 효과
    });
  };
  return (
    <S.SidebarContainer>
      <RoundButton onClick={handleCreatePostClick} type="write">
        글 작성
      </RoundButton>
      <RoundButton onClick={scrollToTop} type="top">TOP</RoundButton>
    </S.SidebarContainer>
  );
};

export default Sidebar;
