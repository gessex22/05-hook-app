import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Collect alma gem",
    done: false,
  },
  {
    id: new Date().getTime(),
    description: "Collect  power gem",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        Todo App: 10 <small> pendientes: 2 </small>
      </h1>
      <hr />

      <div className="row ">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="align-self-center"> Item X </span>
                <button className=" btn btn-danger"> Delete </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4> Agregar Todo</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Que hay que hacer"
              className="form-control"
            />
            <button type="submit" className=" btn btn-outline-primary mt-1">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
