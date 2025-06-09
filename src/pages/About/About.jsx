import "./About.css";

const About = () => {
    return (
        <div className="about-page">
            <h1>About Event Planner</h1>

            <section className="about-section">
                <h2>What is Event Planner?</h2>
                <p>
                    Event Planner is a modern web application designed to help users organize and manage their events efficiently.
                    Whether you're planning a small gathering or a large conference, our application provides all the tools you need
                    to create, manage, and track your events in one place.
                </p>
            </section>

            <section className="about-section">
                <h2>Key Features</h2>
                <ul>
                    <li>📅 Interactive Calendar View - Visualize all your events in a monthly calendar format</li>
                    <li>🗺️ Map Integration - View event locations on an interactive map</li>
                    <li>📝 Event Creation - Easily add new events with detailed information</li>
                    <li>📋 Event List - Get a comprehensive list view of all your events</li>
                    <li>🔍 Search and Filter - Quickly find specific events using our search functionality</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>How to Use</h2>
                <ol>
                    <li>Navigate to the Calendar or List view to see your events</li>
                    <li>Use the "Add Event" button to create new events</li>
                    <li>Fill in event details including title, date, time, and location</li>
                    <li>View your events on the map to see their geographical distribution</li>
                    <li>Manage and update your events as needed</li>
                </ol>
            </section>

            <section className="about-section">
                <h2>Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Developers</h3>
                        <p>Binyam</p>
                        <p>Hoa</p>
                        <p>Abdul</p>
                        <p>Makar</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </section>

            <section className="about-section">
                <h2>Contact</h2>
                <p>
                    Have questions or suggestions? We'd love to hear from you!
                    Please reach out to us through our contact form or email.
                </p>
            </section>
        </div>
    );
};

export default About;