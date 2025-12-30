import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  // Use the same links as Contact.jsx for consistency
  const WHATSAPP_LINK = "https://chat.whatsapp.com/HESewWst3e970X0g0eXaRq"; 
  const INSTAGRAM_LINK = "https://www.instagram.com/aethera5785/?utm_source=qr&igsh=ZTRpZjlzMXRsOHB4#"; 

  // Combined and structured array for all social links
  const socialLinks = [
    { Icon: Twitter, href: "#", color: 'hover:bg-cyan-600' },
    { Icon: Github, href: "#", color: 'hover:bg-cyan-600' },
    { Icon: Linkedin, href: "#", color: 'hover:bg-cyan-600' },
    { Icon: Instagram, href: INSTAGRAM_LINK, color: 'hover:bg-pink-600' }, // Specific color for Instagram
    { Icon: MessageCircle, href: WHATSAPP_LINK, color: 'hover:bg-green-600' }, // Specific color for WhatsApp
  ];
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-cyan-600 p-1.5 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Aethera</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Architecting the Sovereign Work OS. We build secure, agentic, and fully automated solutions under the mandate of AES-256-GCM data protection.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white transition-all duration-300 ${item.color}`} // Using item.color
                >
                  <item.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work OS Features */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Work OS Features</h3>
            <ul className="space-y-4">
              <li>
                  <Link to="/platform" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      Platform (Work OS)
                  </Link>
              </li>
              <li>
                  <Link to="/intelligence" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      Agentic Intelligence
                  </Link>
              </li>
              <li>
                  <Link to="/sovereign-vault" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      Sovereign Vault
                  </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" /> 
                <span>Global Nexus: Remote First (Digital HQ)</span> 
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                <span>aetherameeting@gmail.com</span> 
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Aethera Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;