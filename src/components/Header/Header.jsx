import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "./Asset 2.png"; // 

const Header = ({ name }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>

            </div>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/add">Add New Event</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;