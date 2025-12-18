import './header.css';

const Header = () => {
    const logoPath = '/images/logo.png';
    return (
        <header className="app-header">
            <div className="header-content">
                <h1 className="header-title">Empowered Women Empower Women</h1>
                <img
                    src={logoPath}
                    alt="Logo flor de Loto y siluetas rostros"
                    className="header-logo"
                />
            </div>
        </header>
    );
};

export default Header;