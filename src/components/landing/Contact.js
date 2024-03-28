import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">¿Tienes alguna pregunta?</h1>
      <h1 className="primary-heading-green">Dejanos ayudarte</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="tuEmail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
