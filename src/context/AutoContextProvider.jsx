import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AutoContextProvider = ({ children }) => {
  console.log(children);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AutoContextProvider;
