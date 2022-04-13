import React, {useState } from "react";
import "../styles/contact.css";
import contactImage from "../assets/contact.jpg";
import NewContact from "../components/NewContact";

const Contact = () => {
  const [contactList, setContactList] = useState ([]);

  const saveContactInfo = (enteredContact) => {
    const contactName = enteredContact.name
    alert(`Gracias por contactarnos ${contactName}!`);

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
      });
 
  }

  return (
    <div className="contact-section">
      <div className="title">
        <h1>
          <span>Ponte en contacto</span> con nosotros
        </h1>
      </div>
      <div className="box-container">
        <div className="box-item item-1">
          <img src={contactImage} alt="coffee" />
        </div>
        <div className="box-item item-2">
          <NewContact onContactSubmit={saveContactInfo}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
