
function TodoFilter({ currentFilter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="flex justify-center space-x-2 mb-4 pt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors margin-top-4 ${
            currentFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentFilter === filter}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;