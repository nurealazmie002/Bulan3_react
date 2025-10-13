import './App.css'
import LiftingState from './components/LiftingState.jsx'
import PropDrilling from './components/PropDrill.jsx'
import SharedState from './components/SharedState.jsx'
import UseReducer from './components/UseReducer.jsx'
import { ThemeProvider, ThemedButton, ThemedParagraph } from './components/Context.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-gray-900 text-white flex flex-col items-center justify-center gap-10 py-10 font-mono">
      
      <h1 className="text-3xl font-bold text-center text-yellow-400 drop-shadow-md uppercase tracking-wide">
        Tugas day5
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6">
        
        {/* Tugas 1 */}
        <div className="bg-blue-800 border-2 border-yellow-400 rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-red-300 mb-3">Tugas 1 - Lifting State Up</h2>
          <LiftingState />
        </div>

        {/* Tugas 2 */}
        <div className="bg-gray-800 border-2 border-blue-500 rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-yellow-400 mb-3">Tugas 2 - Prop Drilling</h2>
          <PropDrilling />
        </div>

        {/* Tugas 3 */}
        <div className="bg-slate-800 border-2 border-red-400 rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-cyan-300 mb-3">Tugas 3 - Shared State</h2>
          <SharedState />
        </div>

        {/* Tugas 4 */}
        <div className="bg-blue-900 border-2 border-cyan-400 rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold text-yellow-300 mb-3">Tugas 4 - useReducer</h2>
          <UseReducer />
        </div>


        <div className="col-span-1 md:col-span-2 bg-gray-900 border-2 border-yellow-400 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300">
          <ThemeProvider>
            <h2 className="text-lg font-semibold text-red-400 mb-4">Tugas 5 - Context API</h2>
            <ThemedButton />
            <ThemedParagraph />
          </ThemeProvider>
        </div>

      </div>

    </div>
  )
}

export default App
