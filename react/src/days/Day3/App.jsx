import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Day 3");

  const increase = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-2">Day 3</h1>
      <p className="text-lg mb-2">Hello {name}</p>
      <p className="text-xl mb-4">Count: {count}</p>
      <button onClick={increase} className="bg-black text-white px-3 py-1 rounded mr-2">+</button>
      <button onClick={reset} className="bg-black text-white px-3 py-1 rounded">Reset</button>
      {count >= 10 && <p className="text-green-600 mt-2">More than 10</p>}
    </div>
  );
}

export default Counter;

// useState	複数の状態を管理できる
// 条件付き表示	&& で簡単に画面を切り替え
// イベント	ボタン押下で state 更新 → 再レンダー
// JSX	{} 内で JavaScript 式を埋め込む