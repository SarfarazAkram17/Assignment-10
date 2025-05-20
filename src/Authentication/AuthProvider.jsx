import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading]=useState(true)
  const [user, setUser] = useState(null)

  
  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
