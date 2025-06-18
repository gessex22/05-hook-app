import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "gessex22",
    email: "Gessex@mail.com",
  });

  const { username, email } = formState;

  const onImputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  useEffect(  ()=>{
  
  console.log('Esta se llamo')
  })

  return (
    <>
      <h1>Formulario Simple</h1>

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
        placeholder="Winigex@mail.com"
        name="email"
        value={email}
        onChange={onImputChange}
      />
    </>
  );
};
