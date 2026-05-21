import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, Baby } from 'lucide-react';

const STRIPE_URL = 'https://buy.stripe.com/dRmfZg9yFfaHbxrccvak006';

const MaternidadCursoPage: React.FC = () => {
  return (
    <div style={styles.page}>
      <div style={styles.bg}>
        <div style={{ ...styles.orb, ...styles.orb1 }} />
        <div style={{ ...styles.orb, ...styles.orb2 }} />
      </div>

      <div style={styles.container}>
        {/* Hero */}
        <motion.header
          style={styles.hero}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span style={styles.badge}>✦ Video Curso</span>
          <h1 style={styles.title}>
            Lee la carta de tu hijo<br />
            <span style={styles.accent}>y deja de adivinar.</span>
          </h1>
          <p style={styles.subtitle}>
            La astrología como herramienta real de crianza — sin experiencia previa, sin jerga complicada.
          </p>
        </motion.header>

        {/* Emotional hook */}
        <motion.div
          style={styles.hookCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p style={styles.hookText}>
            ¿Hay momentos en que sientes que no entiendes a tu hijo, aunque lo amas con todo?<br />
            ¿O que tu forma de ser mamá no encaja del todo con quien eres tú?
          </p>
          <p style={styles.hookText}>
            La carta astral no es magia. Es un mapa de cómo cada persona procesa el mundo —
            y cuando aprendes a leerla, muchas cosas dejan de ser un misterio.
          </p>
        </motion.div>

        {/* What you'll get */}
        <motion.section
          style={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <h2 style={styles.sectionTitle}>Lo que vas a aprender</h2>
          <div style={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                style={styles.pillarCard}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div style={{ ...styles.pillarIcon, backgroundColor: p.color }}>
                  <p.icon size={20} color="white" />
                </div>
                <div>
                  <p style={styles.pillarTitle}>{p.title}</p>
                  <p style={styles.pillarDesc}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Zero experience needed */}
        <motion.div
          style={styles.noteBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span style={styles.noteEmoji}>🌱</span>
          <p style={styles.noteText}>
            No necesitas saber nada de astrología. Todo se explica desde cero, de forma clara y directamente aplicable a tu día a día.
          </p>
        </motion.div>

        {/* Price + CTA */}
        <motion.div
          style={styles.priceBlock}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p style={styles.priceLabel}>Acceso inmediato</p>
          <p style={styles.price}>€15</p>
          <a href={STRIPE_URL} style={styles.ctaButton}>
            Quiero el curso →
          </a>
          <p style={styles.ctaNote}>Pago único · Acceso instantáneo</p>
        </motion.div>
      </div>
    </div>
  );
};

const pillars = [
  {
    icon: Star,
    color: '#802b48',
    title: 'Entiende la energía de tu hijo',
    desc: 'Qué necesita para sentirse seguro, cómo procesa sus emociones y por qué reacciona como reacciona.',
  },
  {
    icon: Heart,
    color: '#e1a239',
    title: 'Reconoce tu propio mapa',
    desc: 'Cómo tu signo solar y lunar influyen en tu estilo de crianza — y cómo hacer las paces con eso.',
  },
  {
    icon: Baby,
    color: '#a0522d',
    title: 'Crea más armonía en casa',
    desc: 'Estrategias concretas para conectar mejor con cada miembro de la familia según su carta.',
  },
  {
    icon: Sparkles,
    color: '#5d2b38',
    title: 'Empieza a leer cartas hoy',
    desc: 'Los elementos esenciales que necesitas para interpretar cualquier carta, sin cursos de años.',
  },
];

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8f4e8',
    color: '#4c2b08',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '48px',
    paddingBottom: '80px',
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
    width: '340px',
    height: '340px',
    background: '#fce4ec',
    top: '-80px',
    right: '-60px',
    opacity: 0.5,
  },
  orb2: {
    width: '260px',
    height: '260px',
    background: '#e1a23944',
    bottom: '60px',
    left: '-60px',
    opacity: 0.45,
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '580px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '36px',
  },
  hero: {
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#802b4818',
    color: '#802b48',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    padding: '6px 16px',
    borderRadius: '999px',
    marginBottom: '18px',
  },
  title: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    color: '#5d2b38',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '16px',
  },
  accent: {
    color: '#e1a239',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.8,
    lineHeight: 1.6,
    maxWidth: '420px',
    margin: '0 auto',
  },
  hookCard: {
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.7)',
    borderRadius: '20px',
    padding: '28px 32px',
    width: '100%',
    boxShadow: '0 8px 24px rgba(128,43,72,0.07)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '14px',
  },
  hookText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    opacity: 0.85,
  },
  section: {
    width: '100%',
  },
  sectionTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.4rem',
    color: '#802b48',
    fontWeight: 700,
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  pillarsGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '14px',
  },
  pillarCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    background: 'rgba(255,255,255,0.55)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.65)',
    borderRadius: '16px',
    padding: '18px 20px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
  },
  pillarIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
  },
  pillarTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    color: '#5d2b38',
    marginBottom: '4px',
  },
  pillarDesc: {
    fontSize: '0.875rem',
    opacity: 0.75,
    lineHeight: 1.5,
  },
  noteBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    background: '#e1a23922',
    border: '1px solid #e1a23955',
    borderRadius: '16px',
    padding: '20px 24px',
    width: '100%',
  },
  noteEmoji: {
    fontSize: '1.5rem',
    lineHeight: 1,
    flexShrink: 0,
  },
  noteText: {
    fontSize: '0.95rem',
    lineHeight: 1.65,
    opacity: 0.9,
  },
  priceBlock: {
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '12px',
  },
  priceLabel: {
    fontSize: '0.9rem',
    opacity: 0.6,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
    fontWeight: 600,
  },
  price: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '3.2rem',
    fontWeight: 800,
    color: '#802b48',
    lineHeight: 1,
  },
  ctaButton: {
    display: 'inline-block',
    background: 'linear-gradient(160deg, #952f52 0%, #5d2b38 100%)',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 800,
    fontFamily: "'Outfit', sans-serif",
    padding: '18px 52px',
    borderRadius: '999px',
    textDecoration: 'none',
    boxShadow: '0 12px 30px rgba(93,43,56,0.35)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  ctaNote: {
    fontSize: '0.8rem',
    opacity: 0.5,
  },
};

export default MaternidadCursoPage;
