import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Activity, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import blog4 from "../assets/blog4.png";

const BlogBalanceHearing = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Balance and Hearing: Surprising Link Discovered",
        text: "New findings reveal how inner ear health affects balance, posture, and fall risk",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Balance and Hearing: Surprising Link Discovered");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Balance and Hearing: Surprising Link Discovered - New findings reveal how inner ear health affects balance, posture, and fall risk");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            to="/hearingLoss" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hearing Loss
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Activity className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Research Article</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Balance and Hearing: Surprising Link Discovered
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              New findings reveal how inner ear health affects balance, posture, and fall risk
            </p>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Latest Research</span>
              </div>
                      <button 
                        onClick={handleShare}
                        className="flex items-center hover:text-blue-200 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        <span>Share Article</span>
                      </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {/* Featured Image */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={blog4} 
                    alt="Balance and hearing connection" 
                    className="w-full h-80 object-cover object-top"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">The Inner Ear Connection</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The inner ear is home to two critical systems: the cochlea for hearing and the vestibular system for balance. Recent research has uncovered surprising connections between these systems, revealing that hearing health directly impacts our ability to maintain balance and prevent falls.
                  </p>
                </div>

                {/* Key Findings */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What the Research Reveals</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Shared Neural Pathways</h4>
                        <p className="text-gray-700">The brain processes hearing and balance information through interconnected neural networks, meaning damage to one system can affect the other.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Fall Risk Increase</h4>
                        <p className="text-gray-700">Individuals with hearing loss are 3x more likely to experience falls, particularly in noisy environments where spatial awareness is compromised.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cognitive Load Impact</h4>
                        <p className="text-gray-700">Straining to hear requires significant cognitive resources, leaving less mental capacity for balance and spatial awareness tasks.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Data */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Numbers Tell the Story</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                        <h4 className="font-semibold text-gray-900">Fall Risk</h4>
                      </div>
                      <p className="text-3xl font-bold text-orange-600 mb-2">3x Higher</p>
                      <p className="text-gray-700 text-sm">Risk of falls in people with hearing loss compared to normal hearing</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Shield className="w-5 h-5 text-blue-500 mr-2" />
                        <h4 className="font-semibold text-gray-900">Protection</h4>
                      </div>
                      <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
                      <p className="text-gray-700 text-sm">Reduction in fall risk with proper hearing treatment</p>
                    </div>
                  </div>
                </div>

                {/* Mechanisms */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How Hearing Affects Balance</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The connection between hearing and balance operates through several mechanisms that researchers are only beginning to understand fully.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-emerald-900 mb-3">Spatial Awareness</h4>
                      <p className="text-emerald-800">Sound provides crucial spatial cues that help us understand our position in space. When hearing is compromised, these cues are lost, affecting balance.</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-blue-900 mb-3">Cognitive Resources</h4>
                      <p className="text-blue-800">The brain has limited processing capacity. When significant resources are devoted to hearing, less attention can be paid to balance and coordination.</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-purple-900 mb-3">Vestibular Compensation</h4>
                      <p className="text-purple-800">The brain relies on multiple sensory inputs for balance. When hearing is reduced, the vestibular system must work harder, potentially leading to overcompensation and instability.</p>
                    </div>
                  </div>
                </div>

                {/* Prevention and Treatment */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Protecting Your Balance</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Understanding this connection opens new opportunities for preventing falls and maintaining independence, especially as we age.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Prevention Strategies</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Regular hearing evaluations</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Early intervention for hearing loss</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Balance training exercises</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Environmental modifications</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Assistive listening devices</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-800">Regular physical activity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">A Holistic Approach to Health</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This research highlights the importance of treating hearing loss not just as an isolated condition, but as part of overall health and safety. By addressing hearing issues early, we can help prevent falls, maintain independence, and improve quality of life for people of all ages.
                  </p>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* About This Article */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About This Article</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This research-based article examines the surprising connections between hearing health and balance, providing valuable insights for fall prevention and overall well-being.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-emerald-900 mb-4">Balance Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Fall Risk Increase</span>
                      <span className="font-bold text-emerald-600 ml-4">3x Higher</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Risk Reduction</span>
                      <span className="font-bold text-emerald-600 ml-4">40% Less</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Balance Improvement</span>
                      <span className="font-bold text-emerald-600 ml-4">70% Better</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <Link to="/blog/social-isolation" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Social Isolation and Hearing Loss</h4>
                      <p className="text-xs text-gray-600">Understanding the hidden challenges...</p>
                    </Link>
                    <Link to="/blog/prevent-hearing-loss" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Preventing Hearing Loss</h4>
                      <p className="text-xs text-gray-600">New research on protection strategies...</p>
                    </Link>
                    <Link to="/blog/tinnitus-memory" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tinnitus and Memory Connection</h4>
                      <p className="text-xs text-gray-600">How tinnitus may impact cognitive function...</p>
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Concerned About Balance?</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">If you've experienced falls or balance issues, a hearing evaluation might provide important insights.</p>
                  <Link 
                    to="/appointment" 
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full justify-center"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Schedule Assessment
                  </Link>
                </div>

                {/* Share Article */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Article</h3>
                          <div className="flex space-x-3">
                            <button 
                              onClick={handleFacebookShare}
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                            >
                              Facebook
                            </button>
                            <button 
                              onClick={handleTwitterShare}
                              className="flex-1 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300 text-sm font-medium"
                            >
                              Twitter
                            </button>
                          </div>
                        </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBalanceHearing;
