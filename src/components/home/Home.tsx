import React, { useState, useEffect } from "react";
import iferez from "../../assets/img/perfiliferezz.png";
import pdf from "../../assets/ferezivan.pdf";
import Person from "../interfaces/person";
import Column from "../Column";
import PersonInfo from "./PersonInfo";
import "./home-style.css";

const dataPerson = {
  name: "Iván Ferez",
  position: "Front end developer",
  description:
    "I design interfaces that allow the user to interact with digital products in a simple way",
  networks: ["link1", "link2", "link3"],
  image: iferez,
};

function Home() {
  const [data, setData] = useState<Person>();
  useEffect(() => {
    setData(dataPerson);
  }, []);

  return (
    <>
      <Column widthMobile={12} widthDestok={6}>
        <PersonInfo data={data} />
      </Column>

      <div className="col-md-6 text-center">
        <img src={iferez} className="img-fluid" alt="Ivan Ferez" />
      </div>
      <div className="buttons-style">
        <a href="#" className="btn rounded-pill">
          <i className="bi bi-github pe-2"></i>Github
        </a>
        <a href="#" className="btn rounded-pill">
          <i className="bi bi-linkedin pe-2"></i>LinkedIn
        </a>
        <a
          href={pdf}
          className="btn rounded-pill"
          target="_blank"
          rel="noopener noreferrer"
          download="cv_ivanferez.pdf"
        >
          <i className="bi bi-person-circle pe-2"></i>Download CV
        </a>
      </div>
    </>
  );
}

export default Home;
