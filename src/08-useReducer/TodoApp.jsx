import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";
import { ToDoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodo } from "./components/useTodo";





export const TodoApp = () => {
 

  const { todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo }= useTodo( )
 
  return (
    <>
      <h1>
      Todo App: {todosCount} <small> pendientes:  {pendingTodos} </small>
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
