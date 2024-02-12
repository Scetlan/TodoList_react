import React from "react";
// import FooterBlog from './FooterBlog/FooterBlog'
import { TodoList } from "./TodoList/TodoList";

export const Main = () => {
   return (
      <section className="main">
         <TodoList />
         {/* <FooterBlog /> */}
      </section>
   )
}