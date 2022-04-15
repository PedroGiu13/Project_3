import React from "react";
import "../styles/cart.css";

const Cart = () => {
  return (
    <div className="body-loader">
      <div className="txt">
        <h1>
          <span>&#9888;</span> Pagina en Construccion
          <span>
            <span>&#9888;</span>
          </span>
        </h1>
        <p>Por el momento no se pueden realizar compras</p>
      </div>
      <div className="loader-box">
        <div className="load-animation"></div>
      </div>
    </div>
  );
};

export default Cart;
