// React 라이브러리
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

//스타일
import * as S from "../../styles/sideBarStyle";

//컴포넌트
import RoundButton from "./RoundButton";

// 상태관리 컨텍스트
import { AggrogramContext } from "../../contexts/AggrogramContext";

const Sidebar = () => {
  const { user } = useContext(AggrogramContext);

  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    if (user === null) {
      alert("로그인한 유저만 작성이 가능합니다.");
      navigate("/signin");
    } else {
      navigate("/write");
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <S.SidebarContainer>
      <RoundButton onClick={handleCreatePostClick} type="write">
        Write
      </RoundButton>
      <RoundButton onClick={scrollToTop} type="top">
        TOP
      </RoundButton>
    </S.SidebarContainer>
  );
};

export default Sidebar;
