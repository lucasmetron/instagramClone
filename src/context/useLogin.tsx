import React, { createContext, useState, ReactNode } from "react";

interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsLoggedInContext = createContext<loginProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function IsLoggedInProvider({ children }: ContextProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
}

export default IsLoggedInContext;
