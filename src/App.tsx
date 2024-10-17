import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Alpha Peter</h1>
      <div className="card">
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          Click Me - {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the button
      </p>
    </>
  )
}

export default App
