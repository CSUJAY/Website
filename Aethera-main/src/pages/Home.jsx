import { ArrowRight, Search, Key, KanbanSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="bg-white">
      {/* 🔹 SEO META TAGS */}
      <Helmet>
        <title>
          Aethera | Secure AI Work OS & Enterprise Meeting Assistant
        </title>
        <meta
          name="description"
          content="Aethera is a secure AI meeting assistant and work OS that turns conversations into action using agentic intelligence and encrypted sovereign data vaults."
        />
        {/* Canonical */}
        <link rel="canonical" href="https://aethera.app/" />
        {/* OpenGraph */}
        <meta property="og:title" content="Aethera — Secure AI Meeting Assistant & Work OS" />
        <meta property="og:description" content="Turn meetings into actionable tasks, CRM records, and knowledge inside a secure sovereign AI vault." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aethera.app/" />
        <meta property="og:image" content="/og-cover.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aethera — Secure AI Meeting Assistant & Work OS" />
        <meta name="twitter:description" content="Private AI Work OS that turns meetings into action with encrypted sovereign intelligence." />
        <meta name="twitter:image" content="/og-cover.png" />
      </Helmet>

      {/* 🔹 HERO SECTION */}
      <section className="relative bg-gradient-to-r from-cyan-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Private AI Work OS That Turns Meetings Into Action
            </h1>

            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-2xl">
              Aethera is an enterprise-grade AI meeting assistant and workflow
              platform that transforms conversations into tasks, CRM records, and
              institutional knowledge — secured with AES-256-GCM encryption inside
              your own sovereign data vault.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/intelligence"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md text-cyan-700 bg-white hover:bg-cyan-50 transition-colors"
              >
                Explore the Agentic Core
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/sovereign-vault"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md text-white bg-cyan-900/50 hover:bg-cyan-900/60 backdrop-blur-sm transition-colors"
              >
                View Security Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CONVERSATION TO ACTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Conversation to <span className="text-cyan-600">Action — Securely.</span>
          </p>

          <ul className="text-lg text-gray-600 max-w-3xl mx-auto space-y-2">
            <li>Actionable tasks & execution workflows</li>
            <li>Structured CRM records</li>
            <li>Searchable institutional knowledge</li>
          </ul>

          <p className="mt-4 text-gray-600">
            All data remains encrypted, isolated, and stored inside your sovereign vault — never used to train third-party models.
          </p>
        </div>
      </section>

      {/* 🔹 CORE PILLARS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">
              Core Pillars
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              The Aethera Architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Agentic Intelligence",
                description:
                  "Agentic AI that understands context and authority. Aethera’s 4-layer agentic core analyzes conversations, generates accurate Meeting Minutes (MoM), and produces auto-prioritized insights — without ambiguity or hallucinations.",
                icon: Search,
                link: "/intelligence",
              },
              {
                title: "The Work OS Platform",
                description:
                  "An AI-powered Work OS for executive teams. Manage tasks, CRM data, and knowledge in one secure system — encrypted Kanban workflows, AI-powered CRM, knowledge base with memory, and real-time WebRTC collaboration.",
                icon: KanbanSquare,
                link: "/platform",
              },
              {
                title: "The Sovereign Vault",
                description:
                  "Enterprise-grade AI security and data sovereignty. All data is protected with AES-256-GCM encryption, isolated vault architecture, and full audit logging — ensuring total ownership and compliance.",
                icon: Key,
                link: "/sovereign-vault",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-cyan-100"
              >
                <div className="h-12 w-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <pillar.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 mb-4">{pillar.description}</p>

                <Link
                  to={pillar.link}
                  className="text-cyan-600 font-medium hover:text-cyan-700 inline-flex items-center"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 WHY CHOOSE AETHERA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Executives Choose Aethera
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Executive Automation",
                    desc: "Turn spoken decisions into tracked execution automatically — across tasks, CRM, and documentation.",
                  },
                  {
                    title: "Absolute Data Sovereignty",
                    desc: "Your AI assistant works for you — not a third-party cloud. Your data never leaves your vault.",
                  },
                  {
                    title: "Reliable AI-Generated Insights",
                    desc: "Insights synthesized from internal memory, verified sources, and structured research — without guesswork.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="h-6 w-6 rounded-full bg-cyan-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-400 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20" />
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      Data Ownership
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      4-Layer
                    </div>
                    <div className="text-sm text-gray-400">
                      Agentic Intelligence
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      AES-256-GCM
                    </div>
                    <div className="text-sm text-gray-400">
                      Encryption Standard
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      0
                    </div>
                    <div className="text-sm text-gray-400">
                      Security Incidents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See Aethera in Action
          </h2>

          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Discover how executives use Aethera to automate meetings, secure
            sensitive knowledge, and execute faster — without sacrificing data
            control.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-md hover:bg-gray-50 transition-colors"
          >
            Request a Secure Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
