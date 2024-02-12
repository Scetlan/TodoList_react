import React from "react";

export const Footer = () => {
   return (
      <footer className="footer">
         <span class="todo-count">1 items left</span>
         <ul class="filters">
            <li>
               <button class="selected">All</button>
            </li>
            <li>
               <button>Active</button>
            </li>
            <li>
               <button>Completed</button>
            </li>
         </ul>
         <button class="clear-completed">Clear completed</button>
      </footer>
   )
}