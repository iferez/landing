import React from "react";
import "./header-style.css";

function Header() {
  return (
    <section className="header">
      <nav className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://static.wixstatic.com/media/d61b43_0cd7fa3e42734f07ac9097028d1a7232~mv2.png/v1/fill/w_199,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20SILVER%20NET%20con%20fondo%20Redondo%20Grande%20(1).png"
              alt="Logo SILVER NET"
            />
          </div>
          <div className="col-6">
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Proyects</li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
