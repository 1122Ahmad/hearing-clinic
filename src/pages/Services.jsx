import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Stethoscope, Volume2, Shield, Heart, Headphones, Wrench } from "lucide-react";
import deafnessIcon from "../assets/deafness.png";
import testingBg from "../assets/testing-bg.png";
import aidIcon from "../assets/Aid.png";
import fittingBg from "../assets/fitting-bg.png";
import repairBg from "../assets/repair-bg.png";
import repairIcon from "../assets/repair.png";
import tinnitusIcon from "../assets/tinnitus.png" ;
import tinnitusBg from "../assets/tinnitus-bg.png";
import waxBg from "../assets/earwax-bg.png";
import waxIcon from "../assets/earwax.png";
import hpBg from "../assets/hearProtection-bg.png";
import hpIcon from "../assets/headphones.png";

const services = [
  {
    label: "Hearing Testing",
    title: "Comprehensive Hearing Testing",
    description:
      "Professional hearing evaluation using advanced diagnostic equipment to assess your hearing health. Our thorough testing includes pure tone audiometry, speech testing, and tympanometry.",
    icon: deafnessIcon,
    bgImage: testingBg,
    route: "/services/hearing-testing",
    features: ["Pure Tone Testing", "Speech Testing", "Tympanometry", "Real Ear Testing"],
    iconComponent: Stethoscope
  },
  {
    label: "Hearing Aid Fittings",
    title: "Personalized Hearing Aid Fittings",
    description:
      "Custom hearing aid selection and fitting tailored to your specific needs and lifestyle. We use real-ear measurements and advanced programming to ensure optimal performance.",
    icon: aidIcon,
    bgImage: fittingBg,
    route: "/services/fittingBg",
    features: ["Custom Selection", "Real Ear Testing", "Advanced Setup", "Lifestyle Matching"],
    iconComponent: Headphones
  },
  {
    label: "Hearing Aid Repair",
    title: "Professional Hearing Aid Repair",
    description:
      "Expert repair and maintenance services to keep your hearing aids working at peak performance. From routine cleaning to component replacement, we ensure consistent, clear sound.",
    icon: repairIcon,
    bgImage: repairBg,
    route: "/services/hearing-aid-repair",
    features: ["Expert Repairs", "Routine Care", "Component Repair", "Performance Tuning"],
    iconComponent: Wrench
  },
  {
    label: "Tinnitus Relief",
    title: "Tinnitus Management & Relief",
    description:
      "Comprehensive tinnitus treatment program combining sound therapy, counseling, and stress management techniques. Our personalized approach helps reduce the impact of tinnitus on your daily life.",
    icon: tinnitusIcon,
    bgImage: tinnitusBg,
    route: "/services/tinnitus-relief",
    features: ["Sound Therapy", "Counseling", "Stress Management", "Personalized Care"],
    iconComponent: Volume2
  },
  {
    label: "Hearing Protection",
    title: "Custom Hearing Protection",
    description:
      "Specialized hearing protection solutions for noisy environments, including custom-fitted earplugs for musicians, industrial workers, and recreational activities. Protect your hearing while maintaining sound clarity.",
    icon: hpIcon,
    bgImage: hpBg,
    route: "/services/hearing-protection",
    features: ["Custom Fitted", "Musician Protection", "Industrial Solutions", "Recreational Use"],
    iconComponent: Shield
  },
  {
    label: "Earwax Management",
    title: "Safe Earwax Removal",
    description:
      "Professional earwax removal using gentle, medically-approved techniques including microsuction and irrigation. Our safe procedures restore clear hearing and prevent complications from impacted earwax.",
    icon: waxIcon,
    bgImage: waxBg,
    route: "/services/earwax-management",
    features: ["Microsuction", "Gentle Irrigation", "Safe Procedures", "Prevention Care"],
    iconComponent: Heart
  },
];


const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Our Professional Services</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Comprehensive hearing care solutions designed to improve your quality of life through advanced technology and personalized treatment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
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
              <Stethoscope className="w-5 h-5 mr-2 text-blue-800" />
              <span className="text-sm font-semibold text-blue-800">Professional Services</span>
            </div>
            <h2 className="heading-secondary text-blue-800 mb-6">Our Services</h2>
            <p className="text-body max-w-3xl mx-auto">
              Comprehensive hearing care solutions designed to improve your quality of life through advanced technology and personalized treatment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.iconComponent;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  whileHover={{ y: -8 }}
                >
                  {/* Card Header with Professional Blue Theme */}
                  <div className="relative p-8 pb-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight min-h-[3rem] flex items-center">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-6 min-h-[4.5rem] flex items-start">{service.description}</p>
                    </div>
                  </div>

                  {/* Card Body with Features */}
                  <div className="p-8 pt-6">
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;