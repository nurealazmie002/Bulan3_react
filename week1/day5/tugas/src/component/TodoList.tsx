import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newItem: Task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Daftar Tugas</h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Tulis tugas baru..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:scale-95 transition"
          >
            Tambah
          </button>
        </div>

        <ul className="space-y-3 text-left">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span
                onClick={() => toggleComplete(task.id)}
                className={`cursor-pointer flex-grow ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default TodoList;
