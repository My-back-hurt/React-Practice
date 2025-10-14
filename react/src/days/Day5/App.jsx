import { useState } from "react";

export default function App() {
  const [fruits, setFruits] = useState(["りんご","バナナ","オレンジ"]);
  const [input, setInput] = useState("");

  const addFruit = () => {
    if (!input.trim()) return;
    setFruits([...fruits, input]);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day 5</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="You can add"
          className="border rounded px-2 py-1 flex-1" 
        />
        <button
          onClick={addFruit}
          className="bg-black text-white px-3 py-1 rounded hover:bg-blue-600"
        >Click</button>
      </div>

      <ul className="list-disc pl-6 space-y-2">
        {fruits.map((fruit,index) => (
          <li key={index} className="text-lg text-gray-700">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}

// map() → 配列をループしてJSXを返す
// key → Reactがリストの変更を効率的に検出するための識別子（基本的には一意な値が望ましい、ここではindexを代用）
// 配列の内容が変わると、Reactが差分を検出して最小限の再描画を行う

// useState で配列を扱う
// map() で動的リストを描画
// setState([...prev, newItem]) でイミュータブル更新

// Array.prototype.map()
// URL [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]