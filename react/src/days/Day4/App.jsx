import { useState } from "react";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day4</h1>
      <AddTodo onAdd={addTodo} />
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="border-b py-1">{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
