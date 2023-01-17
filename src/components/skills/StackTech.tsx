import { useEffect, useState } from "react";
import { Technologies } from "./technologies";
import Card from "./Card";

interface Props {
  data: Array<Technologies>;
}

const initialSkills = {
  id: 0,
  name: "",
  dev: "",
};

function StackTech({ data }: Props) {
  const [back, setBack] = useState<Array<Technologies>>([initialSkills]);
  const [front, setFront] = useState<Array<Technologies>>([initialSkills]);
  const [developer, setDeveloper] = useState<Array<Technologies>>([
    initialSkills,
  ]);

  useEffect(() => {
    if (data) {
      setBack(data.filter((e) => e.dev === "BACK END"));
      setFront(data.filter((e) => e.dev === "FRONT END"));
      setDeveloper(data.filter((e) => e.dev === "DEVELOPER"));
    }
  }, [data]);

  return (
    <>
    <Card title="BACK END" stack={back} />
    <Card title="FRONT END" stack={front} styles="bg-dark text-white" />
    <Card title="DEVELOPER" stack={developer} />
    </>
  );
}

export default StackTech;
