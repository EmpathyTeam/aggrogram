import { createContext, useContext, useEffect, useState } from "react";
import { getPosts } from "../api/supabasePost.js";
import { supabase } from "../configs/supabaseConfig.js";
import { useNavigate } from "react-router-dom";

export const AggrogramContext = createContext(null);

export const useAggrogram = () => {
  return useContext(AggrogramContext);
};

export const AggrogramProvider = ({ children }) => {
  //1. 초기 값이 존재하면 이건 로딩 중인 상태, 2. null 이사람 비회원 상태, 3. 값이 들어오면 로그인 상태

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({
    email: "",
    user_metadata: { nickname: "" }
  });

  const navigate = useNavigate();

  const getAsyncPosts = async () => {
    const { data } = await getPosts();
    if (data) {
      const sortedPosts = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setPosts(sortedPosts);
      setLoading(false);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("로그아웃 오류입니다.");
      console.log("로그인 에러 =>", error);
    } else {
      alert("로그아웃 되었습니다. 안녕히 가세요!");
      navigate("/");
    }
  };

  // 유저 정보 가져온 후 전역상태로 사용하기
  const getSession = async () => {
    const response = await supabase.auth.getSession();
    setUser(response.data.session.user);
  };

  useEffect(() => {
    getAsyncPosts();
    getSession();

    // 유저의 권한 변경 여부 파악
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ? session?.user : null);
    });

    // 유저의 권한이 null일 시 구독 취소
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AggrogramContext.Provider value={{ posts, getAsyncPosts, setPosts, user, setUser, signOut, loading }}>
      {children}
    </AggrogramContext.Provider>
  );
};
