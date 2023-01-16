import React, { useState, useEffect } from "react";
import pdf from "../../assets/ferezivan.pdf";
import Column from "../Column";
import { Person } from "./person";
import { dataPerson } from "./dataPerson";
import "./home-style.css";

const Home: React.FC = () => {
  const [data, setData] = useState<Person>();
  useEffect(() => {
    setData(dataPerson);
  }, []);

  return (
    <>
      <Column widthMobile={12} widthDestok={6} styles="text-start">
        <h1>{data?.name.toUpperCase()}</h1>
        <h2>{data?.position.toUpperCase()}</h2>
        <p>{data?.description}</p>
      </Column>

      <Column widthMobile={12} widthDestok={6} styles="text-center">
        <img src={data?.image} className="img-fluid" alt={data?.name} />
      </Column>

      <Column widthMobile={12} widthDestok={12} styles="buttons-style">
        <a href={data?.networks[0].link} target="_blank" className="btn rounded-pill">
          <i className="bi bi-github pe-2"></i>
          {data?.networks[0].name}
        </a>
        <a href={data?.networks[1].link} target="_blank" className="btn rounded-pill">
          <i className="bi bi-linkedin pe-2"></i>
          {data?.networks[1].name}
        </a>
        <a
          href={pdf}
          className="btn rounded-pill"
          target="_blank"
          rel="noopener noreferrer"
          download={data?.networks[2].link}
        >
          <i className="bi bi-download pe-2"></i>
          {data?.networks[2].name} CV
        </a>
      </Column>
    </>
  );
};

export default Home;
