import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", done: false },
    { text: "Go jogging", done: true },
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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Day11: Component Structure</h1>
      <AddTodo onAdd={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <div className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleDone(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
}

// [追加・変更された主な点まとめ]
// コンポーネント分割	再利用可能なUI単位を分ける
// Props	親 → 子へのデータ・関数の受け渡し
// PropTypes	型チェックでバグを防ぐ
// Tailwind	見た目を統一しつつ軽くアニメーション
// リファクタリング	App.jsxをスッキリ保つ