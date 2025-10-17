import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Heart, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import blog2 from "../assets/blog2.jpg";

const BlogSocialIsolation = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Social Isolation: The Hidden Challenge of Hearing Loss",
        text: "Understanding how hearing loss affects social connections and mental well-being",
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Social Isolation: The Hidden Challenge of Hearing Loss");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Social Isolation: The Hidden Challenge of Hearing Loss - Understanding how hearing loss affects social connections and mental well-being");
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
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Research Article</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Social Isolation: The Hidden Challenge of Hearing Loss
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Understanding how hearing loss affects social connections and mental well-being
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
                    src={blog2} 
                    alt="Social isolation and hearing loss" 
                    className="w-full h-80 object-cover object-top"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">The Silent Epidemic</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hearing loss affects more than just our ability to hear sounds. It can create a cascade of social and emotional challenges that many people don't anticipate. When conversations become exhausting and social situations feel overwhelming, many individuals begin to withdraw from the activities and relationships that bring joy to their lives.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Social Withdrawal Happens</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Mental Fatigue</h4>
                        <p className="text-gray-700">Constantly straining to hear and understand conversations can be mentally exhausting, leading to avoidance of social situations.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Embarrassment and Frustration</h4>
                        <p className="text-gray-700">Repeatedly asking people to repeat themselves or misunderstanding conversations can lead to feelings of embarrassment.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Loss of Confidence</h4>
                        <p className="text-gray-700">Difficulty participating in group conversations can erode self-confidence and social skills over time.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Research Findings */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Research Shows</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Recent studies have revealed that individuals with untreated hearing loss are significantly more likely to experience social isolation, depression, and cognitive decline. The connection between hearing health and social well-being is stronger than previously understood.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Users className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Social Impact</h4>
                      </div>
                      <p className="text-gray-700 text-sm">People with hearing loss are 2x more likely to experience social isolation compared to those with normal hearing.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Heart className="w-5 h-5 text-red-500 mr-2" />
                        <h4 className="font-semibold text-gray-900">Mental Health</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Untreated hearing loss increases the risk of depression by 30% and anxiety by 25%.</p>
                    </div>
                  </div>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Breaking the Cycle</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The good news is that addressing hearing loss can significantly improve social connections and overall quality of life. Early intervention and proper treatment can help individuals maintain their social relationships and mental well-being.
                  </p>
                  <div className="bg-emerald-50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">Steps to Stay Connected</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-emerald-800">Seek professional hearing evaluation at the first signs of difficulty</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-emerald-800">Use assistive listening devices in social settings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-emerald-800">Communicate your needs openly with friends and family</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-emerald-800">Join support groups for people with hearing loss</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">The Path Forward</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hearing loss doesn't have to mean social isolation. With proper treatment, support, and understanding, individuals can maintain rich social connections and continue to enjoy meaningful relationships. The key is recognizing the problem early and taking proactive steps to address it.
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
                    This research-based article explores the often-overlooked social and emotional impacts of hearing loss, providing insights into prevention and management strategies.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Key Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Social Isolation Risk</span>
                      <span className="font-bold text-blue-600 ml-4">2x Higher</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Depression Risk</span>
                      <span className="font-bold text-blue-600 ml-4">30% Increase</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Anxiety Risk</span>
                      <span className="font-bold text-blue-600 ml-4">25% Increase</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <Link to="/blog/balance-hearing" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Balance and Hearing: Surprising Link</h4>
                      <p className="text-xs text-gray-600">New findings show inner ear health affects balance...</p>
                    </Link>
                    <Link to="/blog/tinnitus-memory" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tinnitus and Memory Connection</h4>
                      <p className="text-xs text-gray-600">How tinnitus may impact cognitive function...</p>
                    </Link>
                    <Link to="/blog/prevent-hearing-loss" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Preventing Hearing Loss</h4>
                      <p className="text-xs text-gray-600">New research on protection strategies...</p>
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">If you're experiencing social isolation due to hearing difficulties, we're here to help.</p>
                  <Link 
                    to="/appointment" 
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
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

export default BlogSocialIsolation;
