import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import Board from "./pages/Board";
import * as S from "./styles/AppStyle";
import LayOut from "./components/LayOut";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <S.RoutesArea>
          <Routes>
            <Route path={"/"} element={<LayOut />}>
              <Route index element={<Main />} />
              <Route path={"join"} element={<Join />} />
              <Route path={"myPage"} element={<MyPage />} />
              <Route path={"board"} element={<Board />} />
              <Route path={"/join/login"} element={<Login />} />
            </Route>
          </Routes>
        </S.RoutesArea>
      </BrowserRouter>
    </>
  );
}

export default App;
