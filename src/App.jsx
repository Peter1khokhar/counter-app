import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

    // let counter = 10

    const addValue = () => {
      // counter = counter + 1
      setCounter(counter + 1)
      console.log (counter);
    }

    const decreaseValue = () =>{
      if (counter > 0){

        setCounter(counter-1)
      }
    }
    return (
      <>
      <div className=' bg-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 '>
        <h1 className="text-5xl font-bold text-zinc-600">Count</h1><br />
        <h2 className='text-3xl font-bold '>Counter Value : {counter} </h2><br />

        <button className='bg-sky-500 hover:bg-sky-700 p-4 rounded-2xl text-3xl text-white' onClick={addValue}>Increase Value</button><br /><br />
        <button className='bg-sky-500 hover:bg-sky-700 p-4 rounded-2xl text-3xl text-white' onClick={decreaseValue}>Decrease Value</button>
      </div>
    </>
  )
}

export default App
