import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", done: false },
    { text: "Drink Coffee", done: true },
  ]);

  // todoの完了・未完トグル
  const toggleDone = (index) => {
    // 状態を部分的に更新(map)
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // todoの削除
  const deleteTodo = (index) => {
    // 要素を削除(filter)
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Day6: filter / map</h1>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-2"
        >
          <span
            onClick={() => toggleDone(index)}
            className={`cursor-pointer ${
              todo.done ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(index)}
            className="text-red-500 hover:text-red-700"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

// map → 状態を更新（完了・未完をトグル）
// filter → 状態を削除（リストから取り除く）

// テキストをクリック → ✅／未完が切り替わる
// 「delete」ボタン → リストから削除
// 状態が変更されるたびに UI が再レンダーされる