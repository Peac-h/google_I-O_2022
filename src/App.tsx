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
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Header />
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
      <Footer />
    </DarkModeProvider>
  );
};

export default App;
