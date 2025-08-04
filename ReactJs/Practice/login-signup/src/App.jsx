import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login';

function App() {
  var isLoggin = false;
  return (
    <>
      <div className="container">{
        isLoggin === true ? <h1>Hello</h1> : <Login />
      }
      </div>
    </>
  )
}

export default App
