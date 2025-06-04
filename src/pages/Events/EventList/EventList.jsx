import EventCard from "../../../components/EventCard/EventCard";
import styles from "./EventList.module.css";

const EventList = ({
  eventData,
  handleInfoChange,
  error,
  loading,
  deleteEvent,
  deleteError,
}) => {
  if (loading) {
    return (
      <div className={styles.loading}>
        <h1>Loading......</h1>
      </div>
    );
  }
  if (error) return <h1 className={styles.error}>Error: {error.message}</h1>;

  return (
    <>
      <h1>EventList</h1>
      <div>
        {eventData.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            handleInfoChange={handleInfoChange}
            deleteEvent={deleteEvent}
            deleteError={deleteError}
          />
        ))}
      </div>
    </>
  );
};

export default EventList;
