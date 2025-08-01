import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card(props) {
  return (<div>
    <h2>{props.name}</h2>
    <img src={props.img} alt="sample img" />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>)
}

function App() {

  return (
    <>
      <Card
        name="Bhargav"
        img="https://picsum.photos/id/237/200/300"
        tel="+91 1234567890"
        email="12345678@gmail.com"
      />
    </>
  )
}

export default App
