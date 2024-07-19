import { createContext, useState, useEffect, ReactNode } from "react";

export const DarkModeContext = createContext<
  | {
      isDarkMode: boolean;
      toggleDarkMode: () => void;
    }
  | undefined
>(undefined);

export const DarkModeProvider = (props: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" || savedMode === null;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
