// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/HeaderStyle";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    alert("로그인 되었습니다.")
    setUser("공감해조");
  }
  const handleSignOut = () => {
    alert("로그아웃 처리가 완료됐습니다. 메인페이지로 이동할께요.");
    setUser(null);
  };

  return (
    <S.HeaderContainer>
      <S.NavLinks>
        <div>
          <Link to="/">어? 그로그램</Link>
        </div>
        {user ? (
          <div>
            <Link>{user}님 안녕하세요</Link>
            <Link onClick={handleSignOut}>로그아웃</Link>
          </div>
          
        ) : (
          <div>
            <Link onClick={handleSignIn}>로그인</Link>
            <Link to="/join">회원가입</Link>
          </div>
        )}
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
