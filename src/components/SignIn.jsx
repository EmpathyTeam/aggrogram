import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseConfig";
import { JoinContainer } from "../pages/Join";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();

    // 로그인 처리하기
    try {
      await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      alert("로그인 완료");
      setSignIn(true);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  return (
    <JoinContainer>
      <div>
        <form onSubmit={handleSignin}>
          <h1>Login</h1>
          <input
            placeholder="이메일을 입력해주세요."
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
        <Link to="/signup">
          아직 어그로그램 회원이 아니신가요? <span>회원가입</span>
        </Link>
      </div>
    </JoinContainer>
  );
};

export default SignIn;
