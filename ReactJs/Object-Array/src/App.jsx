import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import animals from './data'
import Car from './car'


// console.log(animals);

// const [cat, dog] = animals;

// var cat = animals[0];

// console.log(cat);

// const { name, sound } = cat;
// console.log(sound);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);

// function useAnimals(animal) {
//   return [
//     animal.name,
//     function () {
//       console.log(animal.sound);
//     }
//   ]
// }

function App() {
  return (
    <>
      <Car />
    </>
  )
}

export default App
