import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List';

function Heading() {
  return <h1>My fav Food</h1>;
}

function App() {
  return (
    <>
      <Heading></Heading>
      <List></List>
    </>
  )
}

export default App
