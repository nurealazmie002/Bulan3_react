import type { ReactNode, FC } from 'react';
import type { User } from '@/types';
import { createContext, useState } from 'react';

export type UserRole = 'admin' | 'user' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  role: UserRole;
  login: (username: string, role: UserRole) => void; 
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>(null);

  const login = (username: string, role: UserRole) => {
    const simulatedUser = { username };
    setUser(simulatedUser);
    setRole(role); 
  };

  const logout = () => {
    setUser(null);
    setRole(null); 
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        role, 
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};