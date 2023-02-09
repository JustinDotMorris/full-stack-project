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
    <div>
      <h3>{commonName}</h3>
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
