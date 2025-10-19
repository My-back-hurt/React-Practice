import PropTypes from "prop-types";

export default function TodoItem({ text, done, onToggle, onDelete }) {
  return (
    <div
      className={`flex justify-between items-center border-b py-2 transition-all duration-300 ${
        done ? "opacity-50" : ""
      }`}
    >
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

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
