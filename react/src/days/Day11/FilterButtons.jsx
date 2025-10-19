import PropTypes from "prop-types";

export default function FilterButtons({ filter, setFilter }) {
  const filters = ["all", "active", "done"];

  return (
    <div className="flex justify-center gap-3 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            filter === f
              ? "bg-blue-500 text-white shadow"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

FilterButtons.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
