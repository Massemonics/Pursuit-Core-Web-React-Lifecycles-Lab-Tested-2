import React, { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos'
import Form from './components/Form'

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
import 'css-doodle';

const App = () => {

  const [ toDoList, setTodoList ] = useState([])
  const [ task, setTask ] = useState('')

  const taskCreator = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    setTodoList( [ ...toDoList, task ] )
  }

 const removeTask = (idx) => {
  const _toDoList = [...toDoList]
  _toDoList.splice(idx,1);
   setTodoList( _toDoList )
 }


  return (
      <div className="app">
        <Form taskCreator={taskCreator} addTask={addTask}/>
        <Todos toDoList={toDoList} removeTask={removeTask} uuidv4={uuidv4} toast ={toast}/>
        <ToastContainer />
      </div>
    );
  }


export default App;
