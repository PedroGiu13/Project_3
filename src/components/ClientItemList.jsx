import React from "react";
import ClientItem from "./ClientItem";
import "../styles/review.css";

const ClientItemList = (props) => {
  return (
    <div className="review-box-container">
      {props.clientList.map((item) => (
        <ClientItem
          key={item.id}
          img={item.image}
          name={item.name}
          rating={item.rating}
          comment={item.comment}
        />
      ))}
    </div>
  );
};

export default ClientItemList;
