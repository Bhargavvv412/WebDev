import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var nums = [1, 2, 3, 4, 5, 6];
  const double = nums.map((x) => {
    return x * x;
  })
  console.log(double);
  return (
    <>
    </>
  )
}

export default App
