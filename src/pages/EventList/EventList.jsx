import EventCard from "../../components/EventCard/EventCard";
import styles from "./EventList.module.css";
import { useState } from "react";
const EventList = ({
  eventData,
  categories,
  error,
  loading,
  handleInfoChange,
  deleteEvent,
  deleteError,
  toggleFavorite,
  onAddCat,
  message,
  handleMessage,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [catFilter, setCatFilter] = useState("all categories");
  const [favFilter, setFavFilter] = useState(false);

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredEventData = eventData.filter((event) => {
    const search = searchValue.toLowerCase();
    const matchedSearch =
      event.title.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search) ||
      event.description.toLowerCase().includes(search);
    const matchedFavorite = favFilter ? event.isFavorite : true;
    const matchedCategory =
      catFilter === "all categories" ? true : event.category === catFilter;
    return matchedSearch && matchedFavorite && matchedCategory;
  });
  if (loading) {
    return (
      <div className={styles.loading}>
        <h1>Loading......</h1>
        <h2>It might take a little while</h2>
      </div>
    );
  }
  if (error) return <h1 className={styles.error}>Error: {error.message}</h1>;

  return (
    <>
      <section className={styles.heroSection}>
        <video autoPlay muted loop playsInline className={styles.heroVideo}>
          <source src="/videos/yard.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}></div>

        <div className={`${styles.overlayContent}`}>
          <div className={styles.overlayBackground}>
            <h1>Discover Events</h1>

            {message && <p className={styles.success}>{message}</p>}

            <div className={styles.filterContainer}>
              <input
                className={styles.search}
                type="text"
                placeholder="🔍 Search..."
                value={searchValue}
                onChange={searchHandle}
              />

              <select
                value={catFilter}
                className={styles.catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
              >
                <option value="all categories">all categories</option>
                {categories.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <div className={styles.favFilter}>
                <input
                  type="checkbox"
                  id="favorite"
                  checked={favFilter}
                  onChange={() => setFavFilter((prev) => !prev)}
                />
                <label htmlFor="favorite">Favorites</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1>EventList</h1>
      <div className={styles.listContainer}>
        {filteredEventData.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            categories={categories}
            handleInfoChange={handleInfoChange}
            deleteEvent={deleteEvent}
            deleteError={deleteError}
            toggleFavorite={toggleFavorite}
            handleMessage={handleMessage}
            onAddCat={onAddCat}
          />
        ))}
      </div>
    </>
  );
};

export default EventList;
