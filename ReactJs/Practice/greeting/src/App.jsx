import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const date = new Date();
  const getTime = date.getHours();

  let gretting;

  const customColor = {
    color: ""
  }

  if (getTime < 12) {
    gretting = "Good Morning";
    customColor.color = "red";
  } else if (getTime < 18) {
    gretting = "Good Afternoon";
    customColor.color = "yellow";
  } else {
    gretting = "Good Night"
    customColor.color = "black";
  }

  return (
    <>
      <h1>{gretting}</h1>
    </>
  )
}

export default App
