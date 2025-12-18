import './footer.css';

const Footer = () => {
    const footerText= "© Fem Coders 2025";
    return (
        <footer className="app-footer">
            <p className="footer-text">{footerText}</p>
        </footer>
    );
};

export default Footer;