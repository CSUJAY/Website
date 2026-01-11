import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react'; 

// Pages
import Home from './pages/Home';
// --- START: MODIFIED IMPORTS ---
import Platform from './pages/Platform';              // Renamed component for clarity
import SovereignVault from './pages/SovereignVault';  // Renamed component for clarity
import Intelligence from './pages/Intelligence';      // Renamed component for clarity
// --- END: MODIFIED IMPORTS ---
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Legal Pages (Placeholders for now, or to be implemented)
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* --- START: MODIFIED ROUTES TO REFLECT NEW BRANDING --- */}
            <Route path="/platform" element={<Platform />} />           // New URL path: /platform (formerly /services)
            <Route path="/sovereign-vault" element={<SovereignVault />} /> // New URL path: /sovereign-vault (formerly /technologies)
            <Route path="/intelligence" element={<Intelligence />} />    // New URL path: /intelligence (formerly /products)
            {/* --- END: MODIFIED ROUTES TO REFLECT NEW BRANDING --- */}

            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;