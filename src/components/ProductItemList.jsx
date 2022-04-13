import React from "react";
import ProductItem from "./ProductItem";

const ProductItemList = (props) => {
  return (
    <div className="item-list product-list">
      {props.productList.map((item) => (
        <ProductItem
          key={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          btn={item.btn}
        />
      ))}
    </div>
  );
};

export default ProductItemList;
