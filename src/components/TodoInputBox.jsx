import React, { useState } from "react";

const TodoInputBox = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    if (task != "") {
      addTodo(task);
    }
  };
  return (
    <div className="todoInputBox">
      <input
        type="text"
        placeholder="Enter a Task"
        name="task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInputBox;
