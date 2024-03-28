import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/estilosOrgReg.css'; // Asegúrate de importar los estilos necesarios
import registrationImage from '../images/donan.png'; // Asegúrate de importar la imagen necesaria
import { validarPass } from "../functions/validarPassword";

const RegisterDon = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [correoValido, setCorreoValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);

  const password = watch("password", "");
  const belongsToOrganization = watch("belongsToOrganization", false);

  const onSubmit = async (data) => {
    setCorreoValido(true);
    const temp = validarPass(data.password);
    setPasswordValido(temp);

    if (!temp) {
      return; // Si la contraseña no es válida, detener la ejecución aquí.
    }

    if (data.password !== data.confirmPassword) {
      // Manejar la no coincidencia de contraseñas aquí, si es necesario.
      return;
    }

    try {
      await axios.post('/api/register', data);
      navigate("/success"); // Cambiar a la ruta deseada después del registro exitoso
    } catch (error) {
      console.log(error);
      if (error.response?.data?.email) {
        setCorreoValido(false);
      }
      // Manejar otros errores
    }
  };

  return (
    <div className="registration-containerRegOrg">
      <div className="form-containerRegOrg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Regístrate como donante:</h2>
          <div className="campoUser">
            <input className="entradaDatos1" type="text"{...register("fullName", { required: "El nombre completo es obligatorio" })} placeholder="Nombre completo" />
            {errors.fullName && <p className="campoInvalido">{errors.fullName.message}</p>}
          </div>
          <div className="campoUser">
            <input className="entradaDatos1" type="email" {...register("email", { required: "El correo electrónico es obligatorio", pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder="Correo electrónico" />
            {errors.email && <p className="campoInvalido">{errors.email.message}</p>}
            {!correoValido && <p className="campoInvalido">El correo ya está en uso</p>}
          </div>
          <div className="campoUser">
            <input className="entradaDatos1" type="password" {...register("password", { required: "La contraseña es obligatoria" })} placeholder="Contraseña" />
            {errors.password && <p className="campoInvalido">{errors.password.message}</p>}
            {!passwordValido && (
              <p className="campoInvalido">
                Contraseña inválida. Debe contener al menos 1 número, 1 mayúscula, 1 minúscula, 1 carácter especial y tener 8 caracteres.
              </p>
            )}
          </div>
          <div className="campoUser">
            <input className="entradaDatos1" type="password" {...register("confirmPassword", { required: "Debes confirmar la contraseña" })} placeholder="Confirmar Contraseña" />
            {errors.confirmPassword && <p className="campoInvalido">{errors.confirmPassword.message}</p>}
          </div>
          <div className="campoUser">
            <label className="labelRegistro">Fecha de Nacimiento:</label>
            <input className="entradaDatos1" type="date" {...register("dateOfBirth", { required: "La fecha de nacimiento es obligatoria" })} />
            {errors.dateOfBirth && <p className="campoInvalido">{errors.dateOfBirth.message}</p>}
          </div>
          <label>
            <input type="checkbox" class="custom-checkbox" {...register("belongsToOrganization")} />
            ¿Pertenece a una organización benéfica?
          </label>
          <div className="campoUser">
              <input className="entradaDatos1" type="text"{...register("organizationName", { required: "El nombre de la organización es obligatorio" })} placeholder="Nombre de organización" />
              {errors.organizationName && <p className="campoInvalido">{errors.organizationName.message}</p>}
              </div>
              <div className="campoUser">
              <input className="entradaDatos1" type="text"{...register("address", { required: "La dirección es obligatoria" })} placeholder="Dirección" />
              {errors.address && <p className="campoInvalido">{errors.address.message}</p>}
              </div>
          {belongsToOrganization && (
            <>
          
            </>
          )}
          <div className="campoUser">
            <label className='boton' >
              <input type="checkbox" className="custom-checkbox" {...register("termsAccepted", { required: "Debe aceptar los términos y condiciones" })} />
              Aceptar términos y condiciones del servicio
            </label>
            {errors.termsAccepted && <p className="campoInvalido">Debe aceptar los términos y condiciones</p>}
          </div>
          <div className="button-container">
            <button type="button" onClick={handleSubmit} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="register-button">Registrarme</button>
          </div>
        </form>
      </div>
      <div className="image-container">
        <img src={registrationImage} alt="Registration" className="registration-image" />
      </div>
    </div>
  );
};

export default RegisterDon;
