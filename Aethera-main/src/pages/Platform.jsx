import { Code, Smartphone, Brain, Cloud, PenTool, Headphones, ArrowRight, CheckCircle, KanbanSquare, Users, BookOpen, Video, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// CRUCIAL: Rename the exported component to match the filename Platform.jsx
const Platform = () => {
  const services = [
    {
      id: 'kanban-board',
      title: 'Dynamic Project Kanban',
      icon: KanbanSquare,
      description: 'Your conversation is your project manager. Task tags ([TASK:]) automatically populate and track progress in the secure, drag-and-drop kanban board.',
      benefits: ['Real-Time Task Sync', 'Velocity Metrics', 'Secure Persistence'],
      tech: ['React/Vite', 'SortableJS', 'SQLite/Better-SQLite3'], // Reflecting the code stack
    },
    {
      id: 'crm-vault',
      title: 'Encrypted Client CRM',
      icon: Users,
      description: 'Capture leads, track deal value, and manage your pipeline directly from your meeting transcript. All data is securely stored in the Sovereign Vault.',
      benefits: ['Instant Lead Capture ([CRM:])', 'Secure Export (CSV)', 'Full CRUD via API'],
      tech: ['AES-256-GCM', 'Express API', 'React'],
    },
    {
      id: 'knowledge-base',
      title: 'Contextual Knowledge Base',
      icon: BookOpen,
      description: 'Save critical business knowledge, wiki entries, and strategic notes with the [DOC:] tag. The agent uses this encrypted memory for future research.',
      benefits: ['Internal Memory Layer', 'Instant Retrieval', 'Secure Document Storage'],
      tech: ['SQLite', 'Encryption', 'Agentic Core'],
    },
    {
      id: 'webrtc-uplink',
      title: 'Sovereign WebRTC & Uplink',
      icon: Video,
      description: 'Run encrypted internal team meetings with our built-in WebRTC layer, or deploy a bot to external platforms (Zoom, Meet, Teams) via the Hybrid Uplink.',
      benefits: ['Multi-User Low-Latency', 'IMAP Auto-Deploy', 'Platform Agnostic'],
      tech: ['WebRTC', 'Socket.IO', 'Puppeteer', 'ImapFlow'],
    },
    {
      id: 'business-automation',
      title: 'Integrated Automation Engine',
      icon: Zap,
      description: 'Aethera’s core continuously analyzes your conversation, automatically extracting action items and generating executive summaries (MOM).',
      benefits: ['Auto-Pilot Insights', 'MOM Generation', 'Action Item Extraction'],
      tech: ['Llama3', 'NodeMailer', 'Real-Time Logging'],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Aethera Work OS Platform</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The single unified platform where intelligence, project management, and client data converge.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-700 mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Key Platform Benefits</h3>
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
                   <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Core Stack Elements</h3>
                   <div className="flex flex-wrap gap-2">
                     {service.tech.map((t) => (
                       <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-80 flex items-center justify-center">
                {/* Placeholder for service illustration/image */}
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

export default Platform; // CRUCIAL: Export the correctly renamed component