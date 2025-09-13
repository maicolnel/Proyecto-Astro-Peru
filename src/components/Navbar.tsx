import { useState, useEffect } from 'react';

const base = import.meta.env.BASE_URL || '/';

const Navbar = () => {
  // Inicia desde sessionStorage si existe
  const [isMenuOpen, setMenuOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('dropdownOpen') === 'true';
  });
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname.toLowerCase());
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const next = !prev;
      sessionStorage.setItem('dropdownOpen', String(next));
      return next;
    });
  };
  const closeMenu = () => {
    setMenuOpen(false);
    sessionStorage.setItem('dropdownOpen', 'false');
  };

  const getLinkClass = (path: string) =>
    activePath === path.toLowerCase() ? 'nav-link active' : 'nav-link';

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
          <a href={base} className={getLinkClass(base)} onClick={closeMenu}>Inicio</a>
          <a href={`${base}quienes-somos`} className={getLinkClass(`${base}quienes-somos`)} onClick={closeMenu}>Quiénes Somos</a>
          <a href={`${base}universidades`} className={getLinkClass(`${base}universidades`)} onClick={closeMenu}>Universidades</a>
          <div className="nav-dropdown">
            <span className="nav-link-dropdown-toggle" onClick={toggleMenu}>Descubre Perú ▼</span>
            {isMenuOpen && (
              <div className="dropdown-content">
                <a href={`${base}cultura`} className={getLinkClass(`${base}Cultura`)} onClick={closeMenu}>Cultura</a>
                <a href={`${base}gastronomia`} className={getLinkClass(`${base}Gastronomia`)} onClick={closeMenu}>Gastronomía</a>
                <a href={`${base}Naturaleza`} className={getLinkClass(`${base}Naturaleza`)} onClick={closeMenu}>Naturaleza</a>
                <a href={`${base}Turismo`} className={getLinkClass(`${base}Turismo`)} onClick={closeMenu}>Turismo</a>
                <a href={`${base}Musica`} className={getLinkClass(`${base}Musica`)} onClick={closeMenu}>Música</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
