import React, { useState } from "react";
import { Link } from "react-router-dom";
import { JoinContainer } from "../pages/Join";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const userLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: "someone@email.com",
      password: "ekmgVHOJbMJmmNMAojQj"
    });
    alert("로그인 완료");
    setSignIn();
  };

  return (
    <JoinContainer>
      <div>
        <form>
          <h1>Login</h1>
          <input placeholder="이메일을 입력해주세요." type="text" />
          <input placeholder="비밀번호를 입력해주세요." type="password" />
          <button type="submit">로그인</button>
        </form>
        <Link to="/join">
          아직 어그로그램 회원이 아니신가요? <span>회원가입</span>
        </Link>
      </div>
    </JoinContainer>
  );
};

export default Login;
