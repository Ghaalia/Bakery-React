import image from "../Bakery.jpg";

const HomePage = () => {
  return (
    <div>
      <h1 className="headerFont">Ghaalia's Bakery</h1>
      <p className="descriptionFont">
        Delicious delights baked with love, making every moment a sweet
        celebration.
      </p>
      <img src={image} className="image" />
    </div>
  );
};

export { HomePage };
