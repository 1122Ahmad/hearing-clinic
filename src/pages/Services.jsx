import { motion } from "framer-motion";
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
      "Professional hearing evaluation using advanced diagnostic equipment to assess your hearing health. Our thorough testing includes pure tone audiometry, speech testing, and tympanometry to provide a complete picture of your auditory system.",
    icon: deafnessIcon,
    bgImage: testingBg,
    route: "/services/hearing-testing",
  },
  {
    label: "Hearing Aid Fittings",
    title: "Personalized Hearing Aid Fittings",
    description:
      "Custom hearing aid selection and fitting tailored to your specific needs and lifestyle. We use real-ear measurements and advanced programming to ensure optimal performance and comfort for your daily activities.",
    icon: aidIcon,
    bgImage: fittingBg,
    route: "/services/fittingBg",
  },
  {
    label: "Hearing Aid Repair",
    title: "Professional Hearing Aid Repair",
    description:
      "Expert repair and maintenance services to keep your hearing aids working at peak performance. From routine cleaning to component replacement, we ensure your devices provide consistent, clear hearing.",
    icon: repairIcon,
    bgImage: repairBg,
    route: "/services/hearing-aid-repair",
  },
  {
    label: "Tinnitus Relief",
    title: "Tinnitus Management & Relief",
    description:
      "Comprehensive tinnitus treatment program combining sound therapy, counseling, and stress management techniques. Our personalized approach helps reduce the impact of tinnitus on your daily life and improves your overall wellbeing.",
    icon: tinnitusIcon,
    bgImage: tinnitusBg,
    route: "/services/tinnitus-relief",
  },
  {
    label: "Hearing Protection",
    title: "Custom Hearing Protection",
    description:
      "Specialized hearing protection solutions for noisy environments, including custom-fitted earplugs for musicians, industrial workers, and recreational activities. Protect your hearing while maintaining sound clarity.",
    icon: hpIcon,
    bgImage: hpBg,
    route: "/services/hearing-protection",
  },
  {
    label: "Earwax Management",
    title: "Safe Earwax Removal",
    description:
      "Professional earwax removal using gentle, medically-approved techniques including microsuction and irrigation. Our safe procedures restore clear hearing and prevent complications from impacted earwax.",
    icon: waxIcon,
    bgImage: waxBg,
    route: "/services/earwax-management",
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card group hover:scale-105"
              >
                {/* Service Icon */}
                <div className="p-6 pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  
                  <h3 className="heading-tertiary text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-body mb-6">{service.description}</p>
                  
                  <a
                    href="/appointment"
                    className="btn-primary w-full text-center block"
                  >
                    Book This Service
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;