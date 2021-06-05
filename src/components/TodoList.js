import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <section>
      {todos.map(todos, index => {
          <Todo
            task={task}
            key={todos.id}
            id={todos.id}
            index={index}
            completed={todos.completed}
            toggleCompleted={toggleCompleted}
          />
      })
      };
      </section>
  )};

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
