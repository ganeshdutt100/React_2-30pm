import React, { useState } from "react";

const Example4 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const addTask = () => {
    if (newTodos !== "") {
      setTodos([...todos, newTodos]);
      setNewTodos("");
    }
  };
  return (
    <div>
      <h2>To-Do-List</h2>
      <input
        type="text"
        value={newTodos}
        onChange={(e) => setNewTodos(e.target.value)}
        placeholder="Enter your taske here.."
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={addTask}>Limit</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example4;
