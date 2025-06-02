import EventCard from "../../../components/EventCard/EventCard";
import "./EventList.css";
const EventList = ({ eventData }) => {
  return (
    <>
      <h1>EventList</h1>
      <div>
        {eventData.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </>
  );
};

export default EventList;
