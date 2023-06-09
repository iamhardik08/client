import { useState } from "react";
import { appAuthProvider } from "./auth";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const signin = (email, password, callback) => {
    setEmail(email);
    return appAuthProvider.signin(email, password, (id, token) => {
      setId(id);
      setToken(token);
      callback()
    });
  };

  const signout = (callback) => {
    return appAuthProvider.signout(() => {
        setEmail(null);
        setId(null);
        setToken(null);
        callback()
    });
  };

  const value = { email, id, token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
