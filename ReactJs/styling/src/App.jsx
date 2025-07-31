import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Foods = "My Fav Foods";

  return (
    <>
      <h1 className="heading" contentEditable="False">{Foods}vdsvsvsvsd</h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodels</li>
      </ul>
    </>
  )
}

export default App
