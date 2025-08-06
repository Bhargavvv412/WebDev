import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    }

    );
  }

  return (
    <>
      <h1>Hello {fullName.fName} {fullName.lName}</h1><br />
      <input
        type="text"
        placeholder="fName"
        name="fName"
        value={fullName.fName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="lName"
        name="lName"
        value={fullName.lName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </>
  )
}

export default App
