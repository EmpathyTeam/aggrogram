// src/components/Header.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../styles/HeaderStyle";
import { AggrogramContext } from "../contexts/AggrogramContext";

const Header = () => {
  const { user, signOut } = useContext(AggrogramContext);
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.NavLinks>
        <div>
          <Link to="/">어? 그로그램</Link>
        </div>
        {user ? (
          <div>
            <Link>{user.user_metadata.nickname}님 안녕하세요</Link>
            <Link to={`/mypage?id=${user.id}`}>마이페이지</Link>
            {/* <button
              onClick={() => {
                navigate(`/mypage?id=${user.id}`);
              }}
            >
              마이 페이지
            </button> */}
            <Link onClick={signOut}>로그아웃</Link>
          </div>
        ) : (
          <div>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        )}
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
