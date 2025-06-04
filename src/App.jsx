import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AddEventForm from "./pages/AddEventForm/AddEventForm";
import Root from "./pages/Root";
import EventList from "./pages/Events/EventList/EventList";
import About from "./pages/About/About";
import "./App.css";

function App() {
  const [eventData, setEventData] = useState([]);
  const addEventHandler = (newEvent) => {
    setEventData((prevData) => [...prevData, newEvent]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/about" element={<About />} />
            <Route index element={<EventList eventData={eventData} />} />
            <Route
              path="/add-event"
              element={<AddEventForm onAddEvent={addEventHandler} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
