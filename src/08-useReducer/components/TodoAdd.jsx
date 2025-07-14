import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onImputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return; // length en lugar de lenght

    const NewTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

   onNewTodo && onNewTodo(NewTodo);
   onResetForm()
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer"
        className="form-control"
        value={description}
        onChange={onImputChange}
        name="description"
      />
      <button type="submit" className=" btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
