import React, { useEffect } from 'react'

const Todo = ( { idx, task, toDoList, toast, removeTask } ) => {


  useEffect( () => {
    toast.success(`New todo added: ${task}`, {
      position: toast.POSITION.BOTTOM_RIGHT
    });

    toast(`Remaining todos: ${toDoList.length}`, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    
  },[])
  

  useEffect( ()=> {
    toast.error(`Todo deleted: ${task}`, {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast(`Remaining todos: ${toDoList.length - 1}`, {
      position: toast.POSITION.BOTTOM_LEFT
    });

   },[idx])

    return (
      <li>
        <div className="divCenter">
          <h1>{task}</h1>
          <br />
          <button onClick={ ()=> removeTask(idx) }>x</button>
        </div>
      
      </li>
    )
  }

export default Todo
