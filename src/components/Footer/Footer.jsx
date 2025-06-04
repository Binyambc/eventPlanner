import "./Footer.css";
const Footer = ({ year }) => {
    return (
        <footer>
            <p>Copyright &copy; cp {year}</p>
        </footer>
    );
};

export default Footer;