// src/components/Header.js
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../styles/HeaderStyle";
import { AggrogramContext } from "../contexts/AggrogramContext";
import BoardButton from "../components/commons/RadiusOrangeButton";

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
          <div className="loginArea">
            <Link to={`/mypage?id=${user.id}`} className="welcomeMessage">
              <div>
                <img src={user.user_metadata.avatar_url} alt="" />
              </div>
              <span>{user.user_metadata.nickname} 님</span>
            </Link>
            {/* <button
              onClick={() => {
                navigate(`/mypage?id=${user.id}`);
              }}
            >
              마이 페이지
            </button> */}
            <BoardButton  onClick={signOut}>
              로그아웃
            </BoardButton>
          </div>
        ) : (
          <div className="logoutArea">
            <BoardButton onClick={() => navigate("/signin")}>
              로그인
            </BoardButton>
            <BoardButton onClick={() => navigate("/signup")}>
              회원가입
            </BoardButton>
          </div>
        )}
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default Header;
