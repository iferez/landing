import React from "react";
import "./skills-style.css";

function Skills() {
  return (
    <>
      <div className="col-12">
        <h3>SKILLS</h3>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">BACKEND</h5>
            <ul className="card-text">
              <li>1 lorem</li>
              <li>2 lorem</li>
              <li>3 lorem</li>
              <li>4 lorem</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">FRONTEND</h5>
            <ul className="card-text">
              <li>1 lorem</li>
              <li>2 lorem</li>
              <li>3 lorem</li>
              <li>4 lorem</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">DEVELOPER</h5>
            <ul className="card-text">
              <li>1 lorem</li>
              <li>2 lorem</li>
              <li>3 lorem</li>
              <li>4 lorem</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
