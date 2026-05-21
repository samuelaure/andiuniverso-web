import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Mail } from 'lucide-react';

const HDMaternidadGraciasPage: React.FC = () => {
  return (
    <div style={s.page}>
      <div style={s.bg}>
        <div style={{ ...s.orb, ...s.orb1 }} />
        <div style={{ ...s.orb, ...s.orb2 }} />
      </div>

      <div style={s.container}>

        {/* Confirmation pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={s.confirmedPill}
        >
          <CheckCircle size={16} color="#2e7d32" />
          <span>Pago confirmado</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          style={s.hero}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h1 style={s.title}>
            Gracias por confiar.<br />
            <span style={s.accent}>Hay una sorpresa para ti.</span>
          </h1>
          <p style={s.subtitle}>
            Tu pago de €15 fue recibido. Y lo que recibirás a cambio vale mucho más de lo que esperabas.
          </p>
        </motion.div>

        {/* The upgrade card */}
        <motion.div
          style={s.upgradeCard}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div style={s.upgradeHeader}>
            <span style={s.upgradeEmoji}>🎁</span>
            <div>
              <p style={s.upgradeEyebrow}>Lo que recibirás</p>
              <h2 style={s.upgradeTitle}>Una sesión personalizada de 60 min</h2>
            </div>
          </div>

          <p style={s.upgradeBody}>
            El curso está en proceso de creación — lo estoy construyendo con cuidado para que sea
            exactamente lo que necesitas. Mientras tanto, quiero darte algo mejor:
            una <strong>sesión personal conmigo</strong>, enfocada en tu Diseño Humano y el de tu hijo.
          </p>

          <div style={s.valueRow}>
            <div style={s.valuePaid}>
              <span style={s.valuePaidLabel}>Pagaste</span>
              <span style={s.valuePaidPrice}>€15</span>
            </div>
            <div style={s.valueDivider}>→</div>
            <div style={s.valueReceive}>
              <span style={s.valueReceiveLabel}>Recibirás</span>
              <span style={s.valueReceivePrice}>Sesión €90</span>
            </div>
          </div>

          <div style={s.promiseNote}>
            <Mail size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p>Además, en cuanto el curso esté listo recibirás acceso completo sin pagar nada extra.</p>
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
          style={s.calendarSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div style={s.calendarHeader}>
            <Calendar size={20} color="#4c2b08" />
            <div>
              <h3 style={s.calendarTitle}>Agenda tu sesión</h3>
              <p style={s.calendarSub}>Elige el horario que mejor te quede</p>
            </div>
          </div>
          <div style={s.iframeWrapper}>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rKl_vO3zwxnSH1btnEdb-T0dlQ1Wvrw-qHN1SCWGb2FdrmgvcaGiUU0R5lihR34zDHWqH7WgH?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Agendar sesión de Diseño Humano para Maternidad"
            />
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          style={s.footerNote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          ¿Tienes dudas? Escríbeme directamente — estoy aquí.
        </motion.p>

      </div>
    </div>
  );
};

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
    width: '320px',
    height: '320px',
    background: '#f3e5d0',
    top: '-80px',
    right: '-60px',
    opacity: 0.6,
  },
  orb2: {
    width: '260px',
    height: '260px',
    background: '#4c2b0833',
    bottom: '80px',
    left: '-60px',
    opacity: 0.35,
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  },
  confirmedPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    fontSize: '0.85rem',
    fontWeight: 700,
    padding: '8px 18px',
    borderRadius: '999px',
    letterSpacing: '0.03em',
  },
  hero: {
    textAlign: 'center',
  },
  title: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(1.9rem, 5vw, 2.6rem)',
    color: '#4c2b08',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '14px',
  },
  accent: {
    color: '#e1a239',
  },
  subtitle: {
    fontSize: '1.05rem',
    lineHeight: 1.65,
    opacity: 0.8,
    maxWidth: '440px',
    margin: '0 auto',
  },
  upgradeCard: {
    background: 'rgba(255,255,255,0.65)',
    backdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,0.75)',
    borderRadius: '24px',
    padding: '32px',
    width: '100%',
    boxShadow: '0 12px 32px rgba(76,43,8,0.09)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  upgradeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  upgradeEmoji: {
    fontSize: '2.2rem',
    lineHeight: 1,
    flexShrink: 0,
  },
  upgradeEyebrow: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: '#4c2b08',
    opacity: 0.6,
    marginBottom: '4px',
  },
  upgradeTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#4c2b08',
    lineHeight: 1.2,
  },
  upgradeBody: {
    fontSize: '1rem',
    lineHeight: 1.7,
    opacity: 0.85,
  },
  valueRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: 'rgba(76,43,8,0.05)',
    borderRadius: '14px',
    padding: '18px 24px',
  },
  valuePaid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  valuePaidLabel: {
    fontSize: '0.75rem',
    opacity: 0.55,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
  valuePaidPrice: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#4c2b08',
    opacity: 0.5,
    textDecoration: 'line-through',
  },
  valueDivider: {
    fontSize: '1.4rem',
    color: '#e1a239',
    fontWeight: 700,
  },
  valueReceive: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  valueReceiveLabel: {
    fontSize: '0.75rem',
    opacity: 0.6,
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    color: '#4c2b08',
  },
  valueReceivePrice: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#4c2b08',
  },
  promiseNote: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    background: '#e1a23920',
    border: '1px solid #e1a23950',
    borderRadius: '12px',
    padding: '14px 18px',
    fontSize: '0.9rem',
    lineHeight: 1.55,
    color: '#4c2b08',
    opacity: 0.85,
  },
  calendarSection: {
    width: '100%',
    background: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 16px 40px rgba(76,43,8,0.08)',
    border: '1px solid rgba(76,43,8,0.05)',
  },
  calendarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '24px 28px',
    borderBottom: '1px solid rgba(76,43,8,0.06)',
    background: '#fafaf7',
  },
  calendarTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.15rem',
    color: '#4c2b08',
    fontWeight: 700,
    marginBottom: '2px',
  },
  calendarSub: {
    fontSize: '0.85rem',
    opacity: 0.6,
  },
  iframeWrapper: {
    padding: '16px',
    minHeight: '600px',
  },
  footerNote: {
    fontSize: '0.875rem',
    opacity: 0.5,
    textAlign: 'center' as const,
  },
};

export default HDMaternidadGraciasPage;
