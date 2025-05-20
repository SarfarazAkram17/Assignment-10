import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const userInfo = {
    createUser,
    loginUser,

  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
