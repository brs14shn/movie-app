import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { userObserver } from "../auth/firebase";

//? 1-Defining
export const AuthContext = createContext();

//? 3-Consume function (Custom Hook)

export const useAuthContext = () => {
  return useContext(AuthContext);
};

//? 2- Provider Component

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
