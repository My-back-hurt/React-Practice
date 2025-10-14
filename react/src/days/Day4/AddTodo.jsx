import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1 border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}

// Controlled Form	入力フォームの値を state で管理する
// onChange	入力値が変わったら state を更新
// onSubmit	フォーム送信時に親に値を渡す
// preventDefault	ページリロードを防ぐ
// 状態のリフトアップ	子 → 親へ状態を渡してアプリ全体で管理