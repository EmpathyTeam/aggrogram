import * as S from "../styles/RouterStyle";

import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";

import AddBoard from "../components/board/AddBoard";
import { AggrogramContext } from "../contexts/AggrogramContext";
import Board from "../pages/Board";
import LayOut from "../layouts/LayOut";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UpdateBoard from "../components/board/UpdateBoard";

// 로그인한 상태라면 접근 불가능한 라우터
const AuthRoute = () => {
  const { user } = useContext(AggrogramContext);
  console.log(user);

  // TODO: 유저가 있는데 다시 로그인 시도 시 알럿
  if (user) {
    alert("이미 로그인되어 있습니다.");
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

// 로그인한 상태에서만 접근 가능한 라우터
const PrivateRoute = () => {
  const { user } = useContext(AggrogramContext);
  if (!user) {
    alert("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.");
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <S.RoutesArea>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Main />} />
            <Route path="/board" element={<Board />} />

            <Route element={<AuthRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/write" element={<AddBoard />} />
              <Route path="/update" element={<UpdateBoard />} />
            </Route>
          </Route>
        </Routes>
      </S.RoutesArea>
    </BrowserRouter>
  );
};

export default Router;
