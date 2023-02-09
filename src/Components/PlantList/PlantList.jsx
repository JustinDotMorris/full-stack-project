import Plant from "../Plant/Plant";
import { Link } from "react-router-dom";

const PlantList = ({ plants }) => {
  console.log(plants);
  return (
    <div>
      {plants.map((plant) => (
        <Link key={plant.id} to={`/plant/${plant.id}`}>
          <Plant plant={plant} />
        </Link>
      ))}
    </div>
  );
};

export default PlantList;
