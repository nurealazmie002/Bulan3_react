
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice'


function App() {

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  const buttonStyle = "px-4 py-2 text-white rounded-md"

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">

      <h1 className="mb-8 text-6xl font-bold">
        Counter: <span className="text-blue-400">{count}</span>
      </h1>
      
      <div className="flex space-x-4">
        
        <button 
          onClick={() => dispatch(increment())}
          className={`${buttonStyle} bg-green-600 hover:bg-green-700`}
        >
          +
        </button>
        
        <button 
          onClick={() => dispatch(decrement())}
          className={`${buttonStyle} bg-red-600 hover:bg-red-700`}
        >
          -
        </button>
        
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className={`${buttonStyle} bg-blue-600 hover:bg-blue-700`}
        >
          +5
        </button>

      </div>
    </div>
    </>
  )
}

export default App
