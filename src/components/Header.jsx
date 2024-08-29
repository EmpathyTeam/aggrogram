// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/HeaderStyle"

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link to="/">어? 그로그램</Link>
      <S.NavLinks>
        <Link to="/join">로그인</Link>
        <Link to="/join">회원가입</Link>
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
