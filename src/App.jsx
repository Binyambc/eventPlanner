import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AddEventForm from "./pages/AddEventForm/AddEventForm";
import Root from "./pages/Root";
import EventList from "./pages/Events/EventList/EventList";
import About from "./pages/About/About";
import "./App.css";
import useAxios from "./hooks/useAxios";

function App() {
  const [eventData, setEventData] = useState([]);
  const eventApi = "http://localhost:3006/events";
  const { get, patch, loading, error } = useAxios();
  const { remove, error: deleteError } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      let data = await get(eventApi);
      setEventData(data);
    };
    fetchData();
  }, []);

  const handleInfoChange = async (id, newInfo) => {
    const updatedInfo = await patch(eventApi, id, newInfo);
    setEventData((prev) =>
      prev.map((event) => (event.id === id ? updatedInfo : event))
    );
  };

  const deleteEvent = async (id) => {
    await remove(eventApi, id);
    setEventData((prev) => prev.filter((event) => event.id !== id));
  };

  const addEventHandler = (newEvent) => {
    setEventData((prevData) => [...prevData, newEvent]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/about" element={<About />} />
            <Route
              index
              element={
                <EventList
                  eventData={eventData}
                  handleInfoChange={handleInfoChange}
                  error={error}
                  loading={loading}
                  deleteEvent={deleteEvent}
                  deleteError={deleteError}
                />
              }
            />
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
