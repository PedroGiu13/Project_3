import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faTwitter } from "@fortawesome/fontawesome-free-brands";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/specialtycoffeeassociation/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.facebook.com/SpecialtyCoffeeAssociation/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com/SpecialtyCoffee?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <p>
        Elaborado por: <span className="name-span">Pedro Giussani</span>
      </p>
    </div>
  );
};

export default Footer;
