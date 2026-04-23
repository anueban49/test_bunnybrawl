"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Navigators } from "../types";

interface DisplayContext {
  active: Navigators;
  switchDisplay: (active: Navigators) => void;
}

export const DisplayContext = createContext<DisplayContext | null>(null);

export const DisplayProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<Navigators>(() => {
    if (typeof window === "undefined") return "dashboard";
    return (localStorage.getItem("page") as Navigators) || "dashboard";
  });

  useEffect(() => {
    localStorage.setItem("page", active);
  }, [active]);

  const switchDisplay = (active: Navigators) => {
    setActive(active);
  };
  //this one sets lang for html
  return (
    <DisplayContext.Provider value={{ active, switchDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error(
      "useDisplay must be used within a DisplayProvider",
    );
  }
  return context;
};
