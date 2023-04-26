import React from "react";

const Todoitem = ({ todo, updateTodo }) => {
  return (
    <div
      class={
        todo.status == "completed"
          ? "alert alert-primary completedTodo"
          : "alert alert-primary pendingTodo"
      }
      role="alert"
      onClick={() => {
        updateTodo(todo);
      }}
    >
      {todo.task}
    </div>
  );
};

export default Todoitem;
