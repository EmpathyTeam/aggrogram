import * as S from "./styles/AppStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Board from "./pages/Board";
import Join from "./pages/Join";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const supabase = createClient(
  "https://untacqjpmvnegdbefbrr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudGFjcWpwbXZuZWdkYmVmYnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTU3NTksImV4cCI6MjA0MDQ5MTc1OX0.G7F9PbghHYiUbDh131MRJO9ePE-iuHRFTC-Ct71xbNs"
);

function App() {
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await supabase.from("posts").select();
    console.log(data);
  };

  return (
    <>
      <BrowserRouter>
        <S.RoutesArea>
          <Routes>
            <Route path={"/"} element={<Main />}>
              <Route path={"/join"} element={<Join />} />
              <Route path={"/myPage"} element={<MyPage />} />
              <Route path={"/board"} element={<Board />} />
            </Route>
          </Routes>
        </S.RoutesArea>
      </BrowserRouter>
    </>
  );
}

export default App;
