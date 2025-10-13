import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-2">Day 2</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <button onClick={increase} className="bg-black text-white px-3 py-1 rounded mr-2">+</button>
      <button onClick={reset} className="bg-black text-white px-3 py-1 rounded mr-2">Reset</button>
      <button onClick={decrease} className="bg-black text-white px-3 py-1 rounded">-</button>
    </div>
  );
}

export default Counter;

// useState	状態（state）と更新関数を作る
// 状態と画面	count が変わると自動で再レンダーされる
// イベント	onClick で状態を更新
// 不変性	直接変更せず setCount で更新する