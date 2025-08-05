import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <>
      <h1>{time}</h1>
      <button onClick={updateTime}>Update</button>
    </>
  )
}

export default App
