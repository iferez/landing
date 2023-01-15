import React from "react";
import Person from "../interfaces/person";

interface PersonInfoProps {
  data: React.SetStateAction<Person | undefined>;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ data }) => {
  return (
    <>
      <h1>{data?.name.toUpperCase()} </h1>
      <h2> {data?.position.toUpperCase()} </h2>
      <p> {data?.description} </p>
    </>
  );
};
export default PersonInfo;
