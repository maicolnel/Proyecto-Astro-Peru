import { useState, useEffect } from 'react';

const base = import.meta.env.BASE_URL || '/';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname.toLowerCase());
      const checkMobile = () => setIsMobile(window.innerWidth < 900);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Solo para el submenú de "Descubre Perú"
  const toggleDropdown = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setDropdownOpen(open => !open);
    }
  };
  const closeDropdown = () => setDropdownOpen(false);

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
          <div className={`nav-dropdown${isDropdownOpen ? ' open' : ''}`}>
            <span
              className="nav-link-dropdown-toggle"
              onClick={toggleDropdown}
              tabIndex={0}
              onMouseEnter={() => !isMobile && setDropdownOpen(true)}
              onMouseLeave={() => !isMobile && setDropdownOpen(false)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Descubre Perú ▼
            </span>
            {(isDropdownOpen || !isMobile) && (
              <div
                className="dropdown-content"
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setDropdownOpen(false)}
              >
                <a href={`${base}cultura`} className={getLinkClass(`${base}cultura`)} onClick={() => { closeMenu(); closeDropdown(); }}>Cultura</a>
                <a href={`${base}gastronomia`} className={getLinkClass(`${base}gastronomia`)} onClick={() => { closeMenu(); closeDropdown(); }}>Gastronomía</a>
                <a href={`${base}Naturaleza`} className={getLinkClass(`${base}Naturaleza`)} onClick={() => { closeMenu(); closeDropdown(); }}>Naturaleza</a>
                <a href={`${base}Turismo`} className={getLinkClass(`${base}Turismo`)} onClick={() => { closeMenu(); closeDropdown(); }}>Turismo</a>
                <a href={`${base}Musica`} className={getLinkClass(`${base}Musica`)} onClick={() => { closeMenu(); closeDropdown(); }}>Música</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
