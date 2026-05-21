import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Users, Sparkles } from 'lucide-react';

const STRIPE_URL = 'https://buy.stripe.com/dRmdR85ip6EbatnfoHak007';

const HDMaternidadCursoPage: React.FC = () => {
  return (
    <div style={s.page}>
      <div style={s.bg}>
        <div style={{ ...s.orb, ...s.orb1 }} />
        <div style={{ ...s.orb, ...s.orb2 }} />
      </div>

      <div style={s.container}>
        {/* Hero */}
        <motion.header
          style={s.hero}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span style={s.badge}>✦ Video Curso</span>
          <h1 style={s.title}>
            Deja de luchar<br />
            <span style={s.accent}>contra quien es tu hijo.</span>
          </h1>
          <p style={s.subtitle}>
            El Diseño Humano te da el manual de usuario que no venía en el parto — sin experiencia previa, sin tecnicismos.
          </p>
        </motion.header>

        {/* Emotional hook */}
        <motion.div
          style={s.hookCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p style={s.hookText}>
            ¿Sientes que tú y tu hijo funcionáis de maneras completamente opuestas?
            ¿Que lo que te funciona a ti a él lo desborda, o viceversa?
          </p>
          <p style={s.hookText}>
            No es que algo esté mal. Es que cada persona tiene una estrategia energética distinta —
            y cuando la conoces, la crianza deja de ser una batalla constante.
          </p>
        </motion.div>

        {/* What you'll learn */}
        <motion.section
          style={s.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <h2 style={s.sectionTitle}>Lo que vas a aprender</h2>
          <div style={s.pillarsGrid}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                style={s.pillarCard}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div style={{ ...s.pillarIcon, backgroundColor: p.color }}>
                  <p.icon size={20} color="white" />
                </div>
                <div>
                  <p style={s.pillarTitle}>{p.title}</p>
                  <p style={s.pillarDesc}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Zero experience needed */}
        <motion.div
          style={s.noteBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span style={s.noteEmoji}>🌱</span>
          <p style={s.noteText}>
            No necesitas saber nada de Diseño Humano. Todo se explica desde cero, con ejemplos reales de crianza y lenguaje directo.
          </p>
        </motion.div>

        {/* Price + CTA */}
        <motion.div
          style={s.priceBlock}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p style={s.priceLabel}>Acceso inmediato</p>
          <p style={s.price}>€15</p>
          <a href={STRIPE_URL} style={s.ctaButton}>
            Quiero el curso →
          </a>
          <p style={s.ctaNote}>Pago único · Acceso instantáneo</p>
        </motion.div>
      </div>
    </div>
  );
};

const pillars = [
  {
    icon: Zap,
    color: '#4c2b08',
    title: 'Conoce el tipo energético de tu hijo',
    desc: 'Cómo recarga energía, cómo toma decisiones y qué necesita para no llegar al límite.',
  },
  {
    icon: Heart,
    color: '#802b48',
    title: 'Entiende el tuyo',
    desc: 'Tu tipo, tu estrategia y tu autoridad como madre — para criar desde tu naturaleza, no contra ella.',
  },
  {
    icon: Users,
    color: '#a0522d',
    title: 'Gestiona las dinámicas en casa',
    desc: 'Por qué ciertos intercambios generan fricción y cómo reducirla sin que nadie tenga que cambiar quién es.',
  },
  {
    icon: Sparkles,
    color: '#5d2b38',
    title: 'Aplícalo desde hoy',
    desc: 'Herramientas concretas para leer cualquier carta de Diseño Humano y empezar a usarla de inmediato.',
  },
];

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f8f4e8',
    color: '#4c2b08',
    fontFamily: "'Inter', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '120px',
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
    background: '#f3e5d0',
    top: '-80px',
    right: '-60px',
    opacity: 0.6,
  },
  orb2: {
    width: '260px',
    height: '260px',
    background: '#4c2b0833',
    bottom: '60px',
    left: '-60px',
    opacity: 0.35,
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
    backgroundColor: '#4c2b0818',
    color: '#4c2b08',
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
    color: '#4c2b08',
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
    boxShadow: '0 8px 24px rgba(76,43,8,0.07)',
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
    color: '#4c2b08',
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
    color: '#4c2b08',
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
    color: '#4c2b08',
    lineHeight: 1,
  },
  ctaButton: {
    display: 'inline-block',
    background: 'linear-gradient(160deg, #6b3a0f 0%, #4c2b08 100%)',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 800,
    fontFamily: "'Outfit', sans-serif",
    padding: '18px 52px',
    borderRadius: '999px',
    textDecoration: 'none',
    boxShadow: '0 12px 30px rgba(76,43,8,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  ctaNote: {
    fontSize: '0.8rem',
    opacity: 0.5,
  },
};

export default HDMaternidadCursoPage;
