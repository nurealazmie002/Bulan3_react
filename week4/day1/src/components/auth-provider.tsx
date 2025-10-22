import React, { createContext, useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  const navigate = useNavigate();

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
    navigate("/products"); 
  };



  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    navigate("/"); 
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token] 
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth harus dipakai di dalam AuthProvider");
  }
  return context;
};