import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Todo = ({ task, removeTask }) => {
  useEffect(() => {
    toast.success(`New todo added: ${task.todo}`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return () => {
      toast.error(`Todo deleted: ${task.todo}`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    };
  }, []);

  return (
    <li>
      <div className="divCenter">
        <h1>{task.todo}</h1>
        <br />
        <button onClick={() => removeTask(task)}>x</button>
      </div>
    </li>
  );
};

export default Todo;
