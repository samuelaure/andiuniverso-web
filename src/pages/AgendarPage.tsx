import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';

const AgendarPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="seguimiento-page">
      <Navbar />
      <main>
        <section className="seguimiento-hero">
          <div className="container">
            <AnimatedSection>
              <div className="hero-content text-center">
                <div className="badge-wrapper">
                  <span className="badge">
                    <Sparkles size={14} /> Exclusivo para Clientes
                  </span>
                </div>
                <h1 className="heading-lg">Tu Espacio de <span className="text-accent">Seguimiento</span></h1>
                <p className="description">
                  Bienvenida de nuevo. Este es tu acceso directo para agendar tus sesiones de seguimiento 
                  y continuar profundizando en tu proceso de autoconocimiento y diseño.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="calendar-section">
          <div className="container">
            <AnimatedSection delay={0.2}>
              <div className="calendar-card">
                <div className="calendar-header">
                  <div className="header-info">
                    <Calendar className="icon" size={24} />
                    <div>
                      <h3>Agenda tu Próxima Sesión</h3>
                      <p>Selecciona el horario que mejor te convenga</p>
                    </div>
                  </div>
                  <div className="header-badge">
                    <CheckCircle2 size={16} /> sesión confirmada
                  </div>
                </div>
                <div className="calendar-iframe-container">
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0rKl_vO3zwxnSH1btnEdb-T0dlQ1Wvrw-qHN1SCWGb2FdrmgvcaGiUU0R5lihR34zDHWqH7WgH?gv=true" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="700" 
                    frameBorder="0"
                    title="Calendario de Seguimiento"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="reminder-section">
          <div className="container">
            <AnimatedSection>
              <div className="reminder-grid">
                <div className="reminder-item">
                  <h4>¿Qué preparar?</h4>
                  <p>Ten a mano tus notas de sesiones anteriores o cualquier duda que haya surgido en este tiempo.</p>
                </div>
                <div className="reminder-item">
                  <h4>Cambios de fecha</h4>
                  <p>Si necesitas reprogramar, por favor hazlo con al menos 24 horas de antelación desde el correo de confirmación.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <style>{`
        .seguimiento-page {
          background: var(--bg-color);
          min-height: 100vh;
        }

        .seguimiento-hero {
          padding: 120px 0 60px;
          background: linear-gradient(180deg, rgba(225, 162, 57, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
        }

        .text-center {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .badge {
          background: var(--cream-pink);
          color: var(--primary-color);
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-color);
          opacity: 0.8;
          margin-top: 24px;
        }

        .calendar-section {
          padding-bottom: 80px;
        }

        .calendar-card {
          background: white;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(76, 43, 8, 0.1);
          overflow: hidden;
          border: 1px solid rgba(76, 43, 8, 0.05);
        }

        .calendar-header {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(76, 43, 8, 0.05);
          background: #fafafa;
        }

        .header-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .header-info .icon {
          color: var(--primary-color);
          background: var(--cream-pink);
          padding: 12px;
          border-radius: 12px;
          width: 48px;
          height: 48px;
        }

        .header-info h3 {
          font-size: 1.5rem;
          margin-bottom: 4px;
          color: var(--primary-color);
        }

        .header-info p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .header-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #2e7d32;
          background: #e8f5e9;
          padding: 6px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .calendar-iframe-container {
          padding: 20px;
          min-height: 700px;
        }

        .reminder-section {
          padding: 40px 0 100px;
        }

        .reminder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .reminder-item {
          background: white;
          padding: 30px;
          border-radius: 24px;
          border-left: 4px solid var(--accent-color);
          box-shadow: 0 10px 30px rgba(76, 43, 8, 0.05);
        }

        .reminder-item h4 {
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-bottom: 12px;
        }

        .reminder-item p {
          color: var(--text-color);
          opacity: 0.8;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .calendar-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .reminder-grid {
            grid-template-columns: 1fr;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AgendarPage;
