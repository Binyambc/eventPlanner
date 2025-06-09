import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Menu, X } from "lucide-react";

const Header = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="./images/logo_synergy.png" alt="logo" />
        </Link>
      </div>

      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className={styles.navLink}>
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/map" className={styles.navLink}>
              Map
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-event" className={styles.navLink}>
              Add new event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
