import Section from "../Section";
import Column from "../Column";
import "./header-style.css";
import { useState } from "react";

interface Ref {
  //RefObject<HTMLDivElement>
  skillsRef: any;
  proyectRef: any;
}

function Header({ skillsRef, proyectRef }: Ref) {
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section name="header" styles="w-100">
      <Column widthMobile={6} widthDestok={6} styles="">
        <img
          src="https://static.wixstatic.com/media/d61b43_0cd7fa3e42734f07ac9097028d1a7232~mv2.png/v1/fill/w_199,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20SILVER%20NET%20con%20fondo%20Redondo%20Grande%20(1).png"
          alt="Logo SILVER NET"
        />
      </Column>
      <Column widthMobile={6} widthDestok={6} styles="nav" >
        <ul className={`nav-items ${isOpen && "open"}`}>
          <li>Home</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(proyectRef)}>Proyects</li>
        </ul>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </Column>
    </Section>
  );
}

export default Header;
