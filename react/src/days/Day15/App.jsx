import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 初回マウント時に API から取得
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setTodos(
          data.map((item) => ({ text: item.title, done: item.completed }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

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

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day15 - Fetch Todos</h1>
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


// ここからAPIの機能というかロジックをコンポーネントにしてサイトのどこでもロジックが使えるようにする

// 概念 
// useEffect	初回マウント時に非同期 fetch を実行
// async/await	API からデータ取得を簡潔に書く
// loading	取得中に表示する文言
// error	エラー時の表示
// map()	APIデータの整形 {text, done} に変換