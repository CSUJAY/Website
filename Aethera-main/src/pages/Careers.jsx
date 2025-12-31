import { Globe, Zap, Shield, Code } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {

  const [showToast, setShowToast] = useState(false);

  const handleOpenForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfe432qkkT0D1RDNh0A_3QzRMRI1jzj0fGoEVjT1uef4ogjmA/viewform?usp=publish-editor",
      "_blank",
      "noopener,noreferrer"
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2600);
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Global Sovereignty',
      desc: 'Work with a privacy-first Work OS engineered for AES-256-GCM data protection.'
    },
    {
      icon: Zap,
      title: 'Agentic Core Research',
      desc: 'Contribute to emerging systems in autonomous workflows and LLM-driven execution.'
    },
    {
      icon: Shield,
      title: 'Security as a Principle',
      desc: 'A culture where data security, reliability, and trust are foundational values.'
    },
    {
      icon: Code,
      title: 'Modern Engineering Stack',
      desc: 'React, Vite, Tailwind, WebRTC, distributed systems, and performance-centric design.'
    },
  ];

  return (
    <div className="bg-white">

      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-xl shadow-lg text-sm">
          Talent Network form opened — complete it when ready.
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">
            Careers at Aethera
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We build systems for secure execution, agentic intelligence, and operational sovereignty.
          </p>
        </div>
      </div>

      {/* Culture / Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How We Work</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Aethera is a mission-driven engineering organization. We value ownership,
              technical depth, and craftsmanship over headcount and noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-cyan-50 rounded-xl">
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

      {/* Hiring Status */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            We’re Not Actively Hiring Right Now
          </h2>
          <p className="text-gray-600 mb-8">
            We maintain a lean, high-impact team. However, we occasionally open
            roles for exceptional engineers, researchers, and security specialists.
          </p>

          <p className="text-gray-700 mb-6">
            If you believe your expertise aligns with our mission,
            you’re welcome to share your profile.
          </p>

          <button
            onClick={handleOpenForm}
            className="inline-block bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-700 transition-colors"
          >
            Join Our Talent Network
          </button>

          <p className="text-gray-500 text-sm mt-4">
            We review submissions periodically and reach out when a relevant role opens.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Careers;
