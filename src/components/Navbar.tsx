import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBooking } from '../hooks/useBooking';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/' || location.pathname === '/index.html') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={handleLogoClick}>
          <span className="logo-text">
            Andi<span className="text-accent">Universo</span>
          </span>
        </div>
        <div className="nav-links">
          <a href="#sobre-mi">Sobre Mí</a>
          <div className="nav-item-dropdown">
            <a href="#servicios" className="dropdown-trigger">Sesiones</a>
            <div className="dropdown-menu">
              <a href="/pergaminos">Pergaminos familiares</a>
              <a href="/astrologia/sesion">Astrología</a>
              <a href="/human-design/sesion">Diseño Humano</a>
            </div>
          </div>
          <a href="/vsl">Para MAMÁS</a>
          <a href="#faq">Preguntas frecuentes</a>
          <button onClick={openBooking} className="btn btn-primary nav-cta">
            Reservar
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 0;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          background: rgba(248, 244, 232, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 0;
          box-shadow: 0 4px 20px rgba(76, 43, 8, 0.05);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          cursor: pointer;
        }

        .logo-text {
          font-family: var(--font-header);
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .text-accent {
          color: var(--accent-color);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .nav-links a:not(.btn) {
          font-weight: 600;
          color: var(--text-color);
          position: relative;
        }

        .nav-links a:not(.btn)::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: var(--transition-smooth);
        }

        .nav-links a:not(.btn):hover::after {
          width: 100%;
        }

        /* Dropdown Styles */
        .nav-item-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          min-width: 200px;
          border-radius: 12px;
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(76, 43, 8, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .nav-item-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu a {
          padding: 12px 20px;
          font-size: 0.95rem;
          color: var(--text-color) !important;
          transition: background 0.2s ease;
        }

        .dropdown-menu a::after {
          display: none;
        }

        .dropdown-menu a:hover {
          background: var(--cream-pink);
          color: var(--primary-color) !important;
        }

        .nav-cta {
          padding: 8px 20px;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .nav-item-dropdown,
          .nav-links a:not(.btn) {
            display: none;
          }
          .nav-cta {
            padding: 10px 16px;
            font-size: 0.85rem;
          }
          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
