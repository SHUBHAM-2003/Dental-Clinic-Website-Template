import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Kids from './pages/Kids';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial global loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-blue-50/30 selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
