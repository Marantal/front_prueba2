import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorResponse, setErrorResponse] = useState("");

  const auth = useAuth();
  const goTo = useNavigate();

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(username, password, name, apellido);

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name, apellido }),
      });
      if (response.ok) {
        const json = (await response.json()) as AuthResponse;
        console.log(json);
        setUsername("");
        setPassword("");
        setName("");
        setApellido("");
        goTo("/");
      } else {
        const json = (await response.json()) as AuthResponseError;

        setErrorResponse(json.body.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit} className="form">
        <h1>Regístrate</h1>
        {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Apellido</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
        />
        <label>Usuario</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Crear cuenta</button>
      </form>
    </DefaultLayout>
  );
}
