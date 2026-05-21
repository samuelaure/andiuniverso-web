import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={s.page}>
      <div style={s.bg}>
        <div style={{ ...s.orb, ...s.orb1 }} />
        <div style={{ ...s.orb, ...s.orb2 }} />
      </div>

      <motion.div
        style={s.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={s.number}>404</p>
        <h1 style={s.title}>Esta página no existe</h1>
        <p style={s.subtitle}>
          Quizás el enlace cambió, o simplemente las estrellas te trajeron aquí por error.
        </p>
        <div style={s.links}>
          <Link to="/" style={s.primaryBtn}>Ir al inicio</Link>
          <Link to="/astrologia" style={s.secondaryBtn}>Ver Astrología</Link>
          <Link to="/human-design" style={s.secondaryBtn}>Ver Diseño Humano</Link>
        </div>
      </motion.div>
    </div>
  );
};

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8f4e8',
    color: '#4c2b08',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 20px 80px',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(90px)',
  },
  orb1: {
    width: '300px',
    height: '300px',
    background: '#fce4ec',
    top: '-60px',
    right: '-60px',
    opacity: 0.5,
  },
  orb2: {
    width: '240px',
    height: '240px',
    background: '#e1a23944',
    bottom: '40px',
    left: '-40px',
    opacity: 0.4,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '480px',
  },
  number: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '6rem',
    fontWeight: 800,
    color: '#802b48',
    opacity: 0.15,
    lineHeight: 1,
    marginBottom: '8px',
  },
  title: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
    color: '#5d2b38',
    fontWeight: 800,
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1.05rem',
    lineHeight: 1.65,
    opacity: 0.7,
    marginBottom: '40px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  primaryBtn: {
    display: 'inline-block',
    background: 'linear-gradient(160deg, #952f52 0%, #5d2b38 100%)',
    color: '#fff',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 800,
    fontSize: '1rem',
    padding: '14px 40px',
    borderRadius: '999px',
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(93,43,56,0.25)',
  },
  secondaryBtn: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(128,43,72,0.2)',
    color: '#802b48',
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '12px 32px',
    borderRadius: '999px',
    textDecoration: 'none',
  },
};

export default NotFoundPage;
