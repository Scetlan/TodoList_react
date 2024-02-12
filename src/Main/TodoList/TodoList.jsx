import React from "react";
import { Task } from "./Task/Task";


export const TodoList = () => {
   return (
      <ul className="todo-list">
         <Task title='Completed task' text='created 17 seconds ago' nameClass='completed' />
      </ul>
   )
}