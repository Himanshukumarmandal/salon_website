import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') { window.location.href = '/#' + id; return; }
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">H S <span>SALON</span></Link>
        <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X color="var(--primary-color)" /> : <Menu color="var(--primary-color)" />}
        </div>
        <ul className={mobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          {['home', 'about', 'services', 'gallery', 'reviews', 'contact'].map(sec => (
             <li className="nav-item" key={sec}>
               <button className="nav-link" onClick={() => scrollToSection(sec)}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</button>
             </li>
          ))}
          {location.pathname !== '/admin' && (
             <li className="nav-item"><button className="btn nav-btn" onClick={() => scrollToSection('contact')}>Book Now</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
