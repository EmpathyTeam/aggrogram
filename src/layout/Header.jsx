// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/HeaderStyle";
import { supabase } from "../config/supabaseConfig";

const Header = () => {
  const Header = () => {
    // 로그아웃
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      alert("로그아웃되었습니다");
    };

    return (
      <S.HeaderContainer>
        <Link to="/">어? 그로그램</Link>
        <S.NavLinks>
          <Link to="/signin">로그인</Link>

          <Link to="/signup">회원가입</Link>
          <button onClick={handleSignOut}>로그아웃</button>
        </S.NavLinks>
      </S.HeaderContainer>
    );
  };
};
export default Header;
