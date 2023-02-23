import Section from "../Section";
import Column from "../Column";
import "./header-style.css";
import logo from "../../assets/img/if2.png";
import { useState } from "react";

interface Ref {
  //RefObject<HTMLDivElement>
  skillsRef: any;
  projectRef: any;
}

function Header({ skillsRef, projectRef }: Ref) {
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section name="header" styles="w-100">
      <Column widthMobile={6} widthDestok={8} styles="">
        <img
          src={logo}
          alt="Logo"
        />
      </Column>
      <Column widthMobile={6} widthDestok={4} styles="nav">
        <ul className={`nav-items ${isOpen && "open"}`}>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(projectRef)}>Projects</li>
        </ul>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Column>
    </Section>
  );
}

export default Header;
