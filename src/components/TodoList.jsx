// TodoList.jsx — Exercise 6: Lists & Keys (no styles)

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React props" },
    { id: 2, task: "Understand useState" },
    { id: 3, task: "Practice event handling" },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(4);

  const addTask = () => {
    if (!input.trim()) return;
    setTodos([{ id: nextId, task: input.trim() }, ...todos]);
    setNextId(nextId + 1);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Type a new task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}