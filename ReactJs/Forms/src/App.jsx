import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <>
      <h1>Hello, {headingText}</h1><br />
      <input
        onChange={handleChange}
        type="text"
        placeholder='what is your name'
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
