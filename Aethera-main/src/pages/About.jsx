import { Award, Users, Target, Heart, Shield, Zap, Key } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="bg-slate-50">

      {/* SEO META TAGS */}
      <Helmet>
        <title>About Aethera | Sovereign AI Work OS & Executive Automation</title>
        <meta
          name="description"
          content="Learn about Aethera, the enterprise-grade Sovereign AI Work OS. Discover our mission, vision, core values, and leadership driving secure AI-powered executive automation."
        />
        <meta
          name="keywords"
          content="Aethera, About, AI Work OS, Sovereign Work OS, Executive Automation, AI Platform, Enterprise AI, Leadership, Data Sovereignty"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-800 to-blue-900 text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-cyan-400">
            The Aethera Mandate — Sovereign AI Work OS
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Architects of the Sovereign Work OS — committed to executive automation and absolute data security.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'Eliminate administrative overhead with a single, encrypted, agentic platform that converts conversation into task-ready action and knowledge.',
              bg: 'bg-cyan-600'
            },
            {
              icon: Shield,
              title: 'Our Vision',
              desc: 'To be the global standard for secure executive intelligence, where absolute data sovereignty (AES-256-GCM) is foundational.',
              bg: 'bg-blue-600'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-md text-white mb-4 ${item.bg}`}>
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm text-cyan-600 font-semibold uppercase tracking-wide">Genesis of Sovereignty</h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
              From Idea to Sovereign Work OS
            </p>
            <p className="mt-2 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Aethera emerged from the need for encrypted, agentic, and fully sovereign executive workflows.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-12 sm:space-y-16">
              {[
                { year: 'Oct 2025', title: 'Founding & Core Thesis', desc: 'Aethera began with the mission to build a Sovereign, privacy-first Work OS.' },
                { year: 'Dec 2025', title: 'Agentic Prototype Built', desc: 'First functional prototype of the Agentic Core and execution pipeline completed.' },
                { year: '2026', title: 'Sovereign Vault — Private Alpha', desc: 'AES-256-GCM encrypted knowledge layer and workflow engine released to early users.' },
                { year: 'Beyond', title: 'Enterprise Sovereignty Rollout', desc: 'Scaling the Work OS for leadership teams, security-critical environments, and global deployments.' }
              ].map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>

                  <div className="z-10 flex items-center justify-center bg-cyan-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-md sm:shadow-lg">
                    <time className="text-white font-semibold text-xs sm:text-sm">{milestone.year}</time>
                  </div>

                  <div className={`w-5/12 bg-white shadow rounded-xl p-4 sm:p-6 border border-gray-100 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{milestone.title}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            {[
              { title: 'Sovereignty', desc: 'Absolute ownership and protection of executive and client data through AES-256-GCM encryption.', icon: Key, bg: 'bg-cyan-50 text-cyan-600' },
              { title: 'Authority', desc: 'Technical depth, engineering rigor, and principled architecture.', icon: Zap, bg: 'bg-blue-50 text-blue-600' },
              { title: 'Automation', desc: 'Relentless elimination of manual executive workflows.', icon: Heart, bg: 'bg-pink-50 text-pink-600' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white shadow-sm hover:shadow-md rounded-xl p-6 sm:p-8 text-center transition-shadow">
                <div className={`inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full mb-4 ${value.bg}`}>
                  <value.icon className="h-6 sm:h-8 w-6 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Meet Our Leaders</h2>
            <p className="mt-2 text-base sm:text-lg text-gray-500">The architects of the Sovereign Vault.</p>
          </div>

          {/* CHANGED TO FLEX FOR SINGLE-LINE HORIZONTAL SCROLL */}
          <div className="flex overflow-x-auto space-x-6 sm:space-x-10 pb-4">
            {[
              { name: 'Shreyas', role: 'CEO & Founder', bio: 'Drives the strategic mandate for Sovereign Work OS adoption.' },
              { name: 'Sujay', role: 'CTO', bio: 'Architect of the Agentic Core and encrypted execution pipeline.' },
              { name: 'Sanjay', role: 'Head of Data & Infrastructure', bio: 'Oversees the secure backend, data sovereignty, and robust platform infrastructure.' },
              { name: 'Rahul', role: 'Head of Web Operations', bio: 'Ensures platform reliability, rollout, and infrastructure resilience.' },
              { name: 'Sebastian', role: 'Head of Marketing & Optimization', bio: 'Leads positioning, strategy, and adoption growth.' }
            ].map((member, idx) => (
              // ADDED w-* AND flex-shrink-0 TO CARD
              <div key={idx} className="bg-white shadow-sm hover:shadow-md rounded-xl overflow-hidden transition-shadow w-64 sm:w-72 flex-shrink-0">
                <div className="h-36 sm:h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                  <Users className="h-12 sm:h-16 w-12 sm:w-16" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-1 sm:mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{member.bio}</p>
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