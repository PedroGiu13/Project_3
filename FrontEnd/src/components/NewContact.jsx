import React, {useState} from "react";
import "../styles/contact.css";

const NewContact = (props) => {
    const [contactName, setContactName] = useState("");
    const [contactLastName, setContactLastName] = useState('')
    const [contactMail, setContactMail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    const nameHandler = (e) => {
        setContactName(e.target.value)
    }

    const lastNameHandler =(e) => {
        setContactLastName(e.target.value)
    }

    const mailHandler = (e) => {
        setContactMail(e.target.value)
    }

    const phoneHandler = (e) => {
        setContactPhone(e.target.value)
    }

    const messageHadler = (e) => {
        setContactMessage(e.target.value)
    }


  const contactSubmitHandler = (e) => {
    e.preventDefault();

    const contactInfo = {
        name: contactName,
        lastName: contactLastName,
        mail: contactMail,
        phone: contactPhone,
        message: contactMessage
    };

    props.onContactSubmit(contactInfo);

    setContactName("");
    setContactMail("");
    setContactPhone("");
    setContactMessage("");
  };

  return (
    <div>
      <form className="contact-container" onSubmit={contactSubmitHandler}>
        <input
          className="input-box"
          type="text"
          placeholder="Nombre"
          required="required"
          value={contactName}
          onChange={nameHandler}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Apellido"
          required="required"
          value={contactLastName}
          onChange={lastNameHandler}
        />
        <input
          className="input-box"
          type="email"
          placeholder="Email"
          required="required"
          value={contactMail}
          onChange={mailHandler}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Telefono"
          required="required"
          value={contactPhone}
          onChange={phoneHandler}
        />
        <textarea
          className="input-box message "
          placeholder="Deja tu mensaje..."
          required="required"
          value={contactMessage}
          onChange={messageHadler}
        ></textarea>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
