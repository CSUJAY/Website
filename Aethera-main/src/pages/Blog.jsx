import { Calendar, User, ArrowRight, Shield, Code, Search, Zap } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useState } from 'react'; // <-- ADD THIS IMPORT

const Blog = () => {
  const posts = [
    {
      title: 'Beyond Encryption: Implementing AES-256-GCM for Data Sovereignty', 
      excerpt: 'A deep dive into the authenticated encryption standard (GCM) that powers the Aethera Sovereign Vault.',
      author: 'Sujay (CTO)', 
      date: 'Apr 1, 2025',
      category: 'Sovereign Vault',
      readTime: '7 min read',
    },
    {
      title: 'The 4-Layer Agentic Core: How to Synthesize Definitive Answers', 
      excerpt: 'Breaking down the Llama3 synthesis process that uses Internal Memory, Web Search, and Scraping.',
      author: 'Shreyas (CEO)',
      date: 'Mar 25, 2025',
      category: 'Agentic Intelligence',
      readTime: '8 min read',
    },
    {
      title: 'Low-Latency WebRTC & The Hybrid Uplink Protocol', 
      excerpt: 'The technical challenges and solutions for multi-user video and external bot deployment (Zoom/Meet/Teams).',
      author: 'Rahul (Head of Web Ops)',
      date: 'Mar 15, 2025',
      category: 'Core Engineering',
      readTime: '6 min read',
    },
    {
      title: 'Marketing Automation with the [CRM:] Business Tag Engine', 
      excerpt: 'Strategies for instant lead capture and pipeline management directly from unstructured meeting data.',
      author: 'Sebastian (Head of Marketing)',
      date: 'Mar 5, 2025',
      category: 'Work OS Strategy',
      readTime: '5 min read',
    },
  ];
  
  // --- ADD STATE FOR NEWSLETTER FORM ---
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await fetch('/api/handle-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formType: 'newsletter',
                email: newsletterEmail,
            }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert('Subscription confirmed. Welcome to the Sovereign System insights.');
            setNewsletterEmail('');
        } else {
            alert('Subscription failed: ' + (data.error || 'Please ensure email is valid.'));
        }
    } catch (error) {
        console.error('Subscription Error:', error);
        alert('A network error occurred. Please try again.');
    } finally {
        setIsSubmitting(false);
    }
  };
  // ------------------------------------

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-20"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">Technical Authority & Insights</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives into Agentic Core development, data sovereignty, and WebRTC protocols from the Aethera team.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 w-full object-cover">
                  {/* Placeholder for blog image - Using specialized icon instead of generic gradient */}
                  <div className="w-full h-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-gray-400">
                    {/* Dynamic Icon based on category - just for placeholder purposes */}
                    {post.category.includes('Vault') ? <Shield className="h-16 w-16 text-cyan-500"/> : post.category.includes('Agentic') ? <Search className="h-16 w-16 text-blue-500"/> : post.category.includes('Engineering') ? <Code className="h-16 w-16 text-indigo-500"/> : <Zap className="h-16 w-16 text-purple-500"/>}
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-cyan-600"> 
                      {post.category}
                    </div>
                    <Link to="#" className="block mt-2">
                      <p className="text-xl font-bold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold"> 
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-16 text-center"> 
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Sovereign System Insights</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get specialized articles on AES-256 encryption, LLM architecture, and executive automation delivered directly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4"> {/* ADD onSubmit handler */}
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={newsletterEmail} // ADD value
                onChange={(e) => setNewsletterEmail(e.target.value)} // ADD onChange
                disabled={isSubmitting} // Disable during submission
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                placeholder="Enter your executive email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50"
                disabled={isSubmitting} // Disable button if submitting
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'} {/* Change text while submitting */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;