import React, { useState } from "react";
import "./todo.css";
import TodoInputBox from "../components/TodoInputBox";
import Todoitem from "../components/Todoitem";
import { v4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: v4(),
      task: "Go to dentist",
      status: "pending",
    },
    {
      id: v4(),
      task: "Buy a house",
      status: "pending",
    },
    {
      id: v4(),
      task: "Eat samgyopsal, bibimbap, kimbap and sushi",
      status: "pending",
    },
    {
      id: v4(),
      task: "Learn swimming",
      status: "pending",
    },
    {
      id: v4(),
      task: "Play with my dogs",
      status: "pending",
    },
  ]);
  const updateTodo = (clickedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (clickedTodo.id == todo.id) {
        if (todo.status == "pending") {
          return { ...todo, status: "completed" };
        } else {
          return { ...todo, status: "pending" };
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const addTodo = (task) => {
    let newTodo = {
      id: v4(),
      task: task,
      status: "pending",
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div id="todoPage">
      <div className="todoPageContainer">
        <h3 className="text-white text-center">ToDo App</h3>
        <TodoInputBox addTodo={addTodo} />
        <div className="todoContainer">
          {todos.map((todo) => {
            return <Todoitem todo={todo} updateTodo={updateTodo} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Todo;
