import "./App.css";
import Parent from "./components/Parent.jsx";
import ExpensiveComputation from "./components/ExpensiveComputation.jsx";
import ParentCallback from "./components/ParentCallback.jsx";
import { lazy, Suspense } from "react";
import PerformanceTest from "./components/Performancetest.jsx";

const LazyCard1 = lazy(() => import("./components/Lazy1.jsx"));
const LazyCard2 = lazy(() => import("./components/Lazy2.jsx"));
const LazyCard3 = lazy(() => import("./components/Lazy3.jsx"));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-10">
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10 drop-shadow-sm">
        Optimalisasi React (Tema Pastel)
      </h1>

      <div className="space-y-10 max-w-4xl mx-auto">

        <div className="bg-pink-50 border-l-4 border-pink-300 p-6 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-pink-500 mb-3">
            Tugas 1: React.memo
          </h2>
          <Parent />
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-300 p-6 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-purple-500 mb-3">
            Tugas 2: useMemo
          </h2>
          <ExpensiveComputation />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-300 p-6 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-500 mb-3">
            Tugas 3: useCallback
          </h2>
          <ParentCallback />
        </div>

        <div className="bg-green-50 border-l-4 border-green-300 p-6 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Tugas 4: Lazy Loading
          </h2>
          <Suspense fallback={<div className="text-green-600">Memuat komponen...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <LazyCard1 />
              <LazyCard2 />
              <LazyCard3 />
            </div>
          </Suspense>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-300 p-6 rounded-2xl shadow hover:shadow-md transition">
          <PerformanceTest />
          <p className="text-yellow-700 italic mt-3">
            Liat React Profiler untuk analisis nya.
          </p>
        </div>
      </div> 
    </div>
  );
}

export default App;
