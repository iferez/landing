import { useEffect, useState } from "react";
import { Proyect } from "./proyect";
import { dataProyects } from "./dataProyects";
import Carousel from "./Carousel";
import "./proyects-style.css";

const initalProyect = {
  id: 0,
  name: "",
  description: "",
  link: "",
  image: "",
};

function Proyects() {
  const [data, setData] = useState<Array<Proyect>>([initalProyect]);
  useEffect(() => {
    setData(dataProyects);
  }, []);

  return (
    <>
      <h2>PROYECTS</h2>
      <p>
        During my journey I was able to work on many projects, thinking in an
        accessible and user-centered flow.
      </p>
      <Carousel data={data} />
    </>
  );
}

export default Proyects;
