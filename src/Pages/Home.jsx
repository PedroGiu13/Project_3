import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>CAFEINA</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, modi.
        </p>
        <Link to="/menu">Comprar Ahora</Link>
      </div>
    </div>
  );
};

export default Home;
