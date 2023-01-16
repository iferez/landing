import React, { useState, useEffect } from "react";
import Column from "../Column";
import { dataSkills } from "./dataSkills";
import {Technologies , Tech} from "./technologies";
import "./skills-style.css";

function Skills() {
  const [data, setData] = useState<Technologies>();
  useEffect(() => {
    setData(dataSkills);
  }, []);

  return (
    <>
      <h2 className="mt-5">SKILLS</h2>
      <Column widthMobile={12} widthDestok={4} styles="text-center">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3">BACK END</h3>
            <ul className="card-text">
              {data?.back.map((el: Tech) => (
                <li key={el.id} className="mb-3">{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Column>

      <Column widthMobile={12} widthDestok={4} styles="text-center">
        <div className="card shadow-sm">
          <div className="card-body bg-dark text-white">
            <h3 className="card-title mb-3">FRONT END</h3>
            <ul className="card-text">
              {data?.front.map((el: Tech) => (
                <li key={el.id} className="mb-3">{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Column>

      <Column widthMobile={12} widthDestok={4} styles="text-center">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3">DEVELOPER</h3>
            <ul className="card-text">
              {data?.developer.map((el: Tech) => (
                <li key={el.id} className="mb-3">{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Column>


    </>
  );
}

export default Skills;
