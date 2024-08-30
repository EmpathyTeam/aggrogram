import * as S from "./styles/AppStyle";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AggrogramProvider } from "./context/AggrogramContext.jsx";
import Board from "./pages/Board";
import Join from "./pages/Join";
import LayOut from "./components/LayOut";
import Login from "./pages/Login";
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
      <AggrogramProvider>
        <BrowserRouter>
          <S.RoutesArea>
            <Routes>
              <Route path="/" element={<LayOut />}>
                <Route index element={<Main />} />
                <Route path="/join" element={<Join />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/board" element={<Board />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </S.RoutesArea>
        </BrowserRouter>
      </AggrogramProvider>
    </>
  );
}

export default App;
