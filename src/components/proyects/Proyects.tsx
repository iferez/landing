import React from "react";
import "./proyects-style.css";

function Proyects() {
  return (
    <section className="skills">
      <article className="container">
        <div className="row full-screen text-center">
          <h3>PROYECTS</h3>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name proyect</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name proyect</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name proyect</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Proyects;
