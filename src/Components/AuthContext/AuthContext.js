import React, { createContext } from "react";

export const AuthUser = createContext();

const AuthContext = ({ children }) => {

    const createUser =()=>{
    
    }
  const authInfo = {};
  return (
    <div>
      <AuthUser.Provider value={authInfo}>{children}</AuthUser.Provider>
    </div>
  );
};

export default AuthContext;
