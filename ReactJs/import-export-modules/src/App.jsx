import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, mul, sub, divide } from './Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{add(7, 2)}</h1>
      <h1>{sub(7, 2)}</h1>
      <h1>{mul(7, 2)}</h1>
      <h1>{divide(7, 2)}</h1>
    </>
  )
}

export default App
