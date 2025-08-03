import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var numbers = [3, 56, 2, 48, 5];
  console.log(numbers);

  // maps
  function double(x) {
    return x * 2;
  };
  const newNum = numbers.map(double);
  console.log(newNum);

  // filters
  const filterNum = numbers.filter(function (nums) {
    return nums > 10;
  });
  console.log(filterNum)

  // Reduse
  const reduceNum = numbers.reduce(function (acc, currNum) {
    return acc + currNum;
  })

  console.log(reduceNum);
  return (
    <>
    </>
  )
}

export default App