import React from "react";
import "../styles/review.css";
import quote from "../assets/quote-img.png";

const ClientItem = (props) => {
  return (
    <div className="review-box-container">
      <div className="review-box-content">
        <img src={quote} alt="quote" />
        <h2>
          {props.name} {props.lastName}
        </h2>
        <h3>{props.rating}</h3>
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default ClientItem;
