import { useState, useEffect } from "react";
import { dataSkills } from "./dataSkills";
import { Technologies } from "./technologies";
import StackTech from "./StackTech";
import "./skills-style.css";

const initialSkills = {
  id: 0,
  name: "",
  dev: "",
};

function Skills() {
  const [data, setData] = useState<Array<Technologies>>([initialSkills]);
  useEffect(() => {
    setData(dataSkills);
  }, []);

  return (
    <>
      <h2 className="mt-5">SKILLS</h2>
      <p>
        I trained for more than 2 years as a web developer, I acquired many
        skills thanks to my work and the university
      </p>
      <StackTech data={data} />
    </>
  );
}

export default Skills;
