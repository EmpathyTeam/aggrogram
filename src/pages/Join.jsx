import React, { useEffect, useState } from "react";

import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://untacqjpmvnegdbefbrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudGFjcWpwbXZuZWdkYmVmYnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTU3NTksImV4cCI6MjA0MDQ5MTc1OX0.G7F9PbghHYiUbDh131MRJO9ePE-iuHRFTC-Ct71xbNs"
);
import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import useSupabase from "../config/supabaseConfig";

const Join = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();
  const supabase = useSupabase();

  // 회원 가입
  const signUp = async (e) => {
    e.preventDefault();

    if (email !== "" && pw !== "" && nickname !== "") {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: pw,
        options: {
          data: {
            nickname: nickname,
            avatar_url: null
          }
        }
      });
      alert("회원가입이 완료되었습니다!");
      navigate("/");
      console.log(data);
    } else {
      alert("누락된 항목이 있습니다!");
      return;
    }
  };

  return (
    <JoinContainer>
      <div>
        <form onSubmit={signUp}>
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
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <input
            placeholder="닉네임을 입력해주세요."
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit" onClick={signUp}>
            가입하기
          </button>
        </form>
        <Link to="/login">
          이미 계정이 있으신가요? <span>로그인</span>
        </Link>
      </div>
    </JoinContainer>
  );
};

  useEffect(() => {
    getPosts();
  }, []);

  const signUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: pw,
      options: {
        data: {
          nickname: nickname,
          avatar_url: null
        }
      }
    });
    console.log;
  };

  const login = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw
    });
    console.log(data);
    alert("로그인됬습니다");
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return (
    <div>
      <button onClick={logout}>로그아웃</button>{" "}
      <form onSubmit={login}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={pw} onChange={(e) => setPw(e.target.value)} />
        {/* <input value={nickname} onChange={(e) => setNickname(e.target.value)} /> */}
        <button type="submit">확인</button>
      </form>
    </div>
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
