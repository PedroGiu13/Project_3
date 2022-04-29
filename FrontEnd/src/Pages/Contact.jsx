import React, { useState } from "react";
import "../styles/contact.css";
import contactImage from "../assets/contact.jpg";
import NewContact from "../components/NewContact";

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const saveContactInfo = (enteredContact) => {
    const contactName = enteredContact.name;
    setMessage(
      `Gracias por contactarnos ${contactName}. Te responderemos a la brevedad!`
    );

    fetch("http://localhost:4000/contactList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredContact),
    })
      .then((data) => data.json())
      .then((data) => {
        setContactList(contactList.concat(data));
      })
      .catch((e) => {
        console.log("Hubo un error");
        setIsError(true);
      });
    setTimeout(() => {
      setMessage("");
    }, 7000);
  };

  return (
    <div className="contact-section">
      <div className="title">
        <h1>
          <span>Ponte en contacto</span> con nosotros
        </h1>
      </div>
      <div className="contact-message">
        {isError && <div> Ha ocurrido un error </div>}
        {message}
      </div>
      <div className="box-container">
        <div className="box-item item-1">
          <img src={contactImage} alt="coffee" />
        </div>
        <div className="box-item item-2">
          <NewContact onContactSubmit={saveContactInfo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
