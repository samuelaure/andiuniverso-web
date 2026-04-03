import React, { useEffect } from 'react';
import { useBooking } from '../hooks/useBooking';
import './VSLPage.css';

const VSLPage: React.FC = () => {
  const { openBooking } = useBooking();

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/ma1k1yyou5.jsonp';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="vsl-page">
      <div className="vsl-container">
        {/* Hero Header */}
        <header className="vsl-hero-header">
          <h1 className="vsl-title">
            Este video es un abrazo para <span className="highlight-text">la mujer</span> que hay detrás de <span className="highlight-text">la mamá</span>
          </h1>
          <p className="vsl-subtitle">
            (Dura sólo 5 minutos y puede devolverte la calma que perdiste hace tiempo.)
          </p>
        </header>

        {/* Video Embed */}
        <div className="vsl-video-wrapper">
          <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              <div className="wistia_embed wistia_async_ma1k1yyou5 videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                  <img src="https://fast.wistia.com/embed/medias/ma1k1yyou5/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="vsl-cta-container">
          <button onClick={openBooking} className="vsl-cta-button">
            AGENDAR LLAMADA
          </button>
        </div>

        {/* Testimonials */}
        <section className="vsl-testimonials">
          <h2 className="vsl-testimonials-title">Ellas confían en mí</h2>
          
          <div className="vsl-testimonials-grid">
            <div className="vsl-testimonial-item">
                <span className="vsl-client-name">Stephany Paz</span>
                <div className="vsl-screenshot-wrapper">
                    <img src="/assets/testimonials/stephany.jpg" alt="Testimonio Stephany Paz" className="vsl-screenshot" />
                </div>
            </div>

            <div className="vsl-testimonial-item">
                <span className="vsl-client-name">Andrea Rodríguez</span>
                <div className="vsl-screenshot-wrapper">
                    <img src="/assets/testimonials/andrea.jpg" alt="Testimonio Andrea Rodríguez" className="vsl-screenshot" />
                </div>
            </div>

            <div className="vsl-testimonial-item">
                <span className="vsl-client-name">Cris Cabrera</span>
                <div className="vsl-screenshot-wrapper">
                    <img src="/assets/testimonials/cris.jpg" alt="Testimonio Cris Cabrera" className="vsl-screenshot" />
                </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="vsl-cta-container" style={{ marginTop: '40px' }}>
          <button onClick={openBooking} className="vsl-cta-button">
            AGENDAR LLAMADA
          </button>
        </div>
      </div>
    </div>
  );
};

export default VSLPage;
