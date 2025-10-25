import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 初回ロードでAPIからデータを取得
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  // 追加
  const addTodo = async () => {
    if (!text.trim()) return;

    const newTodo = { title: text, completed: false };
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        // ここでfetch() with POST	新しいデータを送信する
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      // API上では保存されないけど、ローカル状態に反映
      setTodos([...todos, data]);
      setText("");
    } catch (err) {
      setError("Failed to add todo");
    }
  };

  // 削除
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        // ここでfetch() with DELETE	指定したデータを削除する
        method: "DELETE",
      });
      // APIでは削除されないけど、ローカルからは消す
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day18: POST & DELETE</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo"
          className="flex-1 border rounded px-2 py-1"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between border-b py-2">
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.title}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


// ✅ fetch() を使って POST / DELETE リクエストを送る
// ✅ フロント側の状態 (useState) とサーバー通信を同期させる
// ✅ 「仮想的なAPI連携」を体験する

// 概念	
// fetch() with POST	新しいデータを送信する。method: "POST" + body: JSON.stringify()
// fetch() with DELETE	指定したデータを削除する。method: "DELETE"
// サーバーとローカルの差	jsonplaceholder は実際には保存されない。だから setTodos() で手動反映。
// エラーハンドリング	ネットワークエラーやAPI失敗を try...catch で安全に処理。