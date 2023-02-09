import { useState } from "react";

const Form = ({ handleSubmit, formTitle }, defaultFormState) => {
  //form state taken from the edit plant
  const [plant, setPlant] = useState(defaultFormState);

  //form validation
  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(plant).some((value) => !value)) {
      alert("Empty field, please fill all required fields.");
      return;
    }

    handleSubmit(plant);
  };

  return (
    <div>
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="Created by..."
          value={plant.createdBy}
          onInput={(event) =>
            setPlant({ ...plant, createdBy: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="common name..."
          value={plant.commonName}
          onInput={(event) =>
            setPlant({ ...plant, commonName: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="genus..."
          value={plant.genus}
          onInput={(event) => setPlant({ ...plant, genus: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="species..."
          value={plant.species}
          onInput={(event) =>
            setPlant({ ...plant, species: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="leafColour"
          value={plant.leafColour}
          onInput={(event) =>
            setPlant({ ...plant, leafColour: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="flower colour..."
          value={plant.flowerColour}
          onInput={(event) =>
            setPlant({ ...plant, flowerColour: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="height"
          value={plant.height}
          onInput={(event) =>
            setPlant({ ...plant, height: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="description"
          value={plant.description}
          onInput={(event) =>
            setPlant({ ...plant, description: event.target.value })
          }
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
