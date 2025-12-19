import { Link } from 'react-router';
import './header.css';

const Header = () => {
    const logoPath = '/images/logo.png';
    return (
        <header className="app-header">
            <div className="header-content">
                <h1 className="header-title">Empowered Women Empower Women</h1>
                <Link to="/" className="header-logo-link">
                    <img
                        src={logoPath}
                        alt="Logo flor de Loto y siluetas rostros"
                        className="header-logo"
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;