import { createContext, useContext, useEffect, useState } from "react";
import { getPosts } from "../api/fetchPostData.js";

export const AggrogramContext = createContext(null);

export const useAggrogram = () => {
  return useContext(AggrogramContext);
};

export const AggrogramProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getAsyncPosts = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    getAsyncPosts();
  }, []);

  return <AggrogramContext.Provider value={{ posts }}>{children}</AggrogramContext.Provider>;
};
