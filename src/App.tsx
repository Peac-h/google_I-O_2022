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

const App = () => (
  <div className="app">
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
  </div>
);

export default App;
