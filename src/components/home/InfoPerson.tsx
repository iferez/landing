import React from "react";
import Column from "../Column";
import pdf from "../../assets/ferezivan.pdf";

interface Props {
  data: {
    name: string;
    position: string;
    description: string;
    networks: Array<{
      name: string;
      link: string;
    }>;
    image: string;
  };
}

function InfoPerson({ data }: Props) {
  return (
    <>
      <Column widthMobile={12} widthDestok={6} styles="text-start">
        <h1>{data.name.toUpperCase()}</h1>
        <h2>{data.position.toUpperCase()}</h2>
        <p>{data.description}</p>
      </Column>

      <Column widthMobile={12} widthDestok={6} styles="text-center">
        <img src={data.image} className="img-fluid" alt={data.name} />
      </Column>

      <Column widthMobile={12} widthDestok={12} styles="buttons-style">
        {data.networks.map((el) => (
          <a
            key={el.name}
            href={`${el.name == "Download" ? pdf : el.link}`}
            className="btn rounded-pill"
            target="_blank"
            rel="noopener noreferrer"
            download={`${el.name == "Download" ? el.link : ""}`}
          >
            <i className={`bi bi-${el.name.toLocaleLowerCase()} pe-2`}></i>
            {el.name}{" "}
            <span
              className={`${
                el.name == "Download" ? "d-inline-block" : "d-none"
              }`}
            >
              CV
            </span>
          </a>
        ))}
      </Column>
    </>
  );
}

export default InfoPerson;
