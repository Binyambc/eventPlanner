import { useState } from 'react'
import AddEventForm from './pages/addEventForm/AddEventForm'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='page-container'>
        <Header name="abdul" />

        <main>
          <p>This is the main content of the app.</p>

        </main>

        <Footer year="2025" />
      </div>

    </>
  )
}

export default App
