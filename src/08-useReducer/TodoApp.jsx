import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { ToDoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Collect alma gem",
    done: false,
  },
];

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[add] add Todo",
      payload: todo,
    };

    dispatch(action);
  };



  const handleToggleTodo = (id) =>{
  
   const action = {
    type: '[slc] select todo',
    payload: id
   }

   dispatch( action)
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[rm] delete ToDo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        Todo App: 10 <small> pendientes: 2 </small>
      </h1>
      <hr />

      <div className="row ">
        <div className="col-7">
          <ToDoList items={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4> Agregar Todo</h4>
          <hr />

          {<TodoAdd onNewTodo={handleNewTodo} />}
        </div>
      </div>
    </>
  );
};
