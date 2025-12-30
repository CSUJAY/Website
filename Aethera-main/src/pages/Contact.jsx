import { Mail, Phone, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  // State for tracking submission status
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // --- UPDATED handleSubmit with backend fetch logic ---
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
      const response = await fetch('/api/handle-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              formType: 'contact',
              ...formData,
          }),
      });

      // --- NEW ROBUSTNESS CHECK ---
      if (!response.ok) {
        // If the server responded with 404, 500, etc.
        console.error(`Server Error: ${response.status} ${response.statusText}`);
        alert('Submission failed. Server connection error (404/500). Please ensure server is running.');
        return; // Exit the function cleanly
      }
      // ----------------------------

      const data = await response.json(); // This line now only runs for 200/OK status

      if (data.success) {
          alert('Secure Uplink successful. We will contact you soon.');
          setFormData({ name: '', email: '', company: '', message: '' });
      } else {
          alert('Submission failed: ' + (data.error || 'Please check your input.'));
      }
  } catch (error) {
      // This catch is now only for network failures or true JSON parsing errors
      console.error('Submission Error:', error); 
      alert('A network error occurred. Please ensure your server is running and accessible.');
  } finally {
      setIsSubmitting(false);
  }
};
  // -----------------------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const WHATSAPP_LINK = "https://chat.whatsapp.com/HESewWst3e970X0g0eXaRq"; 
  const INSTAGRAM_LINK = "https://www.instagram.com/aethera5785/?utm_source=qr&igsh=ZTRpZjlzMXRsOHB4#"; 

  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">Secure Uplink Initiated</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Contact the Aethera team directly for a secure demonstration or partnership inquiry.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Direct Channels</h2>
              <div className="space-y-8">
                
                {/* Email Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Executive Mail Gateway</h3>
                    <p className="mt-1 text-gray-600 font-bold">aetherameeting@gmail.com</p>
                    <p className="text-gray-500 text-sm">Best for partnership and security inquiries.</p>
                  </div>
                </div>

                {/* WhatsApp Community */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp Community</h3>
                    <p className="mt-1 text-gray-600">Join our community for platform discussions and updates.</p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline text-sm mt-1 inline-block">
                        Join Community Link
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Assistant on Instagram</h3>
                    <p className="mt-1 text-gray-600">Follow Aethera Assistant for feature previews and tips.</p>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold hover:underline text-sm mt-1 inline-block">
                        Follow on Instagram
                    </a>
                  </div>
                </div>
                
                {/* Address/Phone - Kept generic placeholders */}
                 <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-cyan-600" /> 
                  </div>
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

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Secure Demonstration</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm p-3 border"
                    placeholder="Executive Name"
                    disabled={isSubmitting} // Disable during submission
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm p-3 border"
                    placeholder="executive@enterprise.com"
                    disabled={isSubmitting} // Disable during submission
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm p-3 border"
                    placeholder="Fortune 500 Inc."
                    disabled={isSubmitting} // Disable during submission
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Inquiry Details</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm p-3 border"
                    placeholder="Describe your security or automation needs."
                    disabled={isSubmitting} // Disable during submission
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 transition-colors disabled:opacity-50"
                    disabled={isSubmitting} // Disable button if submitting
                  >
                    {isSubmitting ? 'Sending...' : 'Send Secure Message'} {/* Change text while submitting */}
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;