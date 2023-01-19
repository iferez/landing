import { useEffect, useState } from "react";
import { Project } from "./project";
import { dataProjects } from "./dataProjects";
import Carousel from "./Carousel";
import "./proyects-style.css";

const initalProject = {
  id: 0,
  name: "",
  description: "",
  link: "",
  image: "",
};

function Projects() {
  const [data, setData] = useState<Array<Project>>([initalProject]);
  useEffect(() => {
    setData(dataProjects);
  }, []);

  return (
    <>
      <h2>PROJECTS</h2>
      <p>
        During my journey I was able to work on many projects, thinking in an
        accessible and user-centered flow.
      </p>
      <Carousel data={data} />
    </>
  );
}

export default Projects;
