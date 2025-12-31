import { Calendar, User, ArrowRight, Shield, Code, Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {

  const posts = [
    {
      title: 'Beyond Encryption: Implementing AES-256-GCM for Data Sovereignty',
      excerpt: 'A deep dive into the authenticated encryption standard (GCM) that powers the Aethera Sovereign Vault.',
      author: 'Sujay (CTO)',
      date: '2025-04-01',
      displayDate: 'Apr 1, 2025',
      category: 'Sovereign Vault',
      readTime: '7 min read',
      isDraft: true
    },
    {
      title: 'The 4-Layer Agentic Core: How to Synthesize Definitive Answers',
      excerpt: 'Breaking down the Llama3 synthesis process that uses Internal Memory, Web Search, and Scraping.',
      author: 'Shreyas (CEO)',
      date: '2025-03-25',
      displayDate: 'Mar 25, 2025',
      category: 'Agentic Intelligence',
      readTime: '8 min read',
      isDraft: true
    },
    {
      title: 'Low-Latency WebRTC & The Hybrid Uplink Protocol',
      excerpt: 'The technical challenges and solutions for multi-user video and external bot deployment (Zoom/Meet/Teams).',
      author: 'Rahul (Head of Web Ops)',
      date: '2025-03-15',
      displayDate: 'Mar 15, 2025',
      category: 'Core Engineering',
      readTime: '6 min read',
      isDraft: true
    },
    {
      title: 'Marketing Automation with the [CRM:] Business Tag Engine',
      excerpt: 'Strategies for instant lead capture and pipeline management directly from unstructured meeting data.',
      author: 'Sebastian (Head of Marketing)',
      date: '2025-03-05',
      displayDate: 'Mar 5, 2025',
      category: 'Work OS Strategy',
      readTime: '5 min read',
      isDraft: true
    },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const GOOGLE_FORM_EMAIL_FIELD_ID = 'entry.839337160';
  const GOOGLE_FORM_BASE_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSceQ5r5SfQvooFdxLBBC_VJ2E0IDGRzUU3BfZzE57lWaR1-Bg/viewform';

  const handleGoogleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!newsletterEmail || !newsletterEmail.includes('@') || isSubmitting) {
      setFormError('Please enter a valid executive email address.');
      return;
    }

    setIsSubmitting(true);

    const prefillUrl =
      `${GOOGLE_FORM_BASE_URL}?${GOOGLE_FORM_EMAIL_FIELD_ID}=${encodeURIComponent(newsletterEmail)}&usp=pp_url`;

    window.open(prefillUrl, '_blank');

    setNewsletterEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white">
      {/* SEO */}
      <Helmet>
        <title>Aethera Blog | Technical Insights & Sovereign Work OS</title>
        <meta
          name="description"
          content="Explore technical insights, AES-256 encryption deep dives, LLM architecture, WebRTC protocols, and executive automation from the Aethera team."
        />
        <meta
          name="keywords"
          content="Aethera, Blog, AES-256-GCM, Sovereign Vault, Agentic Core, Executive Automation, LLM, WebRTC, Technical Articles"
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-cyan-400">
            Technical Authority & Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives into Agentic Core development, data sovereignty, and WebRTC protocols from the Aethera team.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 w-full object-cover">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center text-gray-400">
                    {post.category.includes('Vault')
                      ? <Shield className="h-16 w-16 text-cyan-500" />
                      : post.category.includes('Agentic')
                      ? <Search className="h-16 w-16 text-blue-500" />
                      : post.category.includes('Engineering')
                      ? <Code className="h-16 w-16 text-indigo-500" />
                      : <Zap className="h-16 w-16 text-purple-500" />}
                  </div>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-cyan-600">{post.category}</span>
                      {post.isDraft && (
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Disable link for drafts */}
                    <Link
                      to={post.isDraft ? '#' : '/blog/post-slug'}
                      className={post.isDraft ? 'pointer-events-none opacity-70 block mt-2' : 'block mt-2'}
                    >
                      <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>

                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold">
                        <User className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        {post.isDraft ? (
                          <span className="text-amber-600 font-semibold">Draft in Progress</span>
                        ) : (
                          <>
                            <time dateTime={post.date}>{post.displayDate}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readTime}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Sovereign System Insights</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get specialized articles on AES-256 encryption, LLM architecture, and executive automation delivered directly to your inbox.
            </p>

            <div className="flex justify-center space-x-6 md:space-x-12 mb-10 text-white flex-wrap">
              <div className="flex flex-col items-center p-2">
                <p className="text-4xl font-extrabold text-cyan-400">Expert</p>
                <p className="text-sm text-gray-400">Technical Articles</p>
              </div>
              <div className="flex flex-col items-center p-2">
                <p className="text-4xl font-extrabold text-cyan-400">AES-256</p>
                <p className="text-sm text-gray-400">Encryption Deep Dives</p>
              </div>
              <div className="flex flex-col items-center p-2">
                <p className="text-4xl font-extrabold text-cyan-400">Every Tue</p>
                <p className="text-sm text-gray-400">Delivered Weekly</p>
              </div>
            </div>

            <form onSubmit={handleGoogleFormSubmit} className="max-w-md mx-auto flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => { setNewsletterEmail(e.target.value); setFormError(''); }}
                disabled={isSubmitting}
                className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-white ring-1 ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter your executive email"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Redirecting...' : 'Subscribe'}
              </button>
            </form>

            {formError && <p className="mt-4 text-sm font-medium text-red-400">{formError}</p>}
            <p className="mt-4 text-sm text-gray-500">
              You will be briefly redirected to a Google Form to complete your subscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
