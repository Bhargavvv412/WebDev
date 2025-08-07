import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [contact, setContact] = React.useState({
    fName: "",
    lName: "",
    email: "",
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      if (name === "fname") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        }
      } else if (name === "lname") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        }
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        }
      }
    })
  }
  return (
    <>
      <div>
        <h1>Hello, {contact.fName} {contact.lName}</h1>
        <p>{contact.email}</p>
        <form>
          <input type="text" name='fname' placeholder='frist name' onChange={handleChange} />
          <input type="text" name='lname' placeholder='last name' onChange={handleChange} />
          <input type="text" name='email' placeholder='email' onChange={handleChange} />
          <input type="button" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
