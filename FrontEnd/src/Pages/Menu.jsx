import React, { useState, useEffect } from "react";
import MenuItemList from "../components/MenuItemList";
import ProductItemList from "../components/ProductItemList";
import "../styles/menu.css";

const Menu = () => {
  const [menuList, setMenuList] = useState(null);
  const [productList, setProductLsit] = useState(null);
  const [isLoading_1, setIsLoading_1] = useState(true);
  const [isError_1, setIsError_1] = useState(null);
  const [isLoading_2, setIsLoading_2] = useState(true);
  const [isError_2, setIsError_2] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((data) => data.json())
      .then((data) => {
        setMenuList(data);
        setIsLoading_1(false);
        setIsError_1(null);
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError_1(true);
        setIsLoading_1(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/productList")
      .then((data) =>data.json())
      .then((data) => {
        setProductLsit(data);
        setIsLoading_2(false);
        setIsError_2(null);
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError_2(true);
        setIsLoading_2(false);
      });
  }, []);

  return (
    <div className="menu">
      <h1 className="title-box">
        Nuestro <span>Menu</span>
      </h1>
      <div className="error-box box1">
        {isError_1 && <div className="error"> Error: No se encuentra el recurso que esta buscando</div>}
        {isLoading_1 && <div className="loader">Cargando...</div>}
      </div>
      <div>{menuList && <MenuItemList menuList={menuList} />}</div>
      <h1>
        <span className="product-span">Nuestros</span> Cafes
      </h1>
      <div className="error-box">
        {isError_2 && <div className="error"> Error: No se encuentra el recurso que esta buscando </div>}
        {isLoading_2 && <div className="loader">Cargando...</div>}
      </div>
      <div>{productList && <ProductItemList productList={productList} />}</div>
    </div>
  );
};

export default Menu;
