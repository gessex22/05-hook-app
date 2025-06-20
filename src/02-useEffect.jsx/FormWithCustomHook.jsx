import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onImputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

 const { username, email, password } = formState

  return (
    <>
      <h1>Formulario With Custom Hook</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onImputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@mail.com"
        name="email"
        value={email}
        onChange={onImputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onImputChange}
      />

      {username === "gessex23" && <Message />}

      <button onClick={onResetForm } className=" btn btn-primary mt-2" > Borrar </button>
    </>
  );
};
