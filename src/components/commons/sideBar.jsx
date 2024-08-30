import React from "react";
import * as S from "../../styles/sideBarStyle";
import RoundButton from "./RoundButton";
const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <RoundButton type="write">글 작성</RoundButton>
      <RoundButton type="top">TOP</RoundButton>
    </S.SidebarContainer>
  );
};

export default Sidebar;
