import React from "react";
import { motion } from "framer-motion";
import { Ear, Globe, AlertTriangle, Stethoscope, Activity, Headphones, Heart, TrendingUp, Newspaper, Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";

import heroImage from "../assets/heroHearing.png";

// Blog images
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const cards = [
  { 
    id: 1, 
    title: "What is Hearing Loss?", 
    text: "Hearing loss reduces clarity of speech and can lead to social isolation. Early detection helps protect long-term brain function.", 
    icon: Ear,
    features: ["Speech Clarity", "Social Connection", "Brain Function", "Early Detection"]
  },
  { 
    id: 2, 
    title: "How Common Is It?", 
    text: "Over 466 million people worldwide have hearing loss. It has many causes and treatment options—education helps prevention.", 
    icon: Globe,
    features: ["Global Impact", "Multiple Causes", "Treatment Options", "Prevention Focus"]
  },
  { 
    id: 3, 
    title: "Early Signs", 
    text: "Voices seem muffled, trouble in noisy places, turning volume up, avoiding social events, or feeling exhausted from listening.", 
    icon: AlertTriangle,
    features: ["Muffled Voices", "Noise Difficulty", "Volume Increase", "Social Avoidance"]
  },
  { 
    id: 4, 
    title: "Common Causes", 
    text: "Causes include congenital issues, blockages, infections, noise damage, aging, and trauma. Often multiple factors contribute.", 
    icon: Stethoscope,
    features: ["Congenital Issues", "Noise Damage", "Aging Process", "Multiple Factors"]
  },
  { 
    id: 5, 
    title: "Types of Loss", 
    text: "Conductive (blockage — often treatable) and Sensorineural (inner-ear damage — usually permanent). Both can co-exist.", 
    icon: Activity,
    features: ["Conductive Loss", "Sensorineural Loss", "Mixed Types", "Treatment Options"]
  },
  { 
    id: 6, 
    title: "Treatment Options", 
    text: "Modern hearing aids improve clarity using sound balancing, machine learning, Bluetooth, and tinnitus support.", 
    icon: Headphones,
    features: ["Sound Balancing", "Machine Learning", "Bluetooth Connectivity", "Tinnitus Support"]
  },
  { 
    id: 7, 
    title: "Why Treatment Matters", 
    text: "Treatment protects hearing, preserves social connections, and reduces risks of depression, anxiety and cognitive decline.", 
    icon: Heart,
    features: ["Hearing Protection", "Social Connection", "Mental Health", "Cognitive Benefits"]
  },
  { 
    id: 8, 
    title: "Future Trends", 
    text: "Noise pollution and earbuds increase risk worldwide. Early testing and professional care are the best defenses.", 
    icon: TrendingUp,
    features: ["Noise Pollution", "Earbud Risks", "Early Testing", "Professional Care"]
  },
  { 
    id: 9, 
    title: "Latest Research & Tips", 
    text: "Stay informed — new studies on tinnitus, balance, and hearing protection help improve outcomes for those affected.", 
    icon: Newspaper,
    features: ["Tinnitus Studies", "Balance Research", "Protection Methods", "Outcome Improvement"]
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover: { scale: 1.03, y: -4, transition: { duration: 0.2 } },
};

const HearingLoss = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden" aria-label="Hearing clinic hero">
        <img src={heroImage} alt="Happy senior couple" className="absolute inset-0 w-full h-full object-cover brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-center h-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="w-full md:w-3/4 lg:w-2/3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              Stay Connected to Life's Cherished Experiences
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">Regain clear hearing with modern care.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+923001234567" className="btn-accent flex items-center gap-2" aria-label="Call or text us">
                <Phone className="w-4 h-4" />
                Call or Text Us
              </a>
              <a href="/appointment" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-800 flex items-center gap-2" aria-label="Schedule appointment">
                <Calendar className="w-4 h-4" />
                Schedule Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-8">
              <Ear className="w-5 h-5 mr-2 text-blue-800" />
              <span className="text-sm font-semibold text-blue-800">Understanding Hearing Loss</span>
            </div>
            <h2 className="heading-secondary text-blue-800 mb-6">Understanding Hearing Loss</h2>
            <p className="text-body max-w-3xl mx-auto">
              Learn about hearing loss, its causes, and the latest treatment options to help you make informed decisions about your hearing health.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.15 }}
          >
            {cards.map((c) => {
              const IconComponent = c.icon;
              return (
                <motion.article 
                  key={c.id} 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 w-full"
                  variants={cardVariant} 
                  whileHover={{ y: -8 }}
                >
                  {/* Card Header with Clean White Theme */}
                  <div className="relative p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/30 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center">{c.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 min-h-[3.5rem] sm:min-h-[4.5rem] flex items-start">{c.text}</p>
                    </div>
                  </div>

                  {/* Card Body with Features */}
                  <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                        Key Points
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {c.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href="/appointment" 
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300 pointer-events-none"></div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA Button in the middle */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/appointment" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 mx-auto w-fit" aria-label="Get a hearing test">
              <Stethoscope className="w-5 h-5" />
              Get a Hearing Test
            </a>
          </motion.div>
        </div>
      </section>

      {/* Research & Tips Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-8">
              <Newspaper className="w-5 h-5 mr-2 text-blue-800" />
              <span className="text-sm font-semibold text-blue-800">Latest Research & Tips</span>
            </div>
            <h2 className="heading-secondary text-blue-800 mb-6">Latest Research & Tips</h2>
            <p className="text-body max-w-3xl mx-auto">
              Stay informed with the latest developments in hearing health research and practical tips for maintaining your hearing wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {id:1,title:"New Research Aims to Prevent Acquired Hearing Loss",text:"Scientists are exploring how everyday noise, aging, and genetics contribute to hearing loss and developing new strategies to protect the ear before damage occurs.",image:blog1,link:"/blog/prevent-hearing-loss"},
              {id:2,title:"Can Tinnitus Affect Memory and Focus?",text:"Tinnitus doesn't just cause ringing. Studies suggest it may also impact sleep, concentration, and even memory, making early treatment more important than ever.",image:blog3,link:"/blog/tinnitus-memory"},
              {id:3,title:"Social Isolation: The Hidden Challenge of Hearing Loss",text:"Hearing loss can make conversations exhausting, leading many people to withdraw from social situations. Researchers stress the importance of connection and support.",image:blog2,link:"/blog/social-isolation"},
              {id:4,title:"Balance and Hearing: Surprising Link Discovered",text:"New findings show that inner ear health affects balance and posture. Experts recommend regular hearing checkups to reduce fall risk and improve stability.",image:blog4,link:"/blog/balance-hearing"}
            ].map((item) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{ duration: 0.5, ease: "easeOut" }} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="w-full h-56 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      item.id <= 2 ? 'object-center' : 'object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Text */}
                <div className="p-8">
                  <h3 className="heading-tertiary text-gray-900 mb-4 leading-tight">{item.title}</h3>
                  <p className="text-body mb-6">{item.text}</p>
                  
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 group-hover:gap-3 gap-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-300 transition-colors duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Control of Your Hearing Health?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let hearing loss affect your quality of life. Schedule a comprehensive hearing evaluation with our specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary bg-white text-blue-900 hover:bg-blue-100">
              Schedule Hearing Test
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HearingLoss;
