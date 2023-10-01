import "./App.css";
import image from "./Bakery.jpg";
import cupcake from "./CupCake.jpg";
import cheeseCake from "./CheeseCake.jpeg";

function App() {
  const products = [
    {
      name: "CupCake",
      photo: cupcake,
      price: 1.75,
    },
    {
      name: "CheeseCake",
      photo: cheeseCake,
      price: 2.25,
    },
  ];

  const productList = products.map((product) => {
    return (
      <div className="card">
        <h2>{product.name}</h2>
        <img src={product.photo} className="imageSize" />
        <h2>Price: {product.price} K.D.</h2>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Ghaalia's Bakery</h1>
      <p>
        Delicious delights baked with love, making every moment a sweet
        celebration
      </p>
      <img src={image} className="image" />

      <div className="container">{productList}</div>
    </div>
  );
}

export default App;
