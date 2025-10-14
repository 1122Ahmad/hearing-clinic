import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/heroHearing.png";
import deafnessIcon from "../assets/deafness.png";
import globalIcon from "../assets/globalIcon.png";
import alertIcon from "../assets/alert.png";
import medicalIcon from "../assets/medical.png";
import typesIcon from "../assets/types.png";
import hearingAidIcon from "../assets/repair.png";
import heartIcon from "../assets/heart.png";
import futureIcon from "../assets/future.png";
import newsIcon from "../assets/news.png";

// Blog images
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog3.png";
import blog3 from "../assets/blog2.png";
import blog4 from "../assets/blog4.png";

const cards = [
  { id: 1, title: "What is Hearing Loss?", text: "Hearing loss reduces clarity of speech and can lead to social isolation. Early detection helps protect long-term brain function.", icon: deafnessIcon },
  { id: 2, title: "How Common Is It?", text: "Over 466 million people worldwide have hearing loss. It has many causes and treatment options—education helps prevention.", icon: globalIcon },
  { id: 3, title: "Early Signs", text: "Voices seem muffled, trouble in noisy places, turning volume up, avoiding social events, or feeling exhausted from listening.", icon: alertIcon },
  { id: 4, title: "Common Causes", text: "Causes include congenital issues, blockages, infections, noise damage, aging, and trauma. Often multiple factors contribute.", icon: medicalIcon },
  { id: 5, title: "Types of Loss", text: "Conductive (blockage — often treatable) and Sensorineural (inner-ear damage — usually permanent). Both can co-exist.", icon: typesIcon },
  { id: 6, title: "Treatment Options", text: "Modern hearing aids improve clarity using sound balancing, machine learning, Bluetooth, and tinnitus support.", icon: hearingAidIcon },
  { id: 7, title: "Why Treatment Matters", text: "Treatment protects hearing, preserves social connections, and reduces risks of depression, anxiety and cognitive decline.", icon: heartIcon },
  { id: 8, title: "Future Trends", text: "Noise pollution and earbuds increase risk worldwide. Early testing and professional care are the best defenses.", icon: futureIcon },
  { id: 9, title: "Latest Research & Tips", text: "Stay informed — new studies on tinnitus, balance, and hearing protection help improve outcomes for those affected.", icon: newsIcon },
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
    <div className="w-full text-gray-800">

      {/* HERO */}
      <section className="relative h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden" aria-label="Hearing clinic hero">
        <img src={heroImage} alt="Happy senior couple" className="absolute inset-0 w-full h-full object-cover brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col justify-center h-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="w-full md:w-3/4 lg:w-2/3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 drop-shadow-md leading-tight">
              Stay Connected to Life's Cherished Experiences
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100/90">Regain clear hearing with modern care.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:0515975059" className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold shadow-md transition" aria-label="Call or text us">
                Call or Text Us
              </a>
              <a href="#book" className="inline-block bg-white/90 text-blue-700 border border-blue-700 px-5 py-3 rounded-lg font-semibold shadow-sm transition hover:bg-white" aria-label="Schedule appointment">
                Schedule Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CARD GRID */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 -mt-16 relative z-20">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {cards.map((c) => (
            <motion.article key={c.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-transparent flex flex-col h-full" variants={cardVariant} whileHover="hover">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 mx-auto flex-shrink-0">
                <img src={c.icon} alt={`${c.title} icon`} className="w-10 h-10 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">{c.title}</h3>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed text-justify flex-grow">{c.text}</p>

              {/* Optional CTA */}
              {c.id === 3 && (
                <a href="#test" className="mt-4 inline-block text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-md shadow-sm self-center" aria-label="Get a hearing test">
                  Get a Hearing Test
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* HEARING TIPS & RESEARCH SECTION */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Hearing Tips & Research</h2>

        <div className="space-y-8">
          {[{id:1,title:"New Research Aims to Prevent Acquired Hearing Loss",text:"Scientists are exploring how everyday noise, aging, and genetics contribute to hearing loss and developing new strategies to protect the ear before damage occurs.",image:blog1},
            {id:2,title:"Can Tinnitus Affect Memory and Focus?",text:"Tinnitus doesn't just cause ringing. Studies suggest it may also impact sleep, concentration, and even memory, making early treatment more important than ever.",image:blog2},
            {id:3,title:"Social Isolation: The Hidden Challenge of Hearing Loss",text:"Hearing loss can make conversations exhausting, leading many people to withdraw from social situations. Researchers stress the importance of connection and support.",image:blog3},
            {id:4,title:"Balance and Hearing: Surprising Link Discovered",text:"New findings show that inner ear health affects balance and posture. Experts recommend regular hearing checkups to reduce fall risk and improve stability.",image:blog4}
          ].map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-2/5 w-full h-48 md:h-auto">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              {/* Text */}
              <div className="md:w-3/5 w-full p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="h-16" />
    </div>
  );
};

export default HearingLoss;
