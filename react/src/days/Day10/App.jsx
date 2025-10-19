import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Tea", done: false },
    { text: "Coffee", done: true },
    { text: "Watrer", done: true },
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
      <h1 className="text-2xl font-bold mb-4 text-center">Day10: Animation</h1>
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

// [学び]
// Tailwindのtransition	見た目に動きをつける
// 状態に応じたクラス切り替え	done ? "..." : "..."
// UXの向上	フィードバックを視覚的に表現
// 簡単なアニメーション設計	状態変化 × transition × scale

// [アニメーション]
// 新しいタスクが ふわっと追加
// 完了タスクは 透明度が下がり色が変化
// 削除ボタンに ホバーアニメーション
// ボタン操作が 押した感覚を出す