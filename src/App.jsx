import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import Board from "./pages/Board";
import * as S from "./styles/AppStyle";
import LayOut from "./components/LayOut";
import Login from "./pages/Login";
import { AggrogramProvider } from "./context/AggrogramContext.jsx";

function App() {
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
