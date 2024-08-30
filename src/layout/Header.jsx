// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/HeaderStyle";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.NavLinks>
        <div>
          <Link to="/">어? 그로그램</Link>
        </div>
        <div>
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </div>
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
