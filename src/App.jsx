import { useState } from 'react'
import AddEventForm from './pages/addEventForm/AddEventForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddEventForm/>
    </>
  )
}

export default App
