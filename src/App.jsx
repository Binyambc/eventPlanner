import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEventForm from "../pages/AddEventForm/AddEventForm";
import Root from "./pages/Root";
import EventList from "./pages/events/EventList/EventList";
import About from "./pages/About/About";
import "./App.css";


function App() {
  const [eventData, setEventData] = useState([]);
  const addEventHandler = (newEvent) => {
    setEventData((prevData) => [...prevData, newEvent]);
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<About/>}/>
          <Route
            path="events"
            element={<EventList eventData={eventData} />}
          />  
          <Route 
            path="/add"
            element={<AddEventForm onAddEvent={addEventHandler}/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
