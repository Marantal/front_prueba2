import React, { useState } from "react";
import "../styles/password.css";

export function Password({ pass }) {

  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="campoForm">
      <input
        type={visible ? "text" : "password"}
        placeholder="Contraseña"
        className="entradaPass"
        {...pass}
      />
      <button className="showPass" onClick={togglePasswordVisibility} type="button">
        <img src={visible ? require("../images/esconder.png") : require("../images/ver.png")} alt="Mostrar"/>
      </button>
    </div>
  );
}