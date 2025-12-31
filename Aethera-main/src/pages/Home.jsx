import { ArrowRight, Search, Key, KanbanSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-700 to-blue-800 text-white overflow-hidden">
        {/* Optional subtle grid overlay, low z-index so content is visible */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Aethera: The <span className="text-cyan-300">Sovereign Work OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl">
              Unifying Agentic Intelligence, Secure Platform Tools, and AES-256-GCM Vault Security for executive operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/intelligence"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-cyan-50 transition-colors"
              >
                Explore Agentic Core
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/sovereign-vault"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-800 bg-opacity-40 hover:bg-opacity-50 backdrop-blur-sm transition-colors"
              >
                View Security Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Conversation to <span className="text-cyan-600">Action, Vaulted.</span>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aethera is an operational engine. Every discussion is instantly converted into tasks, client data, and knowledge, all protected by an encrypted sovereign vault.
          </p>
        </div>
      </section>

      {/* Core Pillars Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Core Pillars</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Aethera Architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Agentic Intelligence',
                description: 'The 4-Layer research core, Auto-Pilot insights, and automated Minutes of Meeting (MOM) generation.',
                icon: Search,
                link: '/intelligence',
              },
              {
                title: 'The Work OS Platform',
                description: 'Integrated Kanban, Encrypted CRM, Knowledge Base, and Multi-User WebRTC for unified operations.',
                icon: KanbanSquare,
                link: '/platform',
              },
              {
                title: 'The Sovereign Vault',
                description: 'AES-256-GCM authenticated encryption for all data, hardened security, and auditable logging.',
                icon: Key,
                link: '/sovereign-vault',
              },
            ].map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-cyan-100">
                <div className="h-12 w-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4">{pillar.description}</p>
                <Link to={pillar.link} className="text-cyan-600 font-medium hover:text-cyan-700 inline-flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose the Sovereign Work OS?</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Executive Automation',
                    desc: 'Instantly convert verbal decisions into persistent, trackable business actions (Tasks, CRM, Docs).',
                  },
                  {
                    title: 'Absolute Data Sovereignty',
                    desc: 'Your data is encrypted by AES-256-GCM and stored in your isolated vault, not a third-party cloud.',
                  },
                  {
                    title: '4-Layer Authority',
                    desc: 'Answers are always definitive, synthesized from internal memory, the web, and deep-scraping protocols.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-600 mt-1"></div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Data Sovereignty</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">4-Layer</div>
                    <div className="text-sm text-gray-400">Agentic Core</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">AES-256</div>
                    <div className="text-sm text-gray-400">Encryption Standard</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">0</div>
                    <div className="text-sm text-gray-400">Security Incidents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals. Schedule a consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
