import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { Password } from "./Password";
import { ValidarCodigo } from "./Confirmacion";

export const Login = ({ setLogin, setUser }) => {
  const { register, handleSubmit } = useForm();
  const [captchaValue, setCaptchaValue] = useState(null);
  const [codConf, setCodConf] = useState(false);
  const [correoValido, setCorreoValido] = useState(true);
  const [passValido, setPassValido] = useState(true);
  const [cambioPass, setCambioPass] = useState(false);
  const [correo, setCorreo] = useState({ correo: '', user: { Alias: '', Id: '', Tipo: '' }, set: () => {} });


  const manejarCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const onSubmit = handleSubmit(async (data) => {
    if (captchaValue) {
      setPassValido(true);
      setCorreoValido(true);
      try {
        const res = await fetch('http://localhost:9091/auth/authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: data.Correo,
            password: data.Contraseña,
          }),
        });
        const responseData = await res.json();
        setCorreo({ correo: data.Correo, user: { Alias: responseData.Alias, Id: responseData.IDUsuario, Tipo: responseData.Tipo }, set: setUser });
        const temp = true;
        setCodConf(temp);
      } catch (error) {
        console.log(error);
        if (error.response.data.mensaje === "CI") {
          setPassValido(false);
        }
        if (error.response.data.mensaje === "UNE") {
          setCorreoValido(false);
        }
        if (error.response.data.mensaje === "CR") {
          setCambioPass(false);
        }
      }
    }
  });

  return (
    <>
      <div
        style={codConf ? { filter: "blur(5px)" } : {}}
        className="form-container"
      >
        <h1>Bienvenido</h1>
        <h2>Inicia Sesión</h2>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="email" className="labelUserForm">
            Correo Electronico
          </label>
          <div className="campoUser">
            <input
              type="email"
              placeholder="ejemplo@dominio"
              className="entradaDatos"
              {...register("Correo", { required: true, maxLength: 45 })}
            />
          </div>
          {!correoValido && (
            <p className="campoInvalido">
              El correo no pertenece a ninguna cuenta
            </p>
          )}
          <label htmlFor="password" className="labelUserForm">
            Contraseña
          </label>
          <div className="campoUser">
            <Password
              pass={register("Contraseña", { required: true, maxLength: 45, minLength: 8, })}
            />
          </div>
          {!passValido && (
            <p className="campoInvalido">Contraseña Incorrecta</p>
          )}
          <div className="campoUser">
            <ReCAPTCHA
              className="captcha"
              sitekey="6Ld_u5cpAAAAAEGsXF9vf25kl49qBRpQua14mNT4"
              onChange={manejarCaptcha}
            />
          </div>
          <button className="sendUserForm" type="submit">
            Iniciar Sesion
          </button>
          {cambioPass && (
            <p className="passInvalido">
              Se envio la nueva contraseña a su correo
            </p>
          )}
        </form>
        <button className="changeUserForm" onClick={() => setLogin(false)}>
          ¿No tienes una cuenta? Registrate aquí.
        </button>
      </div>
      {codConf && <ValidarCodigo salir={setCodConf} user={correo} />}
    </>
  );
};
