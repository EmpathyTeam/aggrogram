import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { JoinContainer } from "../../pages/Join";
import { supabase } from "../../configs/supabaseConfig";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 이메일 & 비밀번호 정규식
  const emailRegEx = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

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
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMsg("");
      setIsEmail(true);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    // 로그인 처리
    const { data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    navigate("/");
  };

  return (
    <JoinContainer>
      <div>
        <form onSubmit={handleSignin}>
          <h1>Login</h1>
          <input required placeholder="이메일을 입력해주세요." type="email" value={email} onChange={checkEmail} />
          <p className="message">{emailMsg}</p>
          <input
            required
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              passwordCheck(e.target.value);
            }}
          />
          <button type="submit" disabled={!(setIsEmail && setIsPassword)}>
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
