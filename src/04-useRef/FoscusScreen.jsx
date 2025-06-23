import React, { useRef } from "react";

export const FoscusScreen = () => {
  const inputRef = useRef();

  
  const onClick = () => {
    console.log(inputRef);
  };

  return (
    <>
      <h1>Foscus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="put your name"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        set Focus
      </button>
    </>
  );
};
