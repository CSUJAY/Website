import { ArrowRight, Check, Search, Mail, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Intelligence = () => {
  const features = [
    {
      id: '4-layer-core',
      title: '4-Layer Contextual Intelligence',
      icon: Code,
      description:
        'Aethera’s 4-layer AI intelligence combines encrypted internal memory, verified web research, deep document analysis, and deterministic synthesis — delivering accurate, auditable insights in real time.',
      benefits: [
        'Encrypted internal knowledge & memory search',
        'Verified web & research intelligence',
        'Deep content & document analysis',
        'Deterministic AI synthesis & report generation',
      ],
    },
    {
      id: 'mom-automation',
      title: 'Automated Minutes of Meeting & Action Items',
      icon: Mail,
      description:
        'Automatically generate structured MoM, extract decisions and action items, and map them into tasks, CRM updates, and documentation — all secured inside your enterprise vault.',
      benefits: [
        'Real-time action & decision extraction',
        'Smart business tag engine (TASK / CRM / DOC)',
        'Secure executive email delivery gateway',
        'Transcript-driven AI summaries & knowledge capture',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* SEO META TAGS */}
      <Helmet>
        <title>Aethera Intelligence | Secure AI Insights & Decision Support</title>
        <meta
          name="description"
          content="Aethera Intelligence delivers secure AI-powered insights for enterprises. Automate research, generate verified reports, and capture actionable knowledge in real time."
        />
        <meta
          name="keywords"
          content="Aethera Intelligence, AI Insights, Enterprise AI, Secure Decision Support, Minutes of Meeting, Research Automation, AI Reports, Knowledge Capture"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Enterprise AI Intelligence for Secure Decision-Making
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6">
            Turn meetings and conversations into actionable insights, accurate MoM, and verified research — fully encrypted, real-time, and enterprise-ready.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
          >
            Request a Secure Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-cyan-100 text-cyan-700 mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {feature.benefits.map((b) => (
                      <li key={b} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-md font-medium text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
                >
                  Explore Feature
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-12 border border-gray-100 h-80 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <feature.icon className="h-32 w-32 mx-auto mb-4 opacity-20" />
                  <span className="text-sm">Feature Illustration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intelligence;
