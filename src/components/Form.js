import React from 'react'

function Form ({ addTask, taskCreator }) {
  return (
    <form onSubmit={ addTask }>
      <input
        type='text'
        placeholder='Enter a ToDo'
        onChange={ taskCreator }
      />
    </form>
  )
}

export default Form
