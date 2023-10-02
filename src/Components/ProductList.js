import cupcake from "../CupCake.jpg";
import cheeseCake from "../CheeseCake.jpeg";
import ProductItem from "./ProductItem";

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

const ProductList = () => {
  const p = products.map((product) => {
    return <ProductItem product={product} key={product.name} />;
  });

  return <div className="container">{p}</div>;
};

export { ProductList };
