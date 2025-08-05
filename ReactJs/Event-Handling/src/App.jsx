import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const style = {
    backgroundColor: isMouseOver ? "black" : "pink",
    color: "white"
  }
  return (
    <>
      <h1>{headingText}</h1>
      <input type="text" placeholder="What is your name?" />
      <button style={style}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit</button>
    </>
  )
}

export default App
