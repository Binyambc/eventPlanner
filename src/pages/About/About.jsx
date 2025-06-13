import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About Event Planner</h1>

      <section className={styles.aboutSection}>
        <h2>What is Event Planner?</h2>
        <p>
          Event Planner is a modern web application designed to help users
          organize and manage their events efficiently. Whether you're planning
          a small gathering or a large conference, our application provides all
          the tools you need to create, manage, and track your events in one
          place.
        </p>
      </section>

      <section className={styles.aboutSection}>
        <h2>Key Features</h2>
        <p><b> 📅 Interactive Calendar View </b>- Visualize all your events in a monthly calendar format</p>
        <p><b>🗺️ Map Integration </b> - View event locations on an interactive map </p>
        <p><b>📝 Event Creation </b> - Easily add new events with detailed information </p>
        <p><b>📋 Event List </b> - Get a comprehensive list view of all your events </p>
        <p><b>🔍 Search and Filter </b> - Quickly find specific events using our search functionality </p>
      </section>

      <section className={styles.aboutSection}>
        <h2>How to Use</h2>
        <p>Navigate to the Calendar or List view to see your events</p>
        <p>Use the "Add Event" button to create new events</p>
        <p>Fill in event details including title, date, time, and location</p>
        <p>View your events on the map to see their geographical distribution</p>
        <p>Manage and update your events as needed</p>
      </section>

      <section className={styles.aboutSection}>
        <h2>Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <h3>Developers</h3>
            <p>
              <a href="https://github.com/Binyambc" target="_blank" rel="noopener noreferrer"><strong>Binyam</strong></a>: Worked on Style guide/theme, divided task amongst group, created the repositories and folder structure, created AddEvent, App routing and connections, styling(module.css/dark and light mode), held daily meetings.
            </p>
            <p>
              <a href="https://github.com/Hoa28686" target="_blank" rel="noopener noreferrer"><strong>Hoa</strong></a>: EventCard, EventList, Calendar, Weather, Map
              view, event emoji and color, and some styling
            </p>
            <p>
              <a href="https://github.com/Abdul734734" target="_blank" rel="noopener noreferrer"><strong>Abdul</strong></a>: Worked on about page, styling (module.css), worked on header and footer, write readme
            </p>
            <p>
              <a href="https://github.com/makarpatapau" target="_blank" rel="noopener noreferrer"><strong>Makar</strong></a>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2>Contact</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Please
          reach out to us through our GitHub profiles.
        </p>
        <h2>GitHub Repos</h2>
        <p>
          <a href="https://github.com/Binyambc/eventPlanner.git"><strong>Frontend</strong></a>
        </p>
        <p>
          <a href="https://github.com/Binyambc/eventPlannerBackend.git"><strong>Backend</strong></a>
        </p>
      </section>
    </div>
  );
};

export default About;
