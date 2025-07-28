import { useContext } from "react";
import { UserContext } from "./Context/UserContext";

export const LoginPage = () => {
  const { user,setUser } = useContext(UserContext);

  return (
    <>
      <h1> LoginPage</h1>
      <hr />
      <pre>
      {JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
};
