import { Briefcase, Heart, Coffee, Globe, ArrowRight, Shield, Zap, Code, Search } from 'lucide-react'; // Added specialized icons
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobs = [
    {
      title: 'Agentic Core Architect (Llama3/Ollama)', // Highly specific AI role
      type: 'Full-time',
      location: 'Remote / Global',
      dept: 'AI/LLM Engineering',
    },
    {
      title: 'Sovereign Vault Security Engineer', // Specific security role
      type: 'Full-time',
      location: 'Remote / London',
      dept: 'Security/DevOps',
    },
    {
      title: 'WebRTC & Signaling Protocol Specialist', // Specific networking role
      type: 'Full-time',
      location: 'Remote',
      dept: 'Core Engineering',
    },
    {
      title: 'Vite/React Work OS Frontend Lead', // Specific frontend stack role
      type: 'Full-time',
      location: 'Singapore / Remote',
      dept: 'UI/UX Engineering',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20"> {/* Updated to slate-900 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">Join the Aethera Mandate</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are looking for elite specialists in Agentic Systems, Data Sovereignty, and WebRTC protocols.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Work With the Work OS?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Global Sovereignty', desc: 'Work with the world’s first AES-256-GCM encrypted Work OS platform.' },
              { icon: Zap, title: 'Agentic Core Access', desc: 'Direct contribution to the 4-Layer LLM research and automation core.' },
              { icon: Shield, title: 'Security Focus', desc: 'Be part of a team where data security is the *product*, not a feature.' },
              { icon: Code, title: 'Modern Stack', desc: 'Build on Vite, React, Tailwind, Node.js, and specialized protocols like WebRTC.' },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-cyan-50 rounded-xl"> {/* Updated color */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white text-cyan-600 shadow-sm mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Roles</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="text-gray-500 text-sm mt-1 space-x-4">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2 border border-cyan-600 text-cyan-600 font-medium rounded-full hover:bg-cyan-600 hover:text-white transition-colors" // Updated color
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
             <p className="text-gray-600">Don't see a role that fits? <Link to="/contact" className="text-cyan-600 font-bold">Contact us</Link> anyway.</p>
          </div>
        </div>
      </div>
      
      {/* Internship CTA */}
      <div className="bg-slate-900 py-16"> {/* Updated to slate-900 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-bold text-white mb-4">Looking for an Apprenticeship?</h2> {/* Changed to Apprenticeship */}
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
             We offer a specialized apprenticeship program for engineers focused on encryption and agentic systems.
           </p>
           <Link to="/contact" className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors">
             Apply for Apprenticeship
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;