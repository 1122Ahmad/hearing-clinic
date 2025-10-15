import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Star, Heart, Target, Shield, Zap, DollarSign, Phone, Calendar, UserCheck, Microscope, CheckCircle, ArrowRight, Play, Headphones, Stethoscope, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import Hearingaid from "../assets/HearingAid.jpg";
import background from "../assets/talking.jpg";
import coupleImage from "../assets/couple-ocean.jpg";
import doctorImage from "../assets/cmp.jpeg";
import earWaveImage from "../assets/adv.jpeg";
import audiologistBg from "../assets/aud.jpg";
import servicesBg from "../assets/girl-bg.jpg";
import hearingAidIcon from "../assets/headphones.png";
import repairIcon from "../assets/repair.png";
import tinnitusIcon from "../assets/tinnitus.png";
import protectionIcon from "../assets/deafness.png";
import earwaxIcon from "../assets/earwax.png";
import aidIcon from "../assets/Aid.png";

const services = [
  {
    label: "Hearing Testing",
    title: "Comprehensive Hearing Testing",
    description:
      "Professional hearing evaluation using advanced diagnostic equipment to assess your hearing health. Our thorough testing includes pure tone audiometry, speech testing, and tympanometry.",
    icon: hearingAidIcon,
    features: ["Pure Tone Audiometry", "Speech Testing", "Tympanometry", "Real Ear Measurements"]
  },
  {
    label: "Hearing Aid Fittings",
    title: "Personalized Hearing Aid Fittings",
    description:
      "Custom hearing aid selection and fitting tailored to your specific needs and lifestyle. We use real-ear measurements and advanced programming to ensure optimal performance.",
    icon: repairIcon,
    features: ["Custom Selection", "Real Ear Measurements", "Advanced Programming", "Lifestyle Matching"]
  },
  {
    label: "Hearing Aid Repair",
    title: "Professional Hearing Aid Repair",
    description:
      "Expert repair and maintenance services to keep your hearing aids working at peak performance. From routine cleaning to component replacement, we ensure your devices provide consistent, clear hearing.",
    icon: aidIcon,
    features: ["Expert Repairs", "Routine Maintenance", "Component Replacement", "Performance Optimization"]
  },
  {
    label: "Tinnitus Relief",
    title: "Tinnitus Management & Relief",
    description:
      "Comprehensive tinnitus treatment program combining sound therapy, counseling, and stress management techniques. Our personalized approach helps reduce the impact of tinnitus on your daily life.",
    icon: tinnitusIcon,
    features: ["Sound Therapy", "Counseling", "Stress Management", "Personalized Treatment"]
  },
  {
    label: "Hearing Protection",
    title: "Custom Hearing Protection",
    description:
      "Specialized hearing protection solutions for noisy environments, including custom-fitted earplugs for musicians, industrial workers, and recreational activities. Protect your hearing while maintaining sound clarity.",
    icon: protectionIcon,
    features: ["Custom Fitted", "Musician Protection", "Industrial Solutions", "Recreational Use"]
  },
  {
    label: "Earwax Management",
    title: "Safe Earwax Removal",
    description:
      "Professional earwax removal using gentle, medically-approved techniques including microsuction and irrigation. Our safe procedures restore clear hearing and prevent complications from impacted earwax.",
    icon: earwaxIcon,
    features: ["Microsuction", "Gentle Irrigation", "Safe Procedures", "Complication Prevention"]
  },
];


