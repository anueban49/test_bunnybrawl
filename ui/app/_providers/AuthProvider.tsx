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
  const [user, setUser] = useState<User>({
    id: 'guest',
    username: 'Bunny Brawler',
    email: 'guest@bunnybrawl.io',
    gameData: {
      id: 'guest-game',
      level: 1,
      xp: 0,
      abilities: ['foresight'],
      logbook: [],
      coins: 0,
      rank: 'brawler',
    },
    joinedAt: new Date(),
    lastSeen: new Date(),
  });

  const register = async () => {
    try {
      // no-op for now
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    try {
      // no-op for now
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      // no-op for now
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
