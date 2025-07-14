import { useState } from "react";

export const ToDoItem = ({ NewItem }) => {

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between"
      >
        <span className="align-self-center"> {NewItem.description} </span>
        <button className=" btn btn-danger"> Delete </button>
      </li>
    </>
  );
};
