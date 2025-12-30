import { Shield, Lock, Eye, Server, Key } from 'lucide-react'; // Added Key icon for encryption

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 px-8 py-12 text-center"> {/* Updated color */}
            <h1 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">Sovereign Data Privacy Policy</h1> {/* Updated title and color */}
            <p className="mt-4 text-xl text-gray-400">
              Your privacy is secured by the Aethera Sovereign Vault. Protection is our mandate.
            </p>
          </div>
          
          <div className="px-8 py-12 space-y-12">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-cyan-100 p-2 rounded-lg"> {/* Updated color */}
                  <Shield className="h-6 w-6 text-cyan-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Process</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information necessary to facilitate the Work OS functions. This includes data explicitly captured via the Agentic Core or directly input by users.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Authentication Data (via Google OAuth)</li>
                <li>**Meeting Transcripts & Notes** (text data processed by the Agentic Core)</li>
                <li>**CRM and Task Data** (client names, deal values, action items)</li>
                <li>System usage metrics for service improvement and stability</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg"> {/* Updated color */}
                  <Eye className="h-6 w-6 text-blue-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We use the information *only* to provide the core Aethera Work OS functions: real-time transcription, Agentic research, MOM generation, and data persistence in your Sovereign Vault. We do not sell or monetize your data outside of providing the service.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-cyan-100 p-2 rounded-lg"> {/* Updated color */}
                  <Key className="h-6 w-6 text-cyan-600" /> {/* Changed icon to Key to represent encryption */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Sovereign Vault & Data Security</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 font-bold">
                All sensitive data, including meeting transcripts, CRM entries, and task details, are automatically encrypted at rest.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>**Encryption Standard:** We exclusively use **AES-256-GCM** (Authenticated Encryption) for all PII.</li>
                <li>**Data Integrity:** The GCM mode ensures data integrity, proving that data has not been tampered with since encryption.</li>
                <li>**Vault Isolation:** Data is stored in your dedicated Sovereign Vault, separate from other tenants.</li>
                <li>**Session Hardening:** The platform uses Helmet CSP, CSRF protection, and secure session management.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-teal-100 p-2 rounded-lg"> {/* Updated color */}
                  <Server className="h-6 w-6 text-teal-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Data Retention</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We retain your data only for the duration of your active subscription and as necessary to provide the service. Upon subscription cancellation, all encrypted data in your Sovereign Vault is purged according to our secure deletion protocol.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;