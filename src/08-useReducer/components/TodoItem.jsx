import { useState } from "react";

export const ToDoItem = ({ NewItem, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            NewItem.done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onToggleTodo(NewItem.id)}
        >
          {NewItem.description}{" "}
        </span>
        <button
          onClick={() => onDeleteTodo(NewItem.id)}
          className=" btn btn-danger"
        >
          Delete
        </button>
      </li>
    </>
  );
};
