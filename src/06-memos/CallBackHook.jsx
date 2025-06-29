import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    ( val, name) => {
    setCounter( (value) => value + val );
    console.log(name)
  },
   [],
);

  return (
    <>
      <h1> useCallBack Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
