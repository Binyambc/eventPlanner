import { NavLink, Link } from "react-router";
import '.Header.modules.css';


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
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/add">Add new event</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
