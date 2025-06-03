import { useState } from 'react'
import AddEventForm from './pages/AddEventForm1/AddEventForm1';
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
