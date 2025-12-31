import { KanbanSquare, Users, BookOpen, Video, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
  const services = [
    {
      id: 'kanban-board',
      title: 'Dynamic Project Kanban',
      icon: KanbanSquare,
      description:
        'Your conversation is your project manager. Task tags ([TASK:]) automatically populate and track progress in the secure, drag-and-drop kanban board.',
      benefits: ['Real-Time Task Sync', 'Velocity Tracking', 'Adaptive Workflow Layer'],
      impact: ['Team Execution Visibility', 'Operational Accountability', 'Faster Delivery Cycles'],
    },
    {
      id: 'crm-vault',
      title: 'Encrypted Client CRM',
      icon: Users,
      description:
        'Capture leads, track deal value, and manage your pipeline directly from your meeting transcript — with encrypted storage and role-based access.',
      benefits: ['Instant Lead Capture ([CRM:])', 'Pipeline Monitoring', 'Relationship Intelligence'],
      impact: ['Higher Deal Closure Confidence', 'Unified Client Records', 'Reduced Data Leakage Risk'],
    },
    {
      id: 'knowledge-base',
      title: 'Contextual Knowledge Base',
      icon: BookOpen,
      description:
        'Save critical knowledge, wiki notes, and strategy briefs using the [DOC:] tag. The system builds an evolving, contextual memory layer for your organization.',
      benefits: ['Knowledge Retention', 'Context-Aware Recall', 'Organizational Memory'],
      impact: ['Reduced Knowledge Loss', 'Faster Onboarding', 'Decision Support Continuity'],
    },
    {
      id: 'webrtc-uplink',
      title: 'Sovereign WebRTC & Uplink',
      icon: Video,
      description:
        'Run encrypted internal meetings or deploy a meeting agent across external platforms via a sovereign hybrid uplink architecture.',
      benefits: ['Low-Latency Collaboration', 'Secure Multi-Participant Sync', 'Cross-Platform Bridging'],
      impact: ['Frictionless Remote Coordination', 'Reduced Vendor Lock-In', 'Resilient Ops Infrastructure'],
    },
    {
      id: 'business-automation',
      title: 'Integrated Automation Engine',
      icon: Zap,
      description:
        'The system continuously analyzes conversations, extracts action items, and generates executive-grade summaries and reports.',
      benefits: ['Automatic Action Extraction', 'Executive-Ready MOMs', 'Insight-Driven Decisions'],
      impact: ['Operational Clarity', 'Leadership Visibility', 'Consistent Meeting Outcomes'],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Aethera Work OS Platform
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The unified workspace where intelligence, execution, and organizational knowledge converge.
          </p>
        </div>
      </div>

      <div className="py-20">
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

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Key Platform Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Where This Module Delivers Impact
                  </h3>
                  <ul className="space-y-2">
                    {service.impact.map((item) => (
                      <li key={item} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        {item}
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
                  <span className="text-sm">Work OS Module Illustration</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
