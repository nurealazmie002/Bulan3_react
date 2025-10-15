import "./App.css";
import SimpleEffect from "./components/SimpleEffect.jsx";
import UserData from "./components/Dependency.jsx";
import Cleanup from "./components/Cleanup.jsx";
import MultipleEffects from "./components/MultipleEffect.jsx";
import FetchSimulation from "./components/Fetch.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
         Tugas useEffect React
      </h1>

      <div className="w-full max-w-3xl flex flex-col gap-8 px-4">
        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Tugas 1 – useEffect Sederhana
          </h2>
          <SimpleEffect />
          <p className="text-gray-500 italic mt-2">Cek konsol untuk hasilnya!</p>
        </section>


        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Tugas 2 – Dependency Array
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <UserData userId={5} />
            <UserData userId={10} />
          </div>
        </section>


        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Tugas 3 – Cleanup Function
          </h2>
          <Cleanup />
        </section>


        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Tugas 4 – Multiple useEffect
          </h2>
          <MultipleEffects />
        </section>


        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Tugas 5 – Simulasi Fetch Data
          </h2>
          <FetchSimulation />
        </section>
      </div>
    </div>
  );
}

export default App;
