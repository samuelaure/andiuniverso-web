import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PrankPage.css';

const PrankPage: React.FC = () => {
  const [loadingText, setLoadingText] = useState('Cargando información...');
  const [showRealButton, setShowRealButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoadingText('Cargando imágenes...');
    }, 4000);

    const revealTimer = setTimeout(() => {
        setLoadingText('Proceso completado! Revisa los resultados abajo.');
        setShowRealButton(true);
    }, 8000);

    return () => {
        clearTimeout(timer);
        clearTimeout(revealTimer);
    };
  }, []);

  return (
    <div className="prank-container">
      <div className="prank-box">
        <h1 className="prank-header">ANDI UNIVERSO</h1>
        
        <div className="prank-marquee">
          <p>*** BIENVENIDOS A MI PAGINA WEB - BIENVENIDOS A MI PAGINA WEB - BIENVENIDOS A MI PAGINA WEB ***</p>
        </div>

        <section className="prank-section">
          <h2 className="prank-title">MIS SERVICIOS</h2>
          <p>
            Esta es la pagina oficial de Andi Universo.

            Ofrece lecturas de carta astral y servicios de astrología

            Aqui puedes ver los planetas y como afectan a tu familia usando datos matematicos rigurosos. 
            No es magia, es ciencia de datos astrológicos avanzada.
          </p>
        </section>

        <section className="prank-section">
          <h2 className="prank-title">Estado del Sistema</h2>
          <p>{loadingText}</p>
          <div className="prank-progress-container">
            <div className="prank-progress-bar"></div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="gif-placeholder">✨ GIF ESTRELLA ✨</span>
            <span className="gif-placeholder">🌟 GIF BRILLO 🌟</span>
          </div>
        </section>

        <section className="prank-section">
          <h2 className="prank-title">Formulario de Registro (Obligatorio)</h2>
          <label className="prank-form-label">Nombre Completo (tal como aparece en el DNI):</label>
          <input className="prank-input" type="text" placeholder="Escribe aqui..." />
          
          <label className="prank-form-label">Fecha de nacimiento:</label>
          <input className="prank-input" type="date" placeholder="Ej: 540" />
          
          <label className="prank-form-label">Nombre de su mascota favorita:</label>
          <input className="prank-input" type="text" placeholder="Nombre de perro/gato..." />

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button className="prank-button" onClick={() => alert('El servidor esta ocupado calculando el transito de Saturno. Intentalo de nuevo en 5 minutos.')}>
              ENVIAR DATOS
            </button>
          </div>
        </section>

        {showRealButton && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <button className="prank-button" style={{ background: 'linear-gradient(180deg, #f0f 0%, #a0a 100%)', color: 'white' }} onClick={() => navigate('/')}>
              PÁGINA REAL
            </button>
          </div>
        )}

        <div className="prank-footer">
          <p>© 2026 Andi Universo - Todos los derechos reservados - Diseñado por Samuel en 1 hora.</p>
          <p>Contador de visitas: 00000042</p>
        </div>
      </div>
    </div>
  );
};

export default PrankPage;
