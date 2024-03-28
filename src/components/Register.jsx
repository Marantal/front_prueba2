import { useState } from "react";
import { PasswordReg } from "./PasswordReg";
import { useForm } from "react-hook-form";
import { validarPass } from "../functions/validarPassword";

import { registrarUsuario } from "../api/registro.api";
import { useNavigate } from "react-router-dom";

export function Register({ setLogin }) {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [valido, setValido] = useState(true);

  const [correoValido, setCorreoValido] = useState(true);


  const password = watch("Contraseña", "");

  const onSubmit = handleSubmit(async (data) => {
    setCorreoValido(true);
    const temp = validarPass(data.Contraseña);
    setValido(temp);
   
    if (temp && data.ContraseñaRepetida === data.Contraseña) {
      data.Rol = data.Rol[0];
      try {
        await registrarUsuario(data);
        navigate("/contactos");
      } catch (err) {
        console.log(err);
        if (err.response.data.Correo) {
          setCorreoValido(false);
        }
      }
    }
  });

  return (
    <div className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Regístrate</h2>
      <form className="form">
        <div className="campoUser">
          <input
            placeholder="Nombre"
            className="entradaDatos"
            {...register("Nombre", { required: "El nombre es obligatorio", maxLength: { value: 45, message: "El nombre no puede tener más de 45 caracteres" } })}
          />
          {errors.Nombre && <p className="campoInvalido">{errors.Nombre.message}</p>}
        </div>
        <div className="campoUser">
          <input
            placeholder="Apellido"
            className="entradaDatos"
            {...register("Apellido", { required: "El apellido es obligatorio", maxLength: { value: 45, message: "El apellido no puede tener más de 45 caracteres" } })}
          />
          {errors.Apellido && <p className="campoInvalido">{errors.Apellido.message}</p>}
        </div>
        <div className="campoUser">
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="entradaDatos"
            {...register("Correo", { required: "El correo electrónico es obligatorio", maxLength: { value: 45, message: "El correo electrónico no puede tener más de 45 caracteres" }, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Correo electrónico inválido" } })}
          />
          {errors.Correo && <p className="campoInvalido">{errors.Correo.message}</p>}
          {!correoValido && <p className="campoInvalido">El correo ya está en uso</p>}
        </div>
        <PasswordReg
          pass={register("Contraseña", { required: "La contraseña es obligatoria", maxLength: { value: 45, message: "La contraseña no puede tener más de 45 caracteres" } })}
          confirmPass={register("ContraseñaRepetida", { required: "Debes repetir la contraseña", validate: (value) => value === password || "Las contraseñas no coinciden" })}
        />
        {errors.Contraseña && <p className="campoInvalido">{errors.Contraseña.message}</p>}
        {!valido && (
          <p className="campoInvalido">
            Contraseña inválida.
            <br />Debe tener mínimo:
            <br />1 número
            <br />1 minúscula
            <br />1 mayúscula
            <br />1 carácter especial
            <br />8 caracteres.
          </p>
        )}
      
        <div className="campoUser">
          <input
            placeholder="Ubicación"
            className="entradaDatos"
            {...register("Ubicacion", { required: "La ubicación es obligatoria", maxLength: { value: 45, message: "La ubicación no puede tener más de 45 caracteres" } })}
          />
          {errors.Ubicacion && <p className="campoInvalido">{errors.Ubicacion.message}</p>}
        </div>
        <div className="campoUser">
          <input
            placeholder="Teléfono"
            className="entradaDatos"
            {...register("Telefono", { required: "El teléfono es obligatorio", maxLength: { value: 45, message: "El teléfono no puede tener más de 45 caracteres" } })}
          />
          {errors.Telefono && <p className="campoInvalido">{errors.Telefono.message}</p>}
        </div>
        
        <button className="sendUserForm" type="submit">
          Registrarse
        </button>
      </form>
      <button className="changeUserForm" onClick={() => setLogin(true)}>
        ¿Ya tienes una cuenta? Inicia Sesión aquí.
      </button>
    </div>
  );
}