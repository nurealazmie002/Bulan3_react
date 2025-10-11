import './App.css'
import FetchData from './components/FetchData.jsx'
import FetchDataAxios from './components/FetchDataAxios.jsx'
import AbortFetch from './components/AbortController.jsx'
import UserListManipulated from './components/ManipulationData.jsx'

function App() {

  return (
    <>
      <div>
        <div>
          <FetchData/>
        </div>

        <div>
          <FetchDataAxios/>
        </div>

        <div>
          {/* <AbortFetch/> */}
        </div>

        <div>
          <UserListManipulated/>
        </div>
      </div>
    </>
  )
}

export default App
