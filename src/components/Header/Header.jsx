import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="./images/logo_synergy.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><NavLink to="/about" className={styles.navLink}>About</NavLink></li>
          <li><NavLink to="/" className={styles.navLink}>Events</NavLink></li>
          <li><NavLink to="/add-event" className={styles.navLink}>Add new event</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
