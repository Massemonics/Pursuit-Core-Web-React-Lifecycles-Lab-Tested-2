import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";

const Todos = ({ toDoList, removeTask }) => {
  let prevTodos = useRef(0);

  useEffect(() => {
    if (prevTodos.current !== toDoList.length) {
      toast(`Remaining todos: ${toDoList.length}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    prevTodos.current = toDoList.length;
  });

  return (
    <ul id="todos">
      {toDoList.map((task) => {
        return (
          <Todo
            key={task.id}
            task={task}
            toDoList={toDoList}
            removeTask={removeTask}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
