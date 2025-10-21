import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "study React", done: false },
    { text: "eat", done: true },
  ]);

  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { text, done: false }]);
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day13 – Filter Todos</h1>
      <AddTodo onAdd={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          done={todo.done}
          onToggle={() => toggleDone(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
      <p className="mt-4 text-sm text-gray-600">
        Done: {todos.length - remaining} / {todos.length}
      </p>
    </div>
  );
}


// Day	フォーカス	コードの特徴

// Day12	状態管理（Immutability）	map や filter で 安全に state を更新する 練習が中心。
// フィルター機能自体はまだ「全件表示のみ」でもOK

// Day13	Todoフィルター機能	新たに filter state を追加して、All / Active / Done で表示を切り替える。
// 表示用に filteredTodos を作る部分がDay13の新規追加部分