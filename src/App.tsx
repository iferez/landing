import { useRef } from "react";
import Section from "./components/Section";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Scroll from "./components/header/Scroll";
import "./App.css";

function App() {
  const skillsRef = useRef<HTMLHRElement>(null);
  const projectRef = useRef<HTMLHRElement>(null);

  return (
    <>
      <Header skillsRef={skillsRef} projectRef={projectRef} />
      <Section name="home" styles="home-full-screen">
        <Home />
      </Section>
      <hr ref={skillsRef} />
      <Section name="skills" styles="full-screen text-center">
        <Skills />
      </Section>
      <hr ref={projectRef} />
      <Section name="projects" styles="full-screen text-center">
        <Projects />
      </Section>
      <Scroll />
    </>
  );
}

export default App;
