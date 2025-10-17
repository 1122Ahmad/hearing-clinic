import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Shield, Microscope, CheckCircle, AlertTriangle, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";

const BlogPreventHearingLoss = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "New Research Aims to Prevent Acquired Hearing Loss",
        text: "Scientists explore how everyday noise, aging, and genetics contribute to hearing loss and develop new protection strategies",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("New Research Aims to Prevent Acquired Hearing Loss");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("New Research Aims to Prevent Acquired Hearing Loss - Scientists explore how everyday noise, aging, and genetics contribute to hearing loss and develop new protection strategies");
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
              <Microscope className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Research Article</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              New Research Aims to Prevent Acquired Hearing Loss
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Scientists explore how everyday noise, aging, and genetics contribute to hearing loss and develop new protection strategies
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
                    src={blog1} 
                    alt="Hearing protection research" 
                    className="w-full h-80 object-cover object-center"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">The Prevention Revolution</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For decades, hearing loss has been viewed as an inevitable consequence of aging or noise exposure. However, groundbreaking research is challenging this paradigm, revealing new strategies to protect our hearing before damage occurs.
                  </p>
                </div>

                {/* Key Research Areas */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Three Pillars of Prevention</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Noise-Induced Damage</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Researchers are developing new understanding of how noise damages hair cells in the inner ear, leading to innovative protection strategies that go beyond simple volume reduction.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Microscope className="w-6 h-6 text-blue-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Age-Related Changes</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Studies are uncovering the cellular mechanisms behind age-related hearing loss, identifying potential interventions that could slow or prevent these changes.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="w-6 h-6 text-purple-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Genetic Factors</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Genetic research is revealing why some people are more susceptible to hearing loss, opening doors to personalized prevention strategies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Breakthrough Findings */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Breakthrough Discoveries</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Headphones className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Smart Protection</h4>
                      </div>
                      <p className="text-gray-700 text-sm">New smart hearing protection devices can monitor noise exposure in real-time and provide personalized warnings.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Microscope className="w-5 h-5 text-emerald-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Cellular Repair</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Research shows that certain compounds can help repair damaged hair cells, potentially reversing early hearing loss.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Shield className="w-5 h-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Genetic Screening</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Genetic testing can now identify individuals at higher risk, allowing for targeted prevention strategies.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Lifestyle Factors</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Diet, exercise, and stress management have been shown to significantly impact hearing health.</p>
                    </div>
                  </div>
                </div>

                {/* Prevention Strategies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Practical Prevention Methods</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Based on the latest research, here are evidence-based strategies that can help protect your hearing:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-blue-900 mb-4">Environmental Protection</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Use noise-canceling headphones</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Take breaks from loud environments</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Use earplugs at concerts and events</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Keep volume below 60% of maximum</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Choose quiet environments when possible</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Monitor noise levels with apps</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-emerald-900 mb-4">Lifestyle Factors</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Maintain a healthy diet rich in antioxidants</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Exercise regularly to improve circulation</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Manage stress through relaxation techniques</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Get adequate sleep for cellular repair</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Avoid smoking and excessive alcohol</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-800">Stay hydrated for optimal ear function</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future Outlook */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">The Future of Hearing Protection</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As research continues to advance, we're moving toward a future where hearing loss prevention becomes as routine as dental care. Emerging technologies promise to make protection more personalized and effective than ever before.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">2025-2027</div>
                      <p className="text-sm text-gray-700">Smart hearing protection becomes mainstream</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">2028-2030</div>
                      <p className="text-sm text-gray-700">Genetic-based prevention strategies available</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">2030+</div>
                      <p className="text-sm text-gray-700">Cellular repair treatments become available</p>
                    </div>
                  </div>
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
                    This research-based article explores cutting-edge strategies for preventing hearing loss, covering the latest scientific developments in protection and early intervention.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">Prevention Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Smart Protection</span>
                      <span className="font-bold text-purple-600 ml-4">Real-time</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Cellular Repair</span>
                      <span className="font-bold text-purple-600 ml-4">Possible</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Genetic Screening</span>
                      <span className="font-bold text-purple-600 ml-4">Available</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <Link to="/blog/tinnitus-memory" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tinnitus and Memory Connection</h4>
                      <p className="text-xs text-gray-600">How tinnitus may impact cognitive function...</p>
                    </Link>
                    <Link to="/blog/balance-hearing" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Balance and Hearing Link</h4>
                      <p className="text-xs text-gray-600">Surprising connections between hearing and balance...</p>
                    </Link>
                    <Link to="/blog/social-isolation" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Social Isolation and Hearing Loss</h4>
                      <p className="text-xs text-gray-600">Understanding the hidden challenges...</p>
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Protect Your Hearing</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">Don't wait for damage to occur. Start protecting your hearing today with a professional evaluation.</p>
                  <Link 
                    to="/appointment" 
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full justify-center"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Schedule Hearing Test
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

export default BlogPreventHearingLoss;
