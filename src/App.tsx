import { useRef } from "react";
import Section from "./components/Section";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Proyects from "./components/proyects/Proyects";
import Scroll from "./components/header/Scroll";
import "./App.css";

function App() {
  const skillsRef = useRef<HTMLHRElement>(null);
  const proyectRef = useRef<HTMLHRElement>(null);

  return (
    <>
      <Header skillsRef={skillsRef} proyectRef={proyectRef} />
      <Section name="home" styles="home-full-screen">
        <Home />
      </Section>
      <hr ref={skillsRef} />
      <Section name="skills" styles="full-screen text-center">
        <Skills />
      </Section>
      <hr ref={proyectRef} />
      <Section name="proyects" styles="full-screen text-center">
        <Proyects />
      </Section>
      <Scroll />
    </>
  );
}

export default App;
