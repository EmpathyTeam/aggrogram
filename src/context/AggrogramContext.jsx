import { createContext, useContext, useEffect, useState } from "react";
import { getPosts } from "../api/fetchPostData.js";
import { supabase } from "../config/supabaseConfig.js";

export const AggrogramContext = createContext(null);

export const useAggrogram = () => {
  return useContext(AggrogramContext);
};

export const AggrogramProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const getAsyncPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
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
      console.log("session?.user => ", session?.user);
      setUser(session?.user ? session?.user : null);
    });

    // 유저의 권한이 null일 시 구독 취소
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  return <AggrogramContext.Provider value={{ posts, user, setUser }}>{children}</AggrogramContext.Provider>;
};
