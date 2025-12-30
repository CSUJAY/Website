import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    // --- START: MODIFIED NAVIGATION LINKS ---
    { name: 'Platform (Work OS)', path: '/platform' },           // Renamed from 'Services' to 'Platform (Work OS)'
    { name: 'Sovereign Vault', path: '/sovereign-vault' },     // Renamed from 'Technologies' to 'Sovereign Vault'
    { name: 'Agentic Intelligence', path: '/intelligence' },   // Renamed from 'Products' to 'Agentic Intelligence'
    // --- END: MODIFIED NAVIGATION LINKS ---
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 ${!isScrolled && location.pathname === '/' ? 'text-white' : ''}`}>
              Aethera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : isScrolled || location.pathname !== '/'
                    ? 'text-gray-700'
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;