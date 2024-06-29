import Features from "./freatures/sections/Features";
import Footer from "./freatures/Footer";
import Header from "./freatures/Header";
import Hero from "./freatures/Hero";
import Keynotes from "./freatures/sections/Keynotes";
import Main from "./freatures/Main";
import Skills from "./freatures/sections/Skills";
import Sections from "./freatures/Sections";

const App = () => (
  <div className="app">
    <Header />
    <Main>
      <Hero />
      <Sections>
        <Keynotes />
        <Features />
        <Skills />
      </Sections>
    </Main>
    <Footer />
  </div>
);

export default App;
