import { useState } from "react";
import "./Form.scss";

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
    <div className="form-container">
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
          placeholder="Common name..."
          value={plant.commonName}
          onInput={(event) =>
            setPlant({ ...plant, commonName: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Genus..."
          value={plant.genus}
          onInput={(event) => setPlant({ ...plant, genus: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Species..."
          value={plant.species}
          onInput={(event) =>
            setPlant({ ...plant, species: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Leaf Colour..."
          value={plant.leafColour}
          onInput={(event) =>
            setPlant({ ...plant, leafColour: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Flower colour..."
          value={plant.flowerColour}
          onInput={(event) =>
            setPlant({ ...plant, flowerColour: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Height..."
          value={plant.height}
          onInput={(event) =>
            setPlant({ ...plant, height: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Description..."
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
