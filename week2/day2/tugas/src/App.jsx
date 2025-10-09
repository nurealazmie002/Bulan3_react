import './App.css'
import LoginStatus from './components/LoginStatus.jsx'
import WelcomeMessage from './components/WelcomeMassage.jsx'
import StatusDisplay from './components/StatusDisplay.jsx'
import ProductList from './components/ProductList.jsx'
import DataList from './components/DataList.jsx'

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-6 bg-gray-50">
        <div className="text-center space-y-2">
          <p className="font-semibold text-blue-600">Tugas 1</p>
          <LoginStatus />
        </div>

        <div className="text-center space-y-2">
          <p className="font-semibold text-blue-600">Tugas 2</p>
          <WelcomeMessage />
        </div>

        <div className="text-center space-y-2">
          <p className="font-semibold text-blue-600">Tugas 3</p>
          <StatusDisplay status={"success"} />
        </div>

        <div className="text-center space-y-2">
          <p className="font-semibold text-blue-600">Tugas 4</p>
          <ProductList />
        </div>

        <div className="text-center space-y-2">
          <p className="font-semibold text-blue-600">Tugas 5</p>
          <DataList />
        </div>
      </div>
    </>
  )
}

export default App
