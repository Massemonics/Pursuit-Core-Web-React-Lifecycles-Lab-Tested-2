import React from "react";

function Form({ input, handleSubmit, taskCreator }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter a ToDo"
        onChange={taskCreator}
      />
    </form>
  );
}

export default Form;
