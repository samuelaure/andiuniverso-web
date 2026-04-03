import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import AboutAndiUniverso from '../components/AboutAndiUniverso';
import ValueProps from '../components/ValueProps';
import FAQ from '../components/FAQ';
import ServiceCards from '../components/ServiceCards';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />

        <div style={{ backgroundColor: 'var(--cream-pink)' }}>
          <AnimatedSection y={0} delay={0.1}>
            <AboutAndiUniverso />
          </AnimatedSection>
        </div>

        <div style={{ backgroundColor: 'white' }}>
          <AnimatedSection>
            <div className="section-xl">
              <ValueProps />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div id="servicios" className="section-xxl">
            <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <h2 className="heading-md">Herramientas al servicio de tu proceso</h2>
              <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.25rem' }}>
                Utilizo estos sistemas como mapas para darte claridad técnica,
                pero el corazón siempre es nuestro espacio de encuentro.
              </p>
            </div>
            <ServiceCards />
          </div>
        </AnimatedSection>

        <div style={{ backgroundColor: 'white' }}>
          <AnimatedSection>
            <div className="section-xl">
              <Pricing />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="section-xl">
            <FAQ />
          </div>
        </AnimatedSection>
      </main>
    </>
  );
};

export default HomePage;
