import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
  }

  function unStike() {
    document.getElementById("root").style.textDecoration = null;
  }

  var isDone = true;

  const strikeThrough = { textDecoration: "line-through" };

  return (
    <>
      {/* Delacrative programming */}
      <h1 style={isDone ? strikeThrough : null}>Delacrative Programming</h1>
      {/* Impertaive programming */}
      <h1>Impertavie programming</h1>
      <button onClick={strike}>Change to strike</button>
      <button onClick={unStike} > Unstrik e</button>

    </>
  )
}

export default App
