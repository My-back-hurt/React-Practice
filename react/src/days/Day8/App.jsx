import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Tea", done: false },
    { text: "Coffee", done: true },
    { text: "Water", done: true },
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

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Day8: Conditional Rendering</h1>
      <AddTodo onAdd={addTodo} />

      {/* todos.length === 0 のときだけメッセージを表示。if文の代わりに三項演算子 (? :) や && がよく使う */}
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">No tasks</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleDone(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))
      )}

      {/* 完了した件数と全件数のカウントを表示。UX的にも重要な要素です */}
      <p className="mt-4 text-sm text-gray-600">
        Done: {todos.length - remaining} / {todos.length}
      </p>
    </div>
  );
}

// [UI/UXの強化ポイント]
// 何もない時に「空表示」を出す
// カウントを明示する
// → リアクティブに変化する画面が完成！

// [学習項目]
// 条件付きレンダリング	三項演算子でUIを出し分け
// map + filter	配列操作の基本
// 状態によるUI変化	“state-driven UI” の感覚を掴む
// UX強化	空リスト・件数表示など