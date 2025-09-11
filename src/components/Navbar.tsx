import { useState, useEffect } from 'react';

const base = import.meta.env.BASE_URL || '/';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getLinkClass = (path: string) => {
    return activePath === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href={base} className="navbar-logo" onClick={closeMenu}>
          Perú en B/quilla 🇵🇪
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href={`${base}`} className={getLinkClass(`${base}`)} onClick={closeMenu}>Inicio</a>
          <a href={`${base}quienes-somos`} className={getLinkClass(`${base}quienes-somos`)} onClick={closeMenu}>Quiénes Somos</a>
          <a href={`${base}universidades`} className={getLinkClass(`${base}universidades`)} onClick={closeMenu}>Universidades</a>
          <div className="nav-dropdown">
            <span className="nav-link-dropdown-toggle">Descubre Perú ▼</span>
            <div className="dropdown-content">
              <a href={`${base}cultura`} className={getLinkClass(`${base}cultura`)} onClick={closeMenu}>Cultura</a>
              <a href={`${base}gastronomia`} className={getLinkClass(`${base}gastronomia`)} onClick={closeMenu}>Gastronomía</a>
              <a href={`${base}Naturaleza`} className={getLinkClass(`${base}Naturaleza`)} onClick={closeMenu}>Naturaleza</a>
              <a href={`${base}Turismo`} className={getLinkClass(`${base}Turismo`)} onClick={closeMenu}>Turismo</a>
              <a href={`${base}Musica`} className={getLinkClass(`${base}Musica`)} onClick={closeMenu}>Música</a>
            </div>
          </div>
          <a href={`${base}contacto`} className={getLinkClass(`${base}contacto`)} onClick={closeMenu}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
