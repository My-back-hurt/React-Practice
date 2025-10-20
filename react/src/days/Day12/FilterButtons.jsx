// import PropTypes from "prop-types";

export default function FilterButtons({ filter, setFilter }) {
  const filters = ["all", "active", "done"];
  return (
    <div className="flex justify-center gap-3 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

// FilterButtons.propTypes = {
//   filter: PropTypes.oneOf(["all", "active", "done"]).isRequired,
//   setFilter: PropTypes.func.isRequired,
// };
