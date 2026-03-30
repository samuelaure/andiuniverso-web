import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingProvider';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const AstrologiaPage = lazy(() => import('./pages/AstrologiaPage'));
const PergaminosPage = lazy(() => import('./pages/PergaminosPage'));
const HDSesionPage = lazy(() => import('./pages/HumanDesignSesionPage'));
const AstrologiaHub = lazy(() => import('./pages/AstrologiaHubPage'));
const HDHub = lazy(() => import('./pages/HumanDesignHubPage'));
const FamiliaHub = lazy(() => import('./pages/FamiliaHubPage'));
const BioHub = lazy(() => import('./pages/BioHubPage'));
const AgendarPage = lazy(() => import('./pages/AgendarPage'));

const PageLoader = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }}
  >
    <div className="loader"></div>
    <style>{`
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid var(--primary-color);
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
      @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="app">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/astrologia" element={<AstrologiaHub />} />
              <Route path="/astrologia/sesion" element={<AstrologiaPage />} />
              <Route path="/pergaminos" element={<PergaminosPage />} />
              <Route path="/human-design" element={<HDHub />} />
              <Route path="/human-design/sesion" element={<HDSesionPage />} />
              <Route path="/familia" element={<FamiliaHub />} />
              <Route path="/bio" element={<BioHub />} />
              <Route path="/agenda" element={<AgendarPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
