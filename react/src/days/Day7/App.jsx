import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", done: false },
    { text: "Drink Coffee", done: true },
  ]);

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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Day7: Props & Lift State<br />コンポーネント間通信</h1>
      <AddTodo onAdd={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          done={todo.done}
          onToggle={() => toggleDone(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

// [リフトアップ]
// AddTodo（子）── onAdd(text) ──▶ App（親）── setTodos()
// TodoItem（子）── onToggle(), onDelete() ──▶ App（親）── setTodos()

// [Todoアプリを3つのコンポーネントに分割]
// 親コンポーネントが状態を管理
// 子コンポーネントは「表示」「イベント送信」だけを担当

// [学習項目]	
// props	親 → 子へのデータ渡し
// イベント関数	子 → 親へのアクション通知
// map / filter	状態をイミュータブルに更新
// 状態リフトアップ	子では状態を持たず、親で管理する設計