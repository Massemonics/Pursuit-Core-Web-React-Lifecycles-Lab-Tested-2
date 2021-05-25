import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
import Form from "./components/Form";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import "css-doodle";

const App = () => {
  const [toDoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const taskCreator = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      todo: task,
      id: uuidv4(),
    };

    addTask(newTask);
    setTask("");
  };

  const addTask = (task) => {
    setTodoList([...toDoList, task]);
  };

  const removeTask = (task) => {
    const _toDoList = toDoList.filter((item) => {
      return task.id !== item.id;
    });
    setTodoList(_toDoList);
  };

  return (
    <div className="app">
      <ToastContainer />
      <Form
        input={task}
        taskCreator={taskCreator}
        handleSubmit={handleSubmit}
      />
      <Todos toDoList={toDoList} removeTask={removeTask} />
    </div>
  );
};

export default App;
