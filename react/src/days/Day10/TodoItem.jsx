export default function TodoItem({ text, done, onToggle, onDelete }) {
  return (
    <div
      className={`flex justify-between items-center px-3 py-2 rounded-lg shadow-sm border transition-all duration-300 
        ${done ? "bg-gray-100 text-gray-400 scale-[0.98]" : "bg-blue-50 text-gray-800 hover:scale-[1.02]"}`}
    >
      <span
        onClick={onToggle}
        className={`cursor-pointer transition-all duration-300 ${
          done ? "line-through opacity-50" : "opacity-100"
        }`}
      >
        {text}
      </span>
      <button
        onClick={onDelete}
        className="text-red-400 hover:text-red-600 transition-transform duration-300 hover:scale-110"
      >
        ✕
      </button>
    </div>
  );
}

// transition-all duration-300 → 全体のアニメーション速度
// hover:scale-[1.02] → ホバー時に少し拡大
// done 状態で見た目が柔らかく変化