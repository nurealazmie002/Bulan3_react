import { useState } from "react"

function TodoForm({addTodo}){
    const [value,setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value.trim()) return
        addTodo(value)
        setValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Tambahkan tugas" className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors cursor-pointer " >
                tambah
            </button>
        </form>
    )
}

export default TodoForm