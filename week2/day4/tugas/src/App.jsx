import './App.css'
import FetchPost from './components/FetchAPI.jsx'
import FetchUserAxios from './components/FetchAxios.jsx'
import FetchWithError from './components/ErrorHandling.jsx'
import FetchWithAbort from './components/AbortController.jsx'
import FilteredUserList from './components/DataManipulation.jsx'

function App() {
  

  return (
    <>
      <div className='flex flex-col gap-4 text-center'>
        <div>
          <p>Tugas 1</p>
          <FetchPost/>
        </div>

        <div>
          <p>Tugas 2</p>
          <FetchUserAxios/>
        </div>

        <div>
          <p>Tugas 3</p>
          <FetchWithError/>
        </div>

        <div>
          <p>Tugas 4</p>
          <FetchWithAbort/>
        </div>

        <div>
          <p>Tugas 5</p>
          <FilteredUserList/>
        </div>
      </div>
    </>
  )
}

export default App
