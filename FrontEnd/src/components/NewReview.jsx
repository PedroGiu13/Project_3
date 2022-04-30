import React, { useState } from "react";
import "../styles/review.css";

const NewReview = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredRating, setEnteredRating] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setEnteredLastName(e.target.value);
  };

  const ratingChangeHandler = (e) => {
    setEnteredRating(e.target.value);
  };

  const commentChangeHandler = (e) => {
    setEnteredComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newEnteredReview = {
      name: enteredName,
      lastName: enteredLastName,
      rating: enteredRating,
      comment: enteredComment,
    };

    props.onReviewSubmit(newEnteredReview);

    setEnteredName("");
    setEnteredLastName("");
    setEnteredRating("");
    setEnteredComment("");
  };

  return (
    <div className="new-review">
      <h1>
        <span>Deja tu </span>comentario
      </h1>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          className="input-container"
          type="text"
          placeholder="Nombre"
          required="required"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <input
          className="input-container"
          type="text"
          placeholder="Apellido"
          required="required"
          value={enteredLastName}
          onChange={lastNameHandler}
        />
        <select
          className="input-container"
          required="required"
          value={enteredRating}
          onChange={ratingChangeHandler}
        >
          <option value="" disabled>
            Como nos calificas...
          </option>
          <option>Excelente</option>
          <option>Muy Bueno</option>
          <option>Bueno</option>
          <option>Malo</option>
          <option>Muy Malo</option>
        </select>
        <textarea
          className="input-container comment"
          placeholder="Deja tu comentario..."
          value={enteredComment}
          onChange={commentChangeHandler}
        ></textarea>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default NewReview;
