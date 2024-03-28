import React, { useState } from "react";
import "../styles/password1.css";

export function PasswordReg({ pass, confirmPass }) {
  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    confirmPassword: false
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const handlePasswordChange = (e) => {
    pass.onChange(e);
    checkPasswordMatch(e.target.value, confirmPass.value);
  };

  const handleConfirmPasswordChange = (e) => {
    confirmPass.onChange(e);
    checkPasswordMatch(pass.value, e.target.value);
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword);
  };

  return (
    <div className="campoForm1">
      <div className="password-input-container1">
        <input
          type={passwordVisible.password ? "text" : "password"}
          placeholder="Contraseña"
          className="entradaPass"
          {...pass}
          onChange={handlePasswordChange}
        />
        <button
          className="showPass"
          onClick={() => togglePasswordVisibility("password")}
          type="button"
        >
          <img
            src={passwordVisible.password ? require("../images/esconder.png") : require("../images/ver.png")}
            alt="Mostrar"
          />
        </button>
      </div>
      <div>
      <div className="password-input-container1">
        <input
          type={passwordVisible.confirmPassword ? "text" : "password"}
          placeholder="Confirmar contraseña"
          className="entradaPass"
          {...confirmPass}
          onChange={handleConfirmPasswordChange}
        />
        <button
          className="showPass"
          onClick={() => togglePasswordVisibility("confirmPassword")}
          type="button"
        >
          <img
            src={passwordVisible.confirmPassword ? require("../images/esconder.png") : require("../images/ver.png")}
            alt="Mostrar"
          />
        </button>
      </div>
      {!passwordMatch && (
        <p className="password-mismatch">Las contraseñas no coinciden</p>
      )}
      </div>

    </div>
  );
}
