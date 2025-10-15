import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "", email: "", isLoggedIn: false });

  const login = (name, email) => setUser({ name, email, isLoggedIn: true });
  const logout = () => setUser({ name: "", email: "", isLoggedIn: false });
  const updateProfile = (name, email) => setUser((prev) => ({ ...prev, name, email }));

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used inside UserProvider");
  return context;
}

