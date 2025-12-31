import { KanbanSquare, Users, BookOpen, Video, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Platform = () => {
  const services = [
    {
      id: 'kanban-board',
      title: 'AI-Powered Task & Project Kanban',
      icon: KanbanSquare,
      description:
        'Automatically convert meetings and conversations into actionable tasks. Track, prioritize, and manage everything securely in a drag-and-drop Kanban workspace.',
      benefits: ['Real-Time Task Sync', 'Velocity Tracking', 'Adaptive Workflow Layer'],
      impact: ['Execution Visibility', 'Operational Accountability', 'Faster Delivery Cycles'],
    },
    {
      id: 'crm-vault',
      title: 'Encrypted Client CRM & Deal Pipeline',
      icon: Users,
      description:
        'Capture leads, map relationships, and update pipelines directly from transcripts — all fully encrypted and auditable for enterprise security.',
      benefits: ['Instant Lead Capture ([CRM:])', 'Pipeline Monitoring', 'Relationship Intelligence'],
      impact: ['Higher Deal Confidence', 'Unified Client Records', 'Reduced Data Leakage Risk'],
    },
    {
      id: 'knowledge-base',
      title: 'Contextual Knowledge Base & Memory Layer',
      icon: BookOpen,
      description:
        'Store SOPs, strategy briefs, wiki entries, and decisions securely using [DOC:] tags. Build a persistent organizational memory that accelerates onboarding and decision-making.',
      benefits: ['Knowledge Retention', 'Context-Aware Recall', 'Organizational Memory'],
      impact: ['Reduced Knowledge Loss', 'Faster Onboarding', 'Decision Continuity'],
    },
    {
      id: 'webrtc-uplink',
      title: 'Sovereign WebRTC Collaboration & Uplink',
      icon: Video,
      description:
        'Run encrypted meetings or deploy external agents with hybrid uplink architecture — ensuring low-latency, cross-platform collaboration with full security.',
      benefits: ['Low-Latency Collaboration', 'Secure Multi-Participant Sync', 'Cross-Platform Bridging'],
      impact: ['Frictionless Remote Coordination', 'Reduced Vendor Lock-In', 'Resilient Ops Infrastructure'],
    },
    {
      id: 'business-automation',
      title: 'Integrated Automation & Action Engine',
      icon: Zap,
      description:
        'Extract action items, generate executive summaries, and structure insights automatically — powering smarter workflows without compromising security.',
      benefits: ['Automatic Action Extraction', 'Executive-Ready MoMs', 'Insight-Driven Decisions'],
      impact: ['Operational Clarity', 'Leadership Visibility', 'Consistent Meeting Outcomes'],
    },
  ];

  return (
    <div className="bg-white">
      {/* SEO META TAGS */}
      <Helmet>
        <title>Aethera Platform | Secure AI Work OS for Enterprise Productivity</title>
        <meta
          name="description"
          content="Aethera Platform is a secure AI-powered Work OS for enterprises. Turn meetings into actionable tasks, CRM records, and organizational knowledge while maintaining full data privacy."
        />
        <meta
          name="keywords"
          content="AI meeting assistant, enterprise AI platform, secure work OS, AI task management, encrypted CRM, business automation, AI-powered workflows"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            AI Work OS That Turns Meetings Into Action
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Aethera securely transforms conversations into tasks, CRM updates, and institutional knowledge — all inside an enterprise-grade AI platform.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Request a Secure Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* FROM CONVERSATION TO ACTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Conversation to <span className="text-blue-600">Action — Automatically</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Capture meetings, calls, and discussions, then instantly convert them into:
          </p>
          <ul className="text-lg text-gray-600 max-w-3xl mx-auto space-y-2 mb-4">
            <li>• Actionable tasks and execution workflows</li>
            <li>• Structured CRM records</li>
            <li>• Searchable organizational knowledge</li>
          </ul>
          <p className="text-gray-600">
            All data is encrypted and stored in your sovereign vault — never shared or used to train third-party models.
          </p>
        </div>
      </section>

      {/* SERVICES / CORE MODULES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-700 mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Business Impact</h4>
                  <ul className="space-y-2">
                    {service.impact.map((i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-80 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <service.icon className="h-32 w-32 mx-auto mb-4 opacity-20" />
                  <span className="text-sm">Module Illustration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Platform;
