import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    // Esto se asegura de que el código solo se ejecute en el navegador
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  // CORRECCIÓN: Se usan las rutas web correctas (ej: '/cultura')
  const getLinkClass = (path: string) => {
    return activePath === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          Perú en B/quilla 🇵🇪
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className={getLinkClass('/')} onClick={closeMenu}>Inicio</a>
          <a href="/quienes-somos" className={getLinkClass('/quienes-somos')} onClick={closeMenu}>Quiénes Somos</a>
          <a href="/universidades" className={getLinkClass('/universidades')} onClick={closeMenu}>Universidades</a>
          <div className="nav-dropdown">
            <span className="nav-link-dropdown-toggle">Descubre Perú ▼</span>
            <div className="dropdown-content">
              <a href="/cultura" className={getLinkClass('/cultura')} onClick={closeMenu}>Cultura</a>
              <a href="/gastronomia" className={getLinkClass('/gastronomia')} onClick={closeMenu}>Gastronomía</a>
              <a href="/Naturaleza" className={getLinkClass('/Naturaleza')} onClick={closeMenu}>Naturaleza</a>
              <a href="/Turismo" className={getLinkClass('/Turismo')} onClick={closeMenu}>Turismo</a>
              <a href="/Musica" className={getLinkClass('/Musica')} onClick={closeMenu}>Música</a>
            </div>
          </div>
          <a href="/contacto" className={getLinkClass('/contacto')} onClick={closeMenu}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;