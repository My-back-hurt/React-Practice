import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

 // 初回マウント時に localStorage から読み込む
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // todos が変わるたびに保存 and todosが0より大きい時
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

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
      <h1 className="text-2xl font-bold mb-4">Day14 - localStorage</h1>
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

// ページをリロードしても、追加・完了状態が消えないようにする
// useEffect を使って 初回マウント時に読み込み、todosが変わるたびに保存する

// [ポイント]
// useEffect	副作用の処理（初回マウント or todos更新時）に使用
// localStorage.getItem	保存済みデータの取得（文字列 → JSON.parse で配列に変換）
// localStorage.setItem	更新された todos を文字列化して保存
// 条件付き保存	空配列の場合は保存せず、初回読み込みだけ行う