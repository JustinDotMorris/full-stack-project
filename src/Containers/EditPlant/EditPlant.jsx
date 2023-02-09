import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Plant from "../../Components/Plant/Plant";

const EditPlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState();
  const [showForm, setShowForm] = useState(false);

  const getPlantById = async (id) => {
    const url = `http://localhost:8080/plant/${id}`;
    const response = await fetch(url);
    const plantData = await response.json();
    console.log(plantData);
    setPlant(plantData);
  };

  useEffect(() => {
    getPlantById(id);
  }, [id]);

  const handleUpdatePlant = async (updatedPlant) => {
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    });
  };

  const handleDeletePlant = async () => {
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <div>
      {plant && <Plant plant={plant} />}
      <div>
        <button
          className={
            showForm
              ? "edit-greeting__button"
              : "edit-greeting__button edit-greeting__button--secondary"
          }
          onClick={handleShowForm}
        >
          Edit
        </button>
        <button onClick={handleDeletePlant}>Delete</button>
      </div>
      <div>
        {showForm && (
          <Form
            defaultFormState={Plant}
            formTitle="Update Plant Info"
            handleSubmit={handleUpdatePlant}
          />
        )}
      </div>
    </div>
  );
};

export default EditPlant;