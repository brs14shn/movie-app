import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AutoContextProvider = ({ children }) => {
  console.log(children);
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AutoContextProvider;
