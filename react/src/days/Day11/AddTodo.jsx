import { useState } from "react";
// import PropTypes from "prop-types";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}

// AddTodo.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };
