import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Star, Heart, Target, Shield, Zap, DollarSign, Phone, Calendar, UserCheck, Microscope } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import Hearingaid from "../assets/HearingAid.jpg";
import background from "../assets/talking.jpg";
import coupleImage from "../assets/couple-ocean.jpg";
import doctorImage from "../assets/cmp.jpeg";
import earWaveImage from "../assets/adv.jpeg";
import audiologistBg from "../assets/aud.jpg"; // Your background image for Audiologist section
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
    title: "Hearing Testing in Islamabad",
    description:
      "The Hearing Care Clinic offers comprehensive hearing testing services...",
    icon: hearingAidIcon,
  },
  {
    label: "Hearing Aid Fittings",
    title: "Hearing Aid Fittings in Islamabad",
    description:
      "Your journey to better hearing starts with a personalized fitting...",
    icon: repairIcon,
  },
  {
    label: "Hearing Aid Repair",
    title: "Hearing Aid Repairs in Islamabad",
    description:
      "Don’t let a malfunctioning hearing aid disrupt your life...",
    icon: aidIcon,
  },
  {
    label: "Tinnitus Relief",
    title: "Tinnitus Relief in Islamabad",
    description:
      "Are you experiencing the persistent ringing or buzzing of tinnitus?",
    icon: tinnitusIcon,
  },
  {
    label: "Hearing Protection",
    title: "Hearing Protection in Islamabad",
    description:
      "At The Hearing Care Clinic we believe in proactive hearing health...",
    icon: protectionIcon,
  },
  {
    label: "Earwax Management",
    title: "Earwax Management in Islamabad",
    description:
      "Excessive earwax can lead to hearing loss, discomfort, and other hearing-related issues...",
    icon: earwaxIcon,
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
        className="h-screen bg-cover bg-center flex items-center px-4 md:px-6 relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
        <div className="max-w-7xl mx-auto text-center text-white relative z-10" data-aos="fade-up">
          <div className="mb-8">
            
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Stay Connected to Life's 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"> Cherished Experiences</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
            Regain Clear Hearing with Professional Care and State-of-the-Art Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a
              href="/contact"
              aria-label="Contact us via call or text"
              className="btn-accent text-lg px-6 sm:px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call or Text Us
            </a>
            <a
              href="/appointment"
              className="btn-secondary border-white text-white hover:bg-white hover:text-blue-800 text-lg px-6 sm:px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <img
                src={doctorImage}
                alt="Audiologist performing ear exam with otoscope"
                className="w-full h-80 lg:h-96 object-cover object-center rounded-xl shadow-lg"
                style={{ 
                  objectPosition: 'center top',
                  imageRendering: 'high-quality',
                  imageRendering: '-webkit-optimize-contrast'
                }}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <h2 className="heading-secondary text-blue-800 mb-6">Comprehensive Hearing Evaluation</h2>
              <p className="text-body mb-6">
                Our specialists perform a full diagnostic assessment to understand your hearing condition. We use the latest technology to deliver precise and reliable results.
              </p>
              <p className="text-body mb-8">
                Whether you've noticed recent changes in hearing or just want a routine check, we create a stress-free and supportive testing experience.
              </p>
              <a href="/appointment" className="btn-primary">
                Schedule Your Evaluation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-2" data-aos="fade-right">
              <img
                src={coupleImage}
                alt="Happy couple embracing by the ocean"
                className="w-full h-80 lg:h-96 object-cover object-center rounded-xl shadow-lg"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="order-1 lg:order-1" data-aos="fade-left">
              <h2 className="heading-secondary text-blue-800 mb-6">Hear Life's Best Moments</h2>
              <p className="text-body mb-6">
                Don't let hearing loss affect your relationships and lifestyle. Enjoy conversations, laughter, and every precious memory with clarity.
              </p>
              <p className="text-body mb-8">
                From quiet moments at home to adventures outdoors, our tailored treatment plans help you reconnect with the world around you.
              </p>
              <a href="/services" className="btn-primary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <img
                src={earWaveImage}
                alt="Ear with digital soundwave overlay"
                className="w-full h-80 lg:h-96 object-cover object-center rounded-xl shadow-lg"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <h2 className="heading-secondary text-blue-800 mb-6">Advanced Hearing Technology</h2>
              <p className="text-body mb-6">
                Our hearing aids are discreet, comfortable, and powered by cutting-edge sound processing. Experience natural, crystal clear audio in any environment.
              </p>
              <p className="text-body mb-8">
                Bluetooth connectivity, rechargeable batteries, and noise canceling features make our devices both practical and powerful.
              </p>
              <a href="/hearing-aids" className="btn-primary">
                View Hearing Aids
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Specialists</h3>
              <p className="text-blue-100">Years of experience in hearing care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-blue-100">Tailored treatment for your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-blue-100">Advanced diagnostic equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-secondary text-blue-800 mb-8">What Our Clients Say</h2>
          <p className="text-body max-w-3xl mx-auto mb-12">
            Our clients consistently praise our friendly, professional service and the way our hearing solutions improve their daily lives. 
            From clearer conversations to enjoying every precious sound, we're committed to helping you reconnect with the world around you.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Review 1 */}
            <div className="card p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <p className="text-body italic mb-6">
                "I was nervous about getting hearing aids, but the team made it so easy. I can hear my grandkids laugh again!"
              </p>
              <p className="font-semibold text-gray-900 mb-2">— Linda S.</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>

            {/* Review 2 */}
            <div className="card p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <p className="text-body italic mb-6">
                "Professional, kind, and incredibly thorough. My hearing test was quick and informative."
              </p>
              <p className="font-semibold text-gray-900 mb-2">— Omar R.</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>

            {/* Review 3 */}
            <div className="card p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <p className="text-body italic mb-6">
                "The hearing aids are so discreet and powerful. I wear them all day without even noticing."
              </p>
              <p className="font-semibold text-gray-900 mb-2">— Ayesha K.</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audiologist Section */}
      <section
        className="section-padding bg-contain bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `url(${audiologistBg})`,
          backgroundPosition: 'center center',
          minHeight: '80vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            How an Audiologist Can Help You Recover the Sounds You Enjoy
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed drop-shadow-md">
            Don't allow the wonderful sounds of your life to be dulled by hearing loss. The joy of clear communication can be rediscovered with professional help.
          </p>
          <p className="text-base sm:text-lg text-white mb-8 leading-relaxed drop-shadow-md">
            We establish the severity and type of hearing loss through advanced testing, then create a personalized treatment plan that may include hearing aids. We'll help you find the best solution and ensure it continues to be effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary bg-white text-blue-900 hover:bg-blue-100">
              Schedule Appointment
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-blue-800 mb-6">Our Services</h2>
            <p className="text-body max-w-3xl mx-auto">
              Comprehensive hearing care solutions designed to improve your quality of life through advanced technology and personalized treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.label} className="card p-6 text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <img
                    src={service.icon}
                    alt={service.label}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="heading-tertiary text-gray-800 mb-3">{service.title}</h3>
                <p className="text-body mb-6">{service.description}</p>
                <a href="/services" className="btn-primary w-full text-center block">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="section-padding bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${Hearingaid})` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight px-4">
            Experience the Difference by Choosing 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"> The Hearing Care Clinic</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Our top priority is the health of your hearing. Our passion is helping you recover the ability to hear clearly, and your satisfaction is our success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              { title: "Regain Clear Hearing", desc: "Your happiness and health are our priority.", icon: Heart },
              { title: "Customized Treatment", desc: "Individual needs determine the best hearing aid solution for you.", icon: Target },
              { title: "Professional Assistance", desc: "Guided by our qualified audiologist throughout the process.", icon: Shield },
              { title: "Optimal Comfort", desc: "Perfect fit from our custom molds and adjustments.", icon: Zap },
              { title: "Budget-Friendly Solutions", desc: "Reasonably priced high-tech hearing aids.", icon: DollarSign },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm border-2 border-white/60 p-6 sm:p-8 text-center hover:from-white/50 hover:to-white/30 transition-all duration-300 shadow-2xl rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/60 to-white/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-white leading-tight drop-shadow-xl">{item.title}</h4>
                  <p className="text-white text-sm sm:text-base leading-relaxed drop-shadow-lg font-semibold">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-lg text-blue-100 mb-8">
            Make an appointment for a free assessment with The Hearing Care Clinic today and hear the difference!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <a href="/appointment" className="btn-accent text-lg px-6 sm:px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Free Assessment
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-800 text-lg px-6 sm:px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


