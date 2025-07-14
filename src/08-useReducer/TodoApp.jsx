import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { ToDoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Collect alma gem",
    done: false,
  },
  {
    id: new Date().getTime() * 1000,
    description: "Collect  power gem",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <h1>
        Todo App: 10 <small> pendientes: 2 </small>
      </h1>
      <hr />

      <div className="row ">
        <div className="col-7">
          <ToDoList items={todos} />
        </div>
        <div className="col-5">
          <h4> Agregar Todo</h4>
          <hr />

          {<TodoAdd onNewTodo={ handleNewTodo} />}
        </div>
      </div>
    </>
  );
};
