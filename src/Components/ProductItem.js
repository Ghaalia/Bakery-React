const ProductItem = ({ product }) => {
  const { name, price, photo } = product;
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={photo} className="imageSize" />
      <h2>Price: {price} K.D.</h2>
    </div>
  );
};

export default ProductItem;
