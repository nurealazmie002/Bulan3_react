import './App.css'
import OnMouse from './components/OnMouse.jsx'
import SyntheticEvent from './components/SyntheticEvent.jsx'
import ControlledComponent from './components/ControlledComponent.jsx'
import UncontrolledComponent from './components/UncontrolledComponent.jsx'
import RegisterForm from './components/RegisterForm.jsx'

function App() {
  

  return (
    <>
      <div className=" flex flex-col gap-4 text-center">
        <div>
          <p>Tugas 1</p>
          <OnMouse/>
        </div>

        <div>
          <p>Tugas 2</p>
          <SyntheticEvent/>
        </div>

        <div>
          <p>Tugas 3</p>
          <ControlledComponent/>
        </div>

        <div>
          <p>Tugas 4</p>
          <UncontrolledComponent/>
        </div>

        <div>
          <p>Tugas 5</p>
          <RegisterForm/>
        </div>
      </div>
    </>
  )
}

export default App
