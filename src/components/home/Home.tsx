import React from "react";
import iferez from "../../assets/img/perfiliferezz.png";
import pdf from "../../assets/ferezivan.pdf";
import "./home-style.css";

function Home() {
  return (
    <section className="home">
      <article className="container">
        <div className="row home-full-screen">
          <div className="col-md-6">
            <h1>IVÁN FEREZ</h1>
            <h2>FRONT END DEVELOPER</h2>
            <p>
              I design interfaces that allow the user to interact with digital
              products in a simple way.
            </p>
          </div>
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
        </div>
      </article>
    </section>
  );
}

export default Home;
