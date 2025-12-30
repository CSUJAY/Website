import { Lock, Shield, Database, Server, Key, Terminal, Code, Clock } from 'lucide-react'; // Added security-focused icons

// CRUCIAL: Rename the exported component to match the filename SovereignVault.jsx
const SovereignVault = () => {
  const securityFeatures = [
    {
      category: 'Data Encryption',
      icon: Lock,
      techs: ['AES-256-GCM', 'Authenticated Encryption', 'IV & Auth Tag Validation'],
      description: 'PII, Transcripts, and CRM data are encrypted end-to-end using the industry gold standard for confidentiality and integrity.',
    },
    {
      category: 'Hardened Architecture',
      icon: Shield,
      techs: ['Helmet CSP', 'X-Frame Options DENY', 'CSRF Protection', 'Session Isolation'],
      description: 'Our server stack is hardened against common web exploits, ensuring the Aethera Work OS remains an impenetrable fortress.',
    },
    {
      category: 'Sovereign Database',
      icon: Database,
      techs: ['Better-SQLite3', 'Single-Tenant Model', 'Encrypted Storage by Default'],
      description: 'Your data lives in your isolated Sovereign Vault, preventing cross-tenant contamination and ensuring compliance.',
    },
    {
      category: 'Compliance & Audit',
      icon: Key,
      techs: ['GDPR Ready Principles', 'Data Minimization', 'Full Access Logging'],
      description: 'Designed from the ground up to meet stringent enterprise and regulatory compliance needs for sensitive meeting data.',
    },
    {
      category: 'Agent & Uplink Security',
      icon: Code,
      techs: ['Puppeteer Stealth Plugin', 'User-Agent Masking', 'IP Isolation'],
      description: 'External Agents deploy with sophisticated anti-detection measures, maintaining the integrity and anonymity of your operation.',
    },
    {
      category: 'Real-Time Logging',
      icon: Clock,
      techs: ['Color-Coded Verbose Logging', 'Uncaught Exception Handlers', 'Production Recovery'],
      description: 'The server provides exhaustive, color-coded logging for all actions and state changes, offering full visibility and swift disaster recovery.',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">The Sovereign Vault</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Security isn't an afterthought. It's the foundation, built with AES-256-GCM authenticated encryption.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm h-10">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-md text-sm font-medium border border-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Sovereign-Grade Security?</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Move beyond compliance and into a state of absolute data sovereignty with Aethera.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors">
                Contact Security Team
            </a>
         </div>
      </div>
    </div>
  );
};

export default SovereignVault; // CRUCIAL: Export the correctly renamed component