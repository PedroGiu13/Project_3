import React from "react";

const ProductItem = (props) => {
  const alertMessage = () => {
    alert("Por el momento no se pueden hacer compras");
  };

  return (
    <div className="menu-item">
      <div className="menu-item__content product-item__content">
        <img src={props.img} alt="product-img" />
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
        <button onClick={alertMessage}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductItem;