const Home = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-4 md:px-6 relative overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/70"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="max-w-7xl mx-auto text-center text-white relative z-10" data-aos="fade-up">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay Connected to Life's 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200"> Cherished Experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-medium mb-12 text-blue-50 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Regain Clear Hearing with Professional Care and State-of-the-Art Technology
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
          <a
            href="/contact"
            aria-label="Contact us via call or text"
              className="btn-accent text-lg px-8 sm:px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
              <Phone className="w-5 h-5" />
            Call or Text Us
          </a>
            <a
              href="/appointment"
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 sm:px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Comprehensive Hearing Evaluation */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1" 
              data-aos="fade-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
        <img
          src={doctorImage}
          alt="Audiologist performing ear exam with otoscope"
                  className="w-full h-60 lg:h-96 object-cover object-center rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    objectPosition: 'center top',
                    imageRendering: 'high-quality'
                  }}
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center text-blue-800 font-semibold">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Professional Assessment
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2" 
              data-aos="fade-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                  <Volume2 className="w-4 h-4 mr-2 text-blue-800" />
                  <span className="text-sm font-semibold text-blue-800">Advanced Diagnostics</span>
                </div>
                <h2 className="heading-secondary text-blue-800 mb-6">Comprehensive Hearing Evaluation</h2>
              </div>
              <p className="text-body mb-6">
            Our specialists perform a full diagnostic assessment to understand your hearing condition. We use the latest technology to deliver precise and reliable results.
          </p>
              <p className="text-body mb-8">
                Whether you've noticed recent changes in hearing or just want a routine check, we create a stress-free and supportive testing experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/appointment" className="btn-primary flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Your Evaluation
                </a>
                <a href="/services" className="btn-secondary flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Hear Life's Best Moments */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-1 lg:order-1" 
              data-aos="fade-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center bg-emerald-100 rounded-full px-4 py-2 mb-4">
                  <Heart className="w-4 h-4 mr-2 text-emerald-800" />
                  <span className="text-sm font-semibold text-emerald-800">Life's Precious Moments</span>
                </div>
                <h2 className="heading-secondary text-blue-800 mb-6">Hear Life's Best Moments</h2>
              </div>
              <p className="text-body mb-6">
                Don't let hearing loss affect your relationships and lifestyle. Enjoy conversations, laughter, and every precious memory with clarity.
              </p>
              <p className="text-body mb-8">
            From quiet moments at home to adventures outdoors, our tailored treatment plans help you reconnect with the world around you.
          </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/services" className="btn-primary flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Explore Our Services
                </a>
                <a href="/hearingLoss" className="btn-secondary flex items-center justify-center gap-2">
                  <Headphones className="w-4 h-4" />
                  Learn About Hearing Loss
                </a>
        </div>
            </motion.div>
            <motion.div 
              className="order-2 lg:order-2" 
              data-aos="fade-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
        <img
          src={coupleImage}
          alt="Happy couple embracing by the ocean"
                  className="w-full h-80 lg:h-96 object-cover object-center rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center text-emerald-800 font-semibold">
                    <Heart className="w-5 h-5 mr-2" />
                    Quality of Life
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Advanced Hearing Technology */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1" 
              data-aos="fade-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
        <img
          src={earWaveImage}
          alt="Ear with digital soundwave overlay"
                  className="w-full h-80 lg:h-96 object-cover object-center rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center text-blue-800 font-semibold">
                    <Volume2 className="w-5 h-5 mr-2" />
                    Advanced Technology
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2" 
              data-aos="fade-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
                  <Zap className="w-4 h-4 mr-2 text-blue-800" />
                  <span className="text-sm font-semibold text-blue-800">Cutting-Edge Technology</span>
                </div>
                <h2 className="heading-secondary text-blue-800 mb-6">Advanced Hearing Technology</h2>
              </div>
              <p className="text-body mb-6">
            Our hearing aids are discreet, comfortable, and powered by cutting-edge sound processing. Experience natural, crystal clear audio in any environment.
          </p>
              <p className="text-body mb-8">
            Bluetooth connectivity, rechargeable batteries, and noise canceling features make our devices both practical and powerful.
          </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/hearing-aids" className="btn-primary flex items-center justify-center gap-2">
                  <Headphones className="w-4 h-4" />
                  View Hearing Aids
                </a>
                <a href="/hearing-aids/brands" className="btn-secondary flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Explore Brands
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden" data-aos="fade-up">
        {/* Enhanced Gradient System */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-transparent to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-800/30"></div>
        
        {/* Decorative Gradient Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-300/15 to-transparent rounded-full blur-2xl translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-blue-400/10 rounded-full blur-xl -translate-x-32 -translate-y-32"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-semibold">Trusted Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Why Choose Us?
            </h2>
            <p className="text-lg text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We combine decades of expertise with cutting-edge technology to deliver exceptional hearing care that transforms lives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Certified Specialists",
                description: "Years of experience in hearing care",
                features: ["Licensed Audiologists", "Continuing Education", "Professional Certifications"]
              },
              {
                icon: Target,
                title: "Personalized Care",
                description: "Tailored treatment for your needs",
                features: ["Individual Assessment", "Custom Solutions", "Ongoing Support"]
              },
              {
                icon: Microscope,
                title: "Latest Technology",
                description: "Advanced diagnostic equipment",
                features: ["Modern Equipment", "Precision Testing", "Digital Solutions"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/15 hover:to-white/10 hover:border-white/40 transition-all duration-500 group shadow-xl hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-blue-100 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-blue-200">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-300 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
          </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-emerald-50/30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 mr-2 text-blue-800" />
              <span className="text-sm font-semibold text-blue-800">Client Testimonials</span>
            </div>
            <h2 className="heading-secondary text-blue-800 mb-6">What Our Clients Say</h2>
            <p className="text-body max-w-3xl mx-auto mb-12">
            Our clients consistently praise our friendly, professional service and the way our hearing solutions improve their daily lives. 
              From clearer conversations to enjoying every precious sound, we're committed to helping you reconnect with the world around you.
          </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "I was nervous about getting hearing aids, but the team made it so easy. I can hear my grandkids laugh again!",
                author: "Linda S.",
                rating: 5,
                highlight: "Life-changing experience"
              },
              {
                quote: "Professional, kind, and incredibly thorough. My hearing test was quick and informative.",
                author: "Omar R.",
                rating: 5,
                highlight: "Exceptional service"
              },
              {
                quote: "The hearing aids are so discreet and powerful. I wear them all day without even noticing.",
                author: "Ayesha K.",
                rating: 5,
                highlight: "Perfect solution"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                  <Users className="w-10 h-10 text-blue-800" />
              </div>
                <div className="mb-4">
                  <div className="inline-flex items-center bg-emerald-100 rounded-full px-3 py-1 mb-4">
                    <span className="text-xs font-semibold text-emerald-800">{testimonial.highlight}</span>
            </div>
              </div>
                <blockquote className="text-body italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mb-4">
                  <p className="font-bold text-gray-900 text-lg">— {testimonial.author}</p>
            </div>
                <div className="flex justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiologist Section */}
      <section
        className="section-padding bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${audiologistBg})`,
          backgroundPosition: 'center center',
          minHeight: '80vh'
        }}
      >
        {/* Professional Overlay System */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/3 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-200/8 rounded-full blur-lg animate-pulse delay-700"></div>
        
        {/* Professional Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh] py-12">
            {/* Left side - Content */}
            <div className="text-left lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
                  <Stethoscope className="w-5 h-5 mr-2 text-white" />
                  <span className="text-sm font-semibold text-white">Professional Audiologist Care</span>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                How an Audiologist Can Help You Recover the Sounds You Enjoy
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-white/95 mb-6 leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Don't allow the wonderful sounds of your life to be dulled by hearing loss. The joy of clear communication can be rediscovered with professional help.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                We establish the severity and type of hearing loss through advanced testing, then create a personalized treatment plan that may include hearing aids. We'll help you find the best solution and ensure it continues to be effective.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="/appointment" className="btn-primary bg-white text-blue-900 hover:bg-blue-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Schedule Appointment
                </a>
                <a href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </a>
              </motion.div>
            </div>
            
            {/* Right side - Spacer for image visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-emerald-50/20"></div>
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
      {services.map((service, index) => (
              <motion.div
    key={service.label}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Card Header with Icon */}
                <div className="relative p-8 pb-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                      <img
                        src={service.icon}
                        alt={service.label}
                        className="w-10 h-10 object-contain"
          />
        </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  </div>
                </div>

                {/* Card Body with Features */}
                <div className="px-8 pb-6">
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
                  
                  <a 
                    href="/services" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
      </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
    </div>
  </div>
</section>

      {/* Trust Section */}
<section
        className="section-padding bg-cover bg-center text-white relative overflow-hidden"
  style={{ backgroundImage: `url(${Hearingaid})` }}
  data-aos="fade-up"
>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-8 py-4 mb-8 shadow-lg border border-white/20">
                <Award className="w-6 h-6 mr-3 text-yellow-300" />
                <span className="text-base font-bold">Trusted by 500+ Patients</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight px-4 drop-shadow-2xl">
              Experience the Difference by Choosing 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200"> The Hearing Care Clinic</span>
    </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg">
              Our top priority is the health of your hearing. Our passion is helping you recover the ability to hear clearly, and your satisfaction is our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              { title: "Regain Clear Hearing", desc: "Your happiness and health are our priority.", icon: Heart, color: "from-pink-500/20 to-red-500/20" },
              { title: "Customized Treatment", desc: "Individual needs determine the best hearing aid solution for you.", icon: Target, color: "from-blue-500/20 to-cyan-500/20" },
              { title: "Professional Assistance", desc: "Guided by our qualified audiologist throughout the process.", icon: Shield, color: "from-green-500/20 to-emerald-500/20" },
              { title: "Optimal Comfort", desc: "Perfect fit from our custom molds and adjustments.", icon: Zap, color: "from-yellow-500/20 to-orange-500/20" },
              { title: "Budget-Friendly Solutions", desc: "Reasonably priced high-tech hearing aids.", icon: DollarSign, color: "from-purple-500/20 to-indigo-500/20" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index} 
                  className={`bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm border-2 border-white/60 p-6 sm:p-8 text-center hover:from-white/50 hover:to-white/30 transition-all duration-300 shadow-2xl rounded-2xl group`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                    <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
      </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-white leading-tight drop-shadow-xl">{item.title}</h4>
                  <p className="text-white text-sm sm:text-base leading-relaxed drop-shadow-lg font-semibold">{item.desc}</p>
                </motion.div>
              );
            })}
</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-blue-100 mb-8 drop-shadow-lg">
      Make an appointment for a free assessment with The Hearing Care Clinic today and hear the difference!
    </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a href="/appointment" className="btn-accent text-lg px-8 sm:px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-5 h-5" />
                Schedule Free Assessment
              </a>
              <a href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 sm:px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" />
                Contact Us Today
              </a>
            </div>
          </motion.div>
  </div>
</section>
    </div>
  );
};

export default Home;


