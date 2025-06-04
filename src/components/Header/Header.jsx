import { NavLink, Link } from "react-router";
import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <img src="./public/images/logo_favicon.png" alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Events</NavLink>
          <NavLink to="/add-event">Add new event</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
