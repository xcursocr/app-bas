import { createContext, useEffect, useState } from "react";
import { authCtrl, userCtrl } from "@/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    reLogin();
  }, []);

  const reLogin = async () => {
    setIsLoading(true);
    const token = await authCtrl.getToken();
    if (!token) {
      logout(), setIsLoading(false);
      return;
    } else {
      await login(token);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const login = async (token) => {
    try {
      setIsLoading(true);
      const resp = await userCtrl.getMe();
      setUser(resp);
      console.log("USER", user);

      setToken(token);
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
      setIsLoading(false);
    }
  };

  const reloadUser = async () => {
    const resp = await userCtrl.getMe();
    setUser(resp);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    authCtrl.removeToken();
  };

  const data = {
    user,
    token,
    login,
    logout,
    reloadUser,
  };

  if (isLoading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
