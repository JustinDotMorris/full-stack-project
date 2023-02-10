import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form";
// import {Route,Routes,useNavigate} from 'react-router-dom';

const CreatePlant = () => {
  const navigate = useNavigate();
  const handleSubmit = async (plant) => {
    const result = await fetch("http://localhost:8080/plant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });
    if (result.ok) {
      alert("Plant Added");
      navigate("/plant", { replace: true });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    createdBy: "",
    commonName: "",
    genus: "",
    species: "",
    leafColour: "",
    flowerColour: "",
    height: "",
    description: "",
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add a new plant"
      />
    </div>
  );
};

export default CreatePlant;
