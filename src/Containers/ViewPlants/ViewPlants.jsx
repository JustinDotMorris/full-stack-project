import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantList from "../../Components/PlantList/PlantList";
import "./ViewPlants.scss";

const ViewPlants = () => {
  const [plants, setPlants] = useState([]);

  const getPlants = async () => {
    const response = await fetch("http://localhost:8080/plant");
    const data = await response.json();
    setPlants(data);
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div className="view-plants">
      <h1>All Plants</h1>
      <Link className="nav__item" to="/plant/create">
        <button>Add a Plant</button>
      </Link>
      <div className="view-plants--all-container">
        <PlantList plants={plants} />
      </div>
    </div>
  );
};

export default ViewPlants;
