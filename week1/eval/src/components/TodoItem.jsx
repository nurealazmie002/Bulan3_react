function TodoItem({ todo, index, toggleTodo, deleteTodo}) {
    return (
        <li className="flex items-center bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
            <input type="checkbox" checked={todo.isCompleted} onChange = {() => toggleTodo(index)} className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"/>
            <span onClick={() => toggleTodo(index)} className={`flex-grow mx-3 cursor-pointer ${
          todo.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'
        }`}> {todo.text}</span>
            <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded hover:bg-red-600 transition-colors">Delete</button>
        </li>
    )
}

export default TodoItem