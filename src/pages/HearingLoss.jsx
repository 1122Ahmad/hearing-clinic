import React from "react";
import { motion } from "framer-motion";
import { Ear, Globe, AlertTriangle, Stethoscope, Activity, Headphones, Heart, TrendingUp, Newspaper, Phone, Calendar } from "lucide-react";

import heroImage from "../assets/heroHearing.png";

// Blog images
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog3.png";
import blog3 from "../assets/blog2.png";
import blog4 from "../assets/blog4.png";

const cards = [
  { id: 1, title: "What is Hearing Loss?", text: "Hearing loss reduces clarity of speech and can lead to social isolation. Early detection helps protect long-term brain function.", icon: Ear },
  { id: 2, title: "How Common Is It?", text: "Over 466 million people worldwide have hearing loss. It has many causes and treatment options—education helps prevention.", icon: Globe },
  { id: 3, title: "Early Signs", text: "Voices seem muffled, trouble in noisy places, turning volume up, avoiding social events, or feeling exhausted from listening.", icon: AlertTriangle },
  { id: 4, title: "Common Causes", text: "Causes include congenital issues, blockages, infections, noise damage, aging, and trauma. Often multiple factors contribute.", icon: Stethoscope },
  { id: 5, title: "Types of Loss", text: "Conductive (blockage — often treatable) and Sensorineural (inner-ear damage — usually permanent). Both can co-exist.", icon: Activity },
  { id: 6, title: "Treatment Options", text: "Modern hearing aids improve clarity using sound balancing, machine learning, Bluetooth, and tinnitus support.", icon: Headphones },
  { id: 7, title: "Why Treatment Matters", text: "Treatment protects hearing, preserves social connections, and reduces risks of depression, anxiety and cognitive decline.", icon: Heart },
  { id: 8, title: "Future Trends", text: "Noise pollution and earbuds increase risk worldwide. Early testing and professional care are the best defenses.", icon: TrendingUp },
  { id: 9, title: "Latest Research & Tips", text: "Stay informed — new studies on tinnitus, balance, and hearing protection help improve outcomes for those affected.", icon: Newspaper },
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-blue-800 mb-6">Understanding Hearing Loss</h2>
            <p className="text-body max-w-3xl mx-auto">
              Learn about hearing loss, its causes, and the latest treatment options to help you make informed decisions about your hearing health.
            </p>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {cards.map((c) => {
              const IconComponent = c.icon;
              return (
                <motion.article key={c.id} className="card p-6 text-center group hover:scale-105 transition-transform duration-300" variants={cardVariant} whileHover="hover">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-800" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-tertiary text-blue-800 mb-3">{c.title}</h3>

                  {/* Text */}
                  <p className="text-body mb-4">{c.text}</p>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA Button in the middle */}
          <div className="text-center mt-12">
            <a href="/appointment" className="btn-primary text-lg px-8 py-4" aria-label="Get a hearing test">
              Get a Hearing Test
            </a>
          </div>
        </div>
      </section>

      {/* Research & Tips Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-blue-800 mb-6">Latest Research & Tips</h2>
            <p className="text-body max-w-3xl mx-auto">
              Stay informed with the latest developments in hearing health research and practical tips for maintaining your hearing wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {id:1,title:"New Research Aims to Prevent Acquired Hearing Loss",text:"Scientists are exploring how everyday noise, aging, and genetics contribute to hearing loss and developing new strategies to protect the ear before damage occurs.",image:blog1},
              {id:2,title:"Can Tinnitus Affect Memory and Focus?",text:"Tinnitus doesn't just cause ringing. Studies suggest it may also impact sleep, concentration, and even memory, making early treatment more important than ever.",image:blog2},
              {id:3,title:"Social Isolation: The Hidden Challenge of Hearing Loss",text:"Hearing loss can make conversations exhausting, leading many people to withdraw from social situations. Researchers stress the importance of connection and support.",image:blog3},
              {id:4,title:"Balance and Hearing: Surprising Link Discovered",text:"New findings show that inner ear health affects balance and posture. Experts recommend regular hearing checkups to reduce fall risk and improve stability.",image:blog4}
            ].map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }} className="card overflow-hidden group hover:scale-105 transition-transform duration-300">
                {/* Image */}
                <div className="w-full h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Text */}
                <div className="p-6">
                  <h3 className="heading-tertiary text-blue-800 mb-3">{item.title}</h3>
                  <p className="text-body">{item.text}</p>
                </div>
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
