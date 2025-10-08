import { useState } from 'react'
function Counter() {
  const [counter, setCounter] = useState<number>(0) 
  
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCounter(Number(e.target.value))
}
const tambah = () => setCounter(counter + 1)
const kurang = () => setCounter(counter - 1)

  return (
    <>
      <main>
        <div>
          <h1>Aplikasi Counter</h1>
          <p>Jumlah counter : {counter}</p>
          <input type="text" value={counter} onChange={onChange}/>
          <div>
            <button onClick={tambah}>+</button>
            <button onClick={kurang}>-</button>
          </div>
        </div>
      </main>
    </>
  )
}
export default Counter