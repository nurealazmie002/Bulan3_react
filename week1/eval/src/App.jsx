import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All'); 

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const getFilteredTodos = () => {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.isCompleted);
      case 'Active':
        return todos.filter(todo => !todo.isCompleted);
      default: 
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <img src="https://i.pinimg.com/736x/ac/e8/5b/ace85b5cb35dda3651f8f39c08c8f206.jpg" className='w-20 h-20 rounded-full mx-auto mb-4' />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Aplikasi Todolist</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter currentFilter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
    </div>
  );
}

export default App;