import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthUser = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
   const[loading, setLoading] = useState(true);
   const[user, setUser] = useState({})
   const googleProvider = new GoogleAuthProvider();


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  };
  const logOut = () =>{
     setLoading(true)
    return signOut(auth)
  }

  const googleLogInUser = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

const ProfileUdpadted = (profile) =>{
  setLoading(true)
  return updateProfile(auth.currentUser, profile)
}
useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth, currentUser =>{
 setUser(currentUser)
 setLoading(false)

})

return unSubscribe()

},[])

  const authInfo = {user,loading,createUser, 
    ProfileUdpadted, loginUser,googleLogInUser,
   logOut
  };
  return (
    <div>
      <AuthUser.Provider value={authInfo}>{children}</AuthUser.Provider>
    </div>
  );
};

export default AuthContext;
