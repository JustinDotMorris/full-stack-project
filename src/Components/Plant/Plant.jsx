import "./Plant.scss";
const Plant = ({ plant }) => {
  const {
    commonName,
    genus,
    species,
    leafColour,
    flowerColour,
    height,
    description,
    createdBy,
  } = plant;
  return (
    <div className="plant">
      <h2>{commonName}</h2>
      <h4>
        {genus} {species}
      </h4>
      <p>Leaf Colour: {leafColour}</p>
      <p>Flower Colour: {flowerColour}</p>
      <p>Height: {height}</p>
      <p>Description: {description}</p>
      <p>Added By: {createdBy}</p>
    </div>
  );
};

export default Plant;
