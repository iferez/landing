import React, { useState, useEffect } from "react";
import { Person } from "./person";
import { dataPerson } from "./dataPerson";
import InfoPerson from "./InfoPerson";
import "./home-style.css";

const initialPerson = {
  name: "",
  position: "",
  description: "",
  networks: [{ name: "", link: "",}],
  image: "",
}

function Home() {
  const [data, setData] = useState<Person>(initialPerson);
  useEffect(() => {
    setData(dataPerson);
  }, []);

  return (
    <>
      <InfoPerson data={data!} />
    </>
  );
};

export default Home;
