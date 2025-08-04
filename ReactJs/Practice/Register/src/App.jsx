import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  var userIsRegisterd = true;
  return (
    <>
      <Form
        isRegisterd={userIsRegisterd}
      />
    </>
  )
}

export default App
