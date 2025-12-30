import { FileText, CheckCircle, AlertCircle, HelpCircle, Shield, Key } from 'lucide-react'; // Added Shield and Key

const TermsOfService = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 px-8 py-12 text-center"> {/* Updated color */}
            <h1 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">Work OS Service Mandate</h1> {/* Updated title and color */}
            <p className="mt-4 text-xl text-gray-400">
              This mandate governs your rights and obligations when operating the Aethera Sovereign Work OS.
            </p>
          </div>
          
          <div className="px-8 py-12 space-y-12">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-cyan-100 p-2 rounded-lg"> {/* Updated color */}
                  <FileText className="h-6 w-6 text-cyan-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Mandate</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By authenticating and accessing the **Aethera Sovereign Work OS** and its associated services, you agree to be bound by this Service Mandate. Your continued use constitutes acceptance of all applicable terms, laws, and the integrity principles of the Sovereign Vault.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg"> {/* Updated color */}
                  <CheckCircle className="h-6 w-6 text-blue-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Authorized Use of the Work OS</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted for your registered user to utilize the Agentic Core, Platform Tools (Kanban, CRM, Docs), and WebRTC signaling for internal and authorized external business operations.
              </p>
              <p className="text-gray-600 leading-relaxed font-bold">
                Under this mandate, you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>Attempt to bypass or compromise the AES-256-GCM encryption key or the Sovereign Vault's integrity.</li>
                <li>Use the Agentic Core for illegal research or unauthorized data scraping.</li>
                <li>Attempt to decompile or reverse engineer any software components (including bot-agent.js).</li>
                <li>Redistribute or offer Aethera as a service to unauthorized third parties.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg"> {/* Updated color */}
                  <Shield className="h-6 w-6 text-red-600" /> {/* Updated icon to Shield */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Sovereign Vault Integrity</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Aethera employs an authenticated encryption layer (AES-256-GCM) to ensure the integrity of your data. The user acknowledges that any attempt to tamper with the data, leading to **Authentication Tag Failure** during decryption, will render the data irrevocably corrupt and may lead to immediate suspension of the Work OS service.
              </p>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg"> {/* Updated color */}
                  <HelpCircle className="h-6 w-6 text-yellow-600" /> {/* Updated color */}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Governing Law</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This Mandate is governed by and construed in accordance with the laws of the State of California, United States, specifically in matters pertaining to data encryption, digital sovereignty, and enterprise software mandates.
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

export default TermsOfService;