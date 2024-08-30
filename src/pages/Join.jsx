import React, { useEffect, useState } from "react";

import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://untacqjpmvnegdbefbrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudGFjcWpwbXZuZWdkYmVmYnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTU3NTksImV4cCI6MjA0MDQ5MTc1OX0.G7F9PbghHYiUbDh131MRJO9ePE-iuHRFTC-Ct71xbNs"
);

const Join = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");

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
