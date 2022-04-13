import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">INICIO</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/about">ACERCA DE</Link>
        <Link to="/review">OPINIONES</Link>
        <Link to="/contact">CONTACTO</Link>
      </div>
      <div className="nav-icon">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
