import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantList from "../../Components/PlantList/PlantList";

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
    <div>
      <h3>All Plants</h3>
      <Link className="nav__item" to="/plant/create">
        <button>Add a Plant</button>
      </Link>

      <PlantList plants={plants} />
    </div>
  );
};

export default ViewPlants;
