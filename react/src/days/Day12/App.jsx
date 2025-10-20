import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Drink", done: false},
    {text: "Eat", done: true}
  ]);

  const [filter,setFilter] = useState("all");

  const addTodo = (text) => {
    if(!text.trim()) return;
    // 新しい配列を作って追加
    setTodos([...todos, {text, done:false}]);
  };

  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? {...todo, done: !todo.done} : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    // filterで削除（新しい配列を返す）
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "active") return !todo.done;
    return true;
  });

  const remaining = todos.filter((t) => !t.todo).length;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day12: handle state</h1>
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

// 概念
// Immutability（不変性）	stateを直接書き換えず、新しいオブジェクトを返す
// map()	要素の値を変換して新しい配列を作る
// filter()	条件に合う要素だけ残して新しい配列を作る
// setState()は上書きではない	Reactは「前回と違うもの」を検出して再レンダーする