import React, { createContext, useState, ReactNode } from "react";
import { PostProps } from "../types/PostProps";

interface UsePostsProps {
  posts: PostProps[];
  setPosts: React.Dispatch<React.SetStateAction<PostProps[]>>;
}

const UsePostsContext = createContext<UsePostsProps>({
  posts: [],
  setPosts: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function UsePostsProvider({ children }: ContextProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);

  return (
    <UsePostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </UsePostsContext.Provider>
  );
}

export default UsePostsContext;
