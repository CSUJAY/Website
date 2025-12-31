import { Mail, MessageCircle, MapPin, Send, Instagram, Link as LinkIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfGXIjjRMwor5FODbWghFjf1Shzc0BGb0JItdXcwGUO1YbKdQ/viewform?usp=dialog";
  const WHATSAPP_LINK = "https://chat.whatsapp.com/HESewWst3e970X0g0eXaRq";
  const INSTAGRAM_LINK = "https://www.instagram.com/aethera5785/?utm_source=qr&igsh=ZTRpZjlzMXRsOHB4#";

  return (
    <div className="bg-white">
      {/* SEO */}
      <Helmet>
        <title>Contact Aethera | Secure Demonstration & Partnerships</title>
        <meta
          name="description"
          content="Reach out to the Aethera team for secure demonstrations, partnership inquiries, or join our community. All submissions are handled via Google Forms or direct channels."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">
            Secure Uplink Initiated
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contact the Aethera team directly for a secure demonstration or partnership inquiry.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Direct Channels */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Direct Channels</h2>
              <div className="space-y-8">

                {/* Email */}
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Executive Mail Gateway</h3>
                    <p className="mt-1 text-gray-600 font-bold">aetherameeting@gmail.com</p>
                    <p className="text-gray-500 text-sm">Best for partnership and security inquiries.</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp Community</h3>
                    <p className="mt-1 text-gray-600">Join our community for platform discussions and updates.</p>
                    <a 
                      href={WHATSAPP_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 font-bold hover:underline text-sm mt-1 inline-block"
                    >
                      Join Community Link
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 text-pink-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Assistant on Instagram</h3>
                    <p className="mt-1 text-gray-600">Follow Aethera Assistant for feature previews and tips.</p>
                    <a 
                      href={INSTAGRAM_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-600 font-bold hover:underline text-sm mt-1 inline-block"
                    >
                      Follow on Instagram
                    </a>
                  </div>
                </div>

                {/* Global Nexus */}
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Global Nexus</h3>
                    <p className="mt-1 text-gray-600">
                      Digital HQ (Remote First)<br />
                      Scheduled appointments only.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form Link */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center items-center text-center">
              <LinkIcon className="h-16 w-16 text-cyan-500 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Secure Demonstration</h2>
              <p className="text-gray-600 mb-8 max-w-xs">
                Click below to open our official Google Form. You will receive an immediate confirmation email from Google upon submission.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 transition-colors"
                style={{ maxWidth: '300px' }}
              >
                Open Secure Demo Form
                <Send className="ml-2 h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
