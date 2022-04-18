import React, { useState, useEffect } from "react";
import MenuItemList from "../components/MenuItemList";
import ProductItemList from "../components/ProductItemList";
import "../styles/menu.css";

const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isLoading_1, setIsLoading_1] = useState(true);
  const [isError_1, setIsError_1] = useState(false);
  const [isLoading_2, setIsLoading_2] = useState(true);
  const [isError_2, setIsError_2] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/menuList")
      .then((data) => data.json())
      .then((data) => {
        setIsLoading_1(false);
        setMenuList(data);
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError_1(true);
        setIsLoading_1(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/productList")
      .then((data) => data.json())
      .then((data) => {
        setProductList(data);
        setIsLoading_2(false);
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

      <MenuItemList menuList={menuList} />

      <h1>
        <span className="product-span">Nuestros</span> Cafes
      </h1>

      <div className="error-box">
        {isError_2 && <div className="error"> Error: No se encuentra el recurso que esta buscando </div>}
        {isLoading_2 && <div className="loader">Cargando...</div>}  
      </div>

      <ProductItemList productList={productList} />
    </div>
  );
};

export default Menu;

