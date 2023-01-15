import React from "react";
import "./home-style.css";
import iferez from "../../assets/img/perfiliferezz.png";

function Home() {
  return (
    <section className="home">
      <article className="container">
        <div className="row full-screen">
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
            <button className="btn rounded-pill">
              <i className="bi bi-github pe-2"></i>Github
            </button>
            <button className="btn rounded-pill">
              <i className="bi bi-linkedin pe-2"></i>LinkedIn
            </button>
            <button className="btn rounded-pill">
            <i className="bi bi-person-circle pe-2"></i>Download CV
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Home;
