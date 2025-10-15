import './App.css'
import Counter from './component/Counter.tsx'
import ProfileCard from './component/ProfileCard.tsx'
import ContactForm from './component/ContactForm.tsx'
import TodoList from './component/TodoList.tsx'
import FunctionalUpdate from './component/FunctionalUpdate.tsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">
      
      <div className="w-full max-w-2xl flex flex-col gap-8">
        
        <div className="bg-white shadow-md rounded-xl p-6 text-center ">
          <p className="text-lg font-semibold mb-3 text-sky-700">Tugas 1</p>
          <Counter />
        </div>

        
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-semibold mb-3 text-sky-700">Tugas 2</p>
          <ProfileCard />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-semibold mb-3 text-sky-700">Tugas 3</p>
          <ContactForm />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-semibold mb-3 text-sky-700">Tugas 4</p>
          <TodoList />
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-semibold mb-3 text-sky-700">Tugas5</p>
          <FunctionalUpdate/>
        </div>
      </div>
    </div>
  )
}

export default App
