"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User } from "../types/index";

interface AuthContextType {
  register: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  user: User;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = async () => {
    try {
        
    } catch (e) {
      console.log(e);
    }
  };
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
