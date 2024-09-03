import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { JoinContainer } from "../../pages/Join";
import { supabase } from "../../configs/supabaseConfig";
import styled from "styled-components";
import { AggrogramContext } from "../../contexts/AggrogramContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { user, signOut } = useContext(AggrogramContext);

  // 이메일 정규식
  const emailRegEx = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 오류 메세지
  const [emailMsg, setEmailMsg] = useState("");

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegEx.test(currentEmail)) {
      setEmailMsg("⚠ 이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMsg("✅ 올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  };

  // 로그인 버튼 클릭 시
  const handleSignin = async (e) => {
    e.preventDefault();

    // 로그인 처리
    const { data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    alert(`안녕하세요! 메인 페이지로 바로 이동합니다.🚗💨`);
  };
  return (
    <JoinContainer>
      <div>
        <form onSubmit={handleSignin}>
          <h1>Login</h1>
          <input required placeholder="이메일을 입력해주세요." type="email" value={email} onChange={checkEmail} />
          <p className={isEmail ? "passMessage" : "errorMessage"}>{emailMsg}</p>
          <input
            required
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // passwordCheck(e.target.value);
            }}
          />
          <button className="signinBtn" type="submit" disabled={!(setIsEmail && setIsPassword)}>
            로그인
          </button>
        </form>
        <Link to="/signup">
          아직 어그로그램 회원이 아니신가요? <span>회원가입</span>
        </Link>
      </div>
    </JoinContainer>
  );
};

export default SignIn;
