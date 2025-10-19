import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Tea", done: false },
    { text: "Coffee", done: true },
    { text: "Water", done: false },
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

  // フィルタリングされたリストを計算

  // filter が "all" / "active" / "done" のどれかに応じて表示内容を todos.filter() で制御しています。
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true; // all
  });

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Day9: Filtered Todo</h1>
      <AddTodo onAdd={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        // フィルターの状態をスタイルに反映
        <p className="text-gray-500 text-center mt-6">No tasks found</p>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleDone(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))
      )}

      <p className="mt-4 text-sm text-gray-600">
        Done: {todos.length - remaining} / {todos.length}
      </p>
    </div>
  );
}

// 学習項目
// filter()	配列の絞り込み
// propsとstate	状態の受け渡し・リフトアップ
// 条件付きスタイル	状態に応じたUI変化
// map + filter	Reactでの典型的パターンをマスター