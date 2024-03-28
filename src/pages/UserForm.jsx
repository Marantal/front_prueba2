import React, { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import "../styles/formUser.css";


export function UserForm({ user }) {
  const [login, setLogin] = useState(true);

  return (
    <div className="changeForm">
      {login ? (
        <Login setLogin={setLogin} setUser={user} />
      ) : (
        <Register setLogin={setLogin} />
      )}
    </div>
  );
}
