import { useState } from "react";
import { ToDoItem } from "./TodoItem";


export const ToDoList = ({items  = [ ]})=> {

return (
      <ul className="list-group">
      
             {items.map((todo) => (  <ToDoItem key={todo.id} NewItem={todo} />    ))} 
        </ul> 
)

}

