import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Plant from "../../Components/Plant/Plant";
import "./EditPlant.scss";

const EditPlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState();
  const [showForm, setShowForm] = useState(false);

  const getPlantById = async (id) => {
    const url = `http://localhost:8080/plant/${id}`;
    const response = await fetch(url);
    const plantData = await response.json();
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

    if (result.ok) {
      alert("Plant updated");
      setPlant(updatedPlant);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeletePlant = async () => {
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Plant Deleted");
      navigate("/plant", { replace: true });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <div className="edit-plant">
      <div className="edit-plant__plant-container">
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
    </div>
  );
};

export default EditPlant;
