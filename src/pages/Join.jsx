import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import useSupabase from "../config/supabaseConfig";
import { AggrogramContext } from "../contexts/AggrogramContext";
import { supabase } from "../configs/supabaseConfig";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();
  // const supabase = useSupabase();

  const { user, setUser } = useContext(AggrogramContext);

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
    alert("회원가입이 완료되었습니다!");
    navigate("/signin");
    console.log(data);
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

export default Join;

export const JoinContainer = styled.div`
  width: 500px;
  height: 500px;
  display: relative;
  border: 1px solid #fc913a;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  border-radius: 20px;

  h1 {
    font-size: 32px;
    margin-bottom: 50px;
    font-weight: 700;
    color: #fc913a;
  }

  div {
    margin-top: 60px;
  }

  input {
    width: 400px;
    height: 50px;
    display: flex;
    margin: auto;
    margin-bottom: 20px;
    border: 0;
    border-radius: 10px;
    background-color: #ececec;
    padding-left: 20px;
  }

  button {
    width: 420px;
    height: 60px;
    border: 0;
    border-radius: 10px;
    background-color: #fc913a;
    color: white;
    margin: 20px auto 10px auto;
    font-size: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #777777;
    font-size: 14px;
  }

  span {
    color: black;
    font-weight: 500;
  }
`;
