export default function TodoItem({ text, done, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span
        onClick={onToggle}
        className={`cursor-pointer ${done ? "line-through text-gray-400" : ""}`}
      >
        {text}
      </span>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 transition"
      >
        delete
      </button>
    </div>
  );
}
