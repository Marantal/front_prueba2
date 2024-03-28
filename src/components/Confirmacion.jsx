import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerCodigo } from "../api/registro.api";
import "../styles/confirmacion.css";

export function ValidarCodigo({ salir, user }) {
  const cambiar = useNavigate();
  const [valido, setValido] = useState(false);
  const [menValido, setMenValido] = useState("");
  const numeros = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [confirmacion, setConfirmacion] = useState(0);

  useEffect(() => {
    async function mandarCodigo() {
      const res = await obtenerCodigo({ Correo: user.correo });
      setConfirmacion(res.data.codigo);
    }
    mandarCodigo();
  }, [user.correo]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      confirmar();
    }
    else if (
      index === 5 &&
      numeros[index].current.value.length === 1 &&
      e.key !== "Backspace"
    ) {
      e.preventDefault();
    }
    else if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      numeros[index - 1].current.focus();
    }
    else if (e.target.value.length === 1 && index < 5) {
      numeros[index + 1].current.focus();
    }
  };

  const confirmar = () => {
    if (
      numeros[0].current.value !== "" &&
      numeros[1].current.value !== "" &&
      numeros[2].current.value !== "" &&
      numeros[3].current.value !== "" &&
      numeros[4].current.value !== "" &&
      numeros[5].current.value !== ""
    ) {
      let codigo = parseInt(
        numeros[0].current.value +
          numeros[1].current.value +
          numeros[2].current.value +
          numeros[3].current.value +
          numeros[4].current.value +
          numeros[5].current.value
      );
      if (codigo === confirmacion) {
        user.set(user.user);
        cambiar("/");
        salir(false);
      } else {
        setMenValido("Codigo Incorrecto");
        setValido(true);
      }
    } else {
      setMenValido("No todos los campos estan llenos");
      setValido(true);
    }
  };

  return (
    <div className="contConfirmar">
      <h2 className="titCodConf">Ingrese Codigo de Confirmación</h2>
      <div className="numeros">
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[0]}
          onKeyDown={(e) => handleKeyDown(e, 0)}
        />
        -
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[1]}
          onKeyDown={(e) => handleKeyDown(e, 1)}
        />
        -
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[2]}
          onKeyDown={(e) => handleKeyDown(e, 2)}
        />
        -
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[3]}
          onKeyDown={(e) => handleKeyDown(e, 3)}
        />
        -
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[4]}
          onKeyDown={(e) => handleKeyDown(e, 4)}
        />
        -
        <input
          type="number"
          className="cuadroNumero"
          ref={numeros[5]}
          onKeyDown={(e) => handleKeyDown(e, 5)}
        />
      </div>
      {valido ? <p className="codigoInvalido">{menValido}</p> : null}
      <button type="button" className="botonConfirmar" onClick={confirmar}>
        Confirmar
      </button>
    </div>
  );
}
