import './App.css';
import ModalToggle from './components/ModalToggle.jsx';
import SwitchToggle from './components/SwitchToggle.jsx';
import PostViewer from './components/PostViewer.jsx';
import CounterToggleComponent from './components/CounterToggleComponent.jsx';
import UserForm from './components/UserForm.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';

function App() {
  return (
    <div className="min-h-screen  p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-10 tracking-wide">
        Week 3 Day 2 — Custom Hooks Assignment
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Tugas 1 — useToggle</h2>
          <div className="flex flex-col gap-4 items-center">
            <ModalToggle />
            <SwitchToggle />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Tugas 2 — useFetch</h2>
          <PostViewer />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Tugas 3 — useCounter + useToggle</h2>
          <CounterToggleComponent />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Tugas 4 — useForm</h2>
          <UserForm />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition col-span-full">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Tugas 5 — useLocalStorage</h2>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default App;
