import React, { useState } from "react";
import { supabase } from "../configs/supabaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { JoinContainer } from "../pages/Join";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  // 이메일 & 비밀번호 정규식
  const emailRegEx = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  // 유효성 검사
  // TODO: 닉네임 글자수 제한
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // 오류 메세지
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);

    if (!emailRegEx.test(currentEmail)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailMsg("사용 가능한 이메일입니다.");
      setIsEmail(true);
    }
  };

  // 비밀번호 유효성 검사
  const checkPassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);

    if (!passwordRegEx.test(currentPassword)) {
      setPasswordMsg("보안이 취약한 비밀번호입니다.");
      setIsPassword(false);
    } else {
      setPasswordMsg("사용 가능한 비밀번호입니다.");
      setIsPassword(true);
    }
  };

  // 회원 가입
  const handlesignUp = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          nickname: nickname,
          avatar_url: "",
          description: ""
        }
      }
    });
    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    navigate("/signin");
  };

  return (
    <JoinContainer>
      <div>
        <form onSubmit={handlesignUp}>
          <h1>SignUp</h1>
          <input required placeholder="이메일을 입력해주세요." type="email" value={email} onChange={checkEmail} />
          <p className="message">{emailMsg}</p>
          <input
            required
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={password}
            onChange={checkPassword}
          />
          <p className="message">{passwordMsg}</p>
          <input
            required
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
