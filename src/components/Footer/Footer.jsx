import styles from "./Footer.module.css";

const Footer = ({ year }) => {
    return (
        <footer>
            <p>Coppyright &copy; Group 4 { year } </p>
        </footer>
    )
}

export default Footer;