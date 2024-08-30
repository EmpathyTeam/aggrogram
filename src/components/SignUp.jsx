import React, { useState } from "react";
import { supabase } from "../config/supabaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { JoinContainer } from "../pages/Join";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  // 회원 가입
  const handlesignUp = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          nickname: nickname,
          avatar_url: null,
          description: null
        }
      }
    });
    alert("회원가입이 완료되었습니다!");
    navigate("/signin");
  };

  return (
    <JoinContainer>
      <div>
        <form onSubmit={handlesignUp}>
          <h1>SignUp</h1>
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
          <input
            placeholder="닉네임을 입력해주세요."
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit">가입하기</button>
        </form>
        <Link to="/signin">
          이미 계정이 있으신가요? <span>로그인</span>
        </Link>
      </div>
    </JoinContainer>
  );
};

export default SignUp;
