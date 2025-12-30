import { ArrowRight, Check, Server, Layout, Search, Zap, Code, Mail } from 'lucide-react'; // Added new icons
import { Link } from 'react-router-dom';

// CRUCIAL: Rename the exported component to match the filename Intelligence.jsx
const Intelligence = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Aethera Agentic Intelligence</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The 4-Layer research core, real-time automation, and M.O.M. generation engine for executive operations.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Feature 1: The 4-Layer Research Core */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6 w-fit">
                  4-LAYER CORE
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Definitive Answers, Real-Time Synthesis</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Aethera doesn't just search; it synthesizes. Our 4-layer engine combines encrypted internal memory, live web search, deep scraping, and Llama3 processing to deliver the most authoritative answer available, instantly.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Layer 0: Encrypted Internal Memory Search',
                    'Layer 1: Global Google Intelligence',
                    'Layer 2: Deep Web Scraper Protocol',
                    'Layer 3: Llama3 Synthesis & Report Generation'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700">
                    See Live Demo
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-12">
                 <div className="bg-white shadow-2xl rounded-lg p-4 w-full h-64 flex items-center justify-center text-gray-400">
                   <Search className="h-16 w-16 text-cyan-500 opacity-60" />
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Automation & M.O.M. Generator */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="bg-gray-100 flex items-center justify-center p-12 order-last lg:order-first">
                 <div className="bg-white shadow-2xl rounded-lg p-4 w-full h-64 flex items-center justify-center text-gray-400">
                   <Mail className="h-16 w-16 text-purple-500 opacity-60" />
                 </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6 w-fit">
                  AUTO-PILOT
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Automated Minutes of Meeting (MOM)</h2>
                <p className="text-lg text-gray-600 mb-8">
                  The MOM Generator protocol summarizes, extracts action items, and generates a formal, send-ready executive summary via the Mail Gateway upon session finalization. Say goodbye to post-meeting administrative work.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Auto-Pilot Real-Time Insight Extraction',
                    'Business Tag Engine ([TASK], [CRM], [DOC])',
                    'Nodemailer-powered Mail Gateway',
                    'Transcript-based Llama3 Summary'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                    Explore Automation
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intelligence; // CRUCIAL: Export the correctly renamed component