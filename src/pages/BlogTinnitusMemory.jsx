import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Brain, AlertTriangle, CheckCircle, Activity, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import blog3 from "../assets/blog3.png";

const BlogTinnitusMemory = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Can Tinnitus Affect Memory and Focus?",
        text: "Studies suggest tinnitus may impact sleep, concentration, and even memory, making early treatment more important than ever",
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Can Tinnitus Affect Memory and Focus?");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Can Tinnitus Affect Memory and Focus? - Studies suggest tinnitus may impact sleep, concentration, and even memory, making early treatment more important than ever");
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
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Research Article</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Can Tinnitus Affect Memory and Focus?
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Studies suggest tinnitus may impact sleep, concentration, and even memory, making early treatment more important than ever
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
                    src={blog3} 
                    alt="Tinnitus and cognitive function" 
                    className="w-full h-80 object-cover object-center"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-blue-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Beyond the Ringing</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tinnitus is often dismissed as just "ringing in the ears," but emerging research reveals a much more complex picture. The constant internal noise doesn't just affect hearing—it can significantly impact cognitive function, sleep quality, and overall mental well-being.
                  </p>
                </div>

                {/* Cognitive Impact */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Cognitive Connection</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Attention and Focus</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        The constant presence of tinnitus creates a persistent distraction that competes for cognitive resources. This "cognitive load" can make it significantly harder to concentrate on tasks, especially those requiring sustained attention.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Activity className="w-6 h-6 text-purple-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Memory Formation</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Research suggests that the stress and sleep disruption caused by tinnitus can interfere with memory consolidation—the process by which short-term memories are converted to long-term storage.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-emerald-500 mr-3" />
                        <h4 className="text-xl font-bold text-gray-900">Sleep Disruption</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        The quiet of night often makes tinnitus more noticeable, leading to sleep difficulties that further compound cognitive problems and create a vicious cycle of fatigue and decreased mental performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Research Data */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What the Studies Show</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Attention Span</h4>
                      </div>
                      <p className="text-3xl font-bold text-blue-600 mb-2">40%</p>
                      <p className="text-gray-700 text-sm">Reduction in sustained attention ability in people with severe tinnitus</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Activity className="w-5 h-5 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Memory Performance</h4>
                      </div>
                      <p className="text-3xl font-bold text-purple-600 mb-2">25%</p>
                      <p className="text-gray-700 text-sm">Decrease in working memory capacity compared to controls</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Sleep Quality</h4>
                      </div>
                      <p className="text-3xl font-bold text-orange-600 mb-2">60%</p>
                      <p className="text-gray-700 text-sm">Of tinnitus sufferers report significant sleep disturbances</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Treatment Benefit</h4>
                      </div>
                      <p className="text-3xl font-bold text-green-600 mb-2">70%</p>
                      <p className="text-gray-700 text-sm">Improvement in cognitive function with proper tinnitus management</p>
                    </div>
                  </div>
                </div>

                {/* Mechanisms */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Tinnitus Affects Cognition</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Understanding the mechanisms behind tinnitus-related cognitive changes helps explain why early intervention is so crucial.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-blue-900 mb-4">Neural Resource Competition</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The brain has limited processing capacity. When significant neural resources are devoted to processing tinnitus signals, less capacity remains for other cognitive tasks like memory formation and attention.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-emerald-900 mb-4">Stress Response Activation</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Chronic tinnitus activates the body's stress response system, leading to elevated cortisol levels that can impair memory formation and cognitive flexibility over time.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-purple-900 mb-4">Sleep Architecture Disruption</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Quality sleep is essential for memory consolidation. Tinnitus-related sleep disturbances prevent the brain from properly processing and storing information learned during the day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Treatment and Management */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Protecting Your Cognitive Health</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The good news is that effective tinnitus management can significantly improve cognitive function and overall quality of life.
                  </p>
                  <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-emerald-900 mb-6">Evidence-Based Management Strategies</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Sound Therapy</h5>
                            <p className="text-sm text-gray-700">Using background noise to reduce tinnitus perception and cognitive load</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Cognitive Behavioral Therapy</h5>
                            <p className="text-sm text-gray-700">Learning to manage the emotional and cognitive impact of tinnitus</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Sleep Hygiene</h5>
                            <p className="text-sm text-gray-700">Creating optimal conditions for restorative sleep</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Stress Management</h5>
                            <p className="text-sm text-gray-700">Techniques to reduce the stress response and improve focus</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Hearing Aids</h5>
                            <p className="text-sm text-gray-700">Amplification can reduce tinnitus and improve cognitive function</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h5 className="font-semibold text-gray-900">Mindfulness Training</h5>
                            <p className="text-sm text-gray-700">Building resilience and improving attention control</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">The Path to Better Cognitive Health</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tinnitus doesn't have to control your cognitive abilities. With proper understanding, early intervention, and evidence-based treatment, it's possible to manage tinnitus effectively and maintain optimal cognitive function. The key is recognizing the connection and taking proactive steps to address both the tinnitus and its cognitive impacts.
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
                    This research-based article investigates the cognitive effects of tinnitus, providing insights into how hearing conditions can impact memory, focus, and overall mental well-being.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-orange-900 mb-4">Cognitive Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Attention Reduction</span>
                      <span className="font-bold text-orange-600 ml-4">40% Less</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Memory Performance</span>
                      <span className="font-bold text-orange-600 ml-4">25% Decrease</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 flex-1">Sleep Disturbance</span>
                      <span className="font-bold text-orange-600 ml-4">60% Affected</span>
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
                    <Link to="/blog/balance-hearing" className="block p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Balance and Hearing Link</h4>
                      <p className="text-xs text-gray-600">Surprising connections between hearing and balance...</p>
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Experiencing Tinnitus?</h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">Don't let tinnitus affect your cognitive function. Early intervention can make a significant difference.</p>
                  <Link 
                    to="/appointment" 
                    className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 w-full justify-center"
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Get Professional Help
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

export default BlogTinnitusMemory;
