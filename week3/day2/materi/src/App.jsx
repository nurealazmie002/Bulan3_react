import './App.css'
import Store from './components/Store.jsx'


function App() {

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-blue-700 p-10 hover:text-purple-500 transition-colors duration-300 animate-pulse"
>
      Store API | Simulasi Custom Hook 
      </h1>
      <Store/>
    </div>
    </>
  )
}

export default App
