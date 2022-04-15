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
    fetch("http://localhost:4000/menuList")
      .then((data) => {
        if (!data.ok) {
          throw Error("Error: No se pudieron obtener datos para ese recurso");
        }
        return data.json();
      })
      .then((data) => {
        setMenuList(data);
        setIsLoading_1(false);
        setIsError_1(null);
      })
      .catch((err) => {
        setIsError_1(err.message);
        setIsLoading_1(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/productList")
      .then((data) => {
        if (!data.ok) {
          throw Error("Error: No se pudieron obtener datos para ese recurso");
        }
        return data.json();
      })
      .then((data) => {
        setProductLsit(data);
        setIsLoading_2(false);
        setIsError_2(null);
      })
      .catch((err) => {
        setIsError_2(err.message);
        setIsLoading_2(false);
      });
  }, []);

  return (
    <div className="menu">
      <h1 className="title-box">
        Nuestro <span>Menu</span>
      </h1>
      <div className="error-box box1">
        {isError_1 && <div className="error"> {isError_1}</div>}
        {isLoading_1 && <div className="loader">Cargando...</div>}
      </div>
      <div>{menuList && <MenuItemList menuList={menuList} />}</div>
      <h1>
        <span className="product-span">Nuestros</span> Cafes
      </h1>
      <div className="error-box">
        {isError_2 && <div className="error"> {isError_2}</div>}
        {isLoading_2 && <div className="loader">Cargando...</div>}
      </div>
      <div>{productList && <ProductItemList productList={productList} />}</div>
    </div>
  );
};

export default Menu;
