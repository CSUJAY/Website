import { Award, Users, Target, Heart, Shield, Zap, Key } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20"> {/* Changed to slate-900 to match the OS dark theme */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">The Aethera Mandate</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are the architects of the Sovereign Work OS—committed to executive automation and absolute data security.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-cyan-600 text-white mb-6"> {/* Updated color */}
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To eliminate administrative overhead by providing a single, **encrypted, agentic platform** that converts conversation into task-ready action and knowledge.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6"> {/* Updated color */}
                <Shield className="h-6 w-6" /> {/* Updated icon to Shield */}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the global standard for secure executive intelligence, where absolute **data sovereignty (AES-256-GCM)** is the non-negotiable foundation for every operation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Genesis of Sovereignty</h2> {/* Updated color and text */}
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Consulting to Work OS Architecture
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our journey pivoted when we realized the need to own and secure the entire operational workflow, leading to the creation of the Sovereign Vault.
            </p>
          </div>
          <div className="relative">
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
             <div className="space-y-12">
               {[
                 { year: '2020', title: 'Founding: Tech Consulting', desc: 'Aethera was founded with a focus on custom cloud and AI solutions.' },
                 { year: '2022', title: 'Internal Agent Prototype', desc: 'Began development on the first Agentic Core to automate internal meetings.' },
                 { year: '2024', title: 'Sovereign Vault Release', desc: 'Launched the AES-256-GCM architecture and Work OS platform.' },
                 { year: '2025', title: 'Global Mandate', desc: 'Focus shifted entirely to Work OS deployment for enterprise sovereignty.' },
               ].map((milestone, idx) => (
                 <div key={idx} className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                   <div className="w-5/12"></div>
                   <div className="z-10 flex items-center justify-center order-1 bg-cyan-600 shadow-xl w-12 h-12 rounded-full"> {/* Updated color */}
                     <h1 className="mx-auto text-white font-semibold text-xs">{milestone.year}</h1>
                   </div>
                   <div className={`w-5/12 order-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                     <h3 className="mb-3 font-bold text-gray-800 text-xl">{milestone.title}</h3>
                     <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{milestone.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sovereignty', desc: 'Absolute ownership and protection of client data, guaranteed by authenticated encryption.', icon: Key },
              { title: 'Authority', desc: 'Technical excellence and the definitive, 4-Layer answer to every question.', icon: Zap },
              { title: 'Automation', desc: 'The continuous pursuit of eliminating all manual administrative work for executives.', icon: Heart },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-cyan-50 text-cyan-600 mb-6"> {/* Updated color */}
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900">Meet Our Leaders</h2>
             <p className="mt-4 text-xl text-gray-500">The architects of the Sovereign Vault.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Changed grid for 4 leaders */}
            {[
              { name: 'Shreyas', role: 'CEO & Founder', bio: 'Visionary behind the Sovereign Work OS mandate and 15+ years in secure systems.' },
              { name: 'Sujay', role: 'CTO', bio: 'Lead architect of the 4-Layer Agentic Core and AES-256-GCM implementation.' },
              { name: 'Rahul', role: 'Head of Web Operations', bio: 'Oversees the deployment and hardened stability of the Aethera platform.' },
              { name: 'Sebastian', role: 'Head of Marketing and Optimizations', bio: 'Drives the market adoption and continuous optimization of the Work OS.' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 w-full object-cover flex items-center justify-center text-gray-400">
                  <Users className="h-16 w-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;