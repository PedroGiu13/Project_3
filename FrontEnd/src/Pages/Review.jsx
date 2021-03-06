import React, { useState, useEffect } from "react";
import "../styles/review.css";
import ClientItemList from "../components/ClientItemList";
import NewReview from "../components/NewReview";

const Review = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const saveNewReview = (enteredReview) => {
    const newReviewObj = {
      ...enteredReview,
    };

    fetch("http://localhost:4000/review", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewObj),
    })
      .then((data) => data.json())
      .then((data) => {
        setClients(clients.concat(data));
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch("http://localhost:4000/review")
      .then((data) => data.json())
      .then((data) => {
        setClients(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="review-section">
      <h1>
        Lo que dicen <span>nuestros clientes</span>
      </h1>

      <div>
        {isError && <div className="error"> Ha ocurrido un error </div>}
        {isLoading && <div className="loader">Cargando...</div>}
        <ClientItemList clientList={clients} />
      </div>

      <div>
        <NewReview onReviewSubmit={saveNewReview} />
      </div>
    </div>
  );
};

export default Review;
