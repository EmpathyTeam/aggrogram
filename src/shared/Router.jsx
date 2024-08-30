import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "../layout/LayOut";
import Main from "../pages/Main";
import Join from "../pages/Join";
import MyPage from "../pages/MyPage";
import Board from "../pages/Board";
import * as S from "../styles/RouterStyle";
const Router = () => {
  return (
    <BrowserRouter>
      <S.RoutesArea>
        <Routes>
          <Route path={"/"} element={<LayOut />}>
            <Route index element={<Main />} />
            <Route path={"join"} element={<Join />} />
            <Route path={"myPage"} element={<MyPage />} />
            <Route path={"board"} element={<Board />} />
          </Route>
        </Routes>
      </S.RoutesArea>
    </BrowserRouter>
  );
};

export default Router;
