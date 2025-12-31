import { FileText, CheckCircle, Shield, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SEO META */}
      <Helmet>
        <title>Aethera | Terms of Service</title>
        <meta
          name="description"
          content="Official Terms of Service for Aethera Sovereign Work OS. Covers authorized usage, AES-256-GCM encryption, and Vault integrity."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-slate-900 px-8 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">Work OS Service Mandate</h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
          This mandate governs your rights and obligations when operating the Aethera Sovereign Work OS.
        </p>
      </div>

      {/* Terms Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* 1. Acceptance */}
        <section>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-cyan-100 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Mandate</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            By authenticating and accessing the <strong>Aethera Sovereign Work OS</strong> and its associated services, you agree to be bound by this Service Mandate. Your continued use constitutes acceptance of all applicable terms, laws, and the integrity principles of the Sovereign Vault.
          </p>
        </section>

        {/* 2. Authorized Use */}
        <section>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Authorized Use of the Work OS</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Permission is granted for your registered user to utilize the Agentic Core, Platform Tools (Kanban, CRM, Docs), and WebRTC signaling for internal and authorized external business operations.
          </p>
          <p className="text-gray-600 leading-relaxed font-bold">Under this mandate, you may not:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>Attempt to bypass or compromise the AES-256-GCM encryption key or the Sovereign Vault's integrity.</li>
            <li>Use the Agentic Core for illegal research or unauthorized data scraping.</li>
            <li>Attempt to decompile or reverse engineer any software components (including bot-agent.js).</li>
            <li>Redistribute or offer Aethera as a service to unauthorized third parties.</li>
          </ul>
        </section>

        {/* 3. Vault Integrity */}
        <section>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Sovereign Vault Integrity</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Aethera employs an authenticated encryption layer (AES-256-GCM) to ensure the integrity of your data. The user acknowledges that any attempt to tamper with the data, leading to <strong>Authentication Tag Failure</strong> during decryption, will render the data irrevocably corrupt and may lead to immediate suspension of the Work OS service.
          </p>
        </section>

        {/* 4. Governing Law */}
        <section>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <HelpCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Governing Law</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This Mandate is governed by and construed in accordance with the laws of the State of California, United States, specifically in matters pertaining to data encryption, digital sovereignty, and enterprise software mandates.
          </p>
        </section>

        {/* Last Updated */}
        <section className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Assistance or Security Consultation?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our security and compliance team for any questions regarding the Service Mandate or the Sovereign Vault.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
          >
            Contact Security Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
