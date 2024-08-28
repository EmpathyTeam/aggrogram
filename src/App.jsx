import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import Board from "./pages/Board";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/join"} element={<Join />} />
          <Route path={"/myPage"} element={<MyPage />} />
          <Route path={"/board"} element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
