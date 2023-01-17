import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Proyects from "./components/proyects/Proyects";
import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section name="home" styles="home-full-screen">
        <Home />
      </Section>
      <hr />
      <Section name="skills" styles="full-screen text-center">
        <Skills />
      </Section>
      <hr />
      <Section name="proyects" styles="full-screen text-center">
        <Proyects />
      </Section>
    </div>
  );
}

export default App;
