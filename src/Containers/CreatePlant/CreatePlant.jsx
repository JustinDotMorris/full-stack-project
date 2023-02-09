import Form from "../../Components/Form/Form";

const CreatePlant = () => {
  const handleSubmit = async (plant) => {
    const result = await fetch("http://localhost:8080/plant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });
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
      <h2>Add a plant</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add a new plant"
      />
    </div>
  );
};

export default CreatePlant;
