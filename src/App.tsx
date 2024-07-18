import Sessions from "./freatures/sections/Sessions";
import Footer from "./freatures/Footer";
import Header from "./freatures/Header";
import Hero from "./freatures/Hero";
import Keynotes from "./freatures/sections/Keynotes";
import Main from "./freatures/Main";
import Skills from "./freatures/sections/Skills";
import Sections from "./freatures/Sections";
import Products from "./freatures/sections/Products";
import Recap from "./freatures/sections/Recap";
import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" || !savedMode;
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
    <div className="app">
      <Header isDarkMode={isDarkMode} />
      <Main>
        <Hero />
        <Sections>
          <Keynotes />
          <Sessions />
          <Skills />
          <Products />
          <Recap />
        </Sections>
      </Main>
      <Footer toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
