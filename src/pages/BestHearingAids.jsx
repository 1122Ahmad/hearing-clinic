import { useState, useEffect } from "react";
import { Ear, Volume2, Settings, CheckCircle, XCircle, Phone, Calendar, Sparkles, Battery, Wind, Wrench } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const hearingAidTypes = [
  {
    id: 1,
    title: "Completely-in-Canal Hearing Aids",
    icon: Ear,
    description:
      "Completely-in-canal (CIC) hearing aids fit entirely inside the ear and are nearly invisible. They’re ideal for those seeking a discreet solution for mild to moderate hearing loss.",
    pros: [
      "Very discreet and almost invisible when worn",
      "Effectively manages mild to moderate hearing loss",
      "Reduced wind noise due to inner-ear placement",
    ],
    cons: [
      "Easily affected by earwax buildup",
      "Shorter battery life than larger models",
      "Limited space for advanced features",
    ],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "In-the-Ear Hearing Aids",
    icon: Volume2,
    description:
      "In-the-ear (ITE) hearing aids sit within the outer ear bowl and are slightly larger than CIC models. They offer more customization and easier handling.",
    pros: [
      "Larger size allows easier handling",
      "Longer battery life than smaller models",
      "Can include more advanced features",
    ],
    cons: [
      "Less discreet than in-canal models",
      "More exposed to wind noise",
      "May feel bulkier for some users",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    title: "In-the-Canal Hearing Aids",
    icon: Settings,
    description:
      "In-the-canal (ITC) hearing aids sit partly inside the ear canal and are partially visible. They balance comfort, power, and subtle appearance.",
    pros: [
      "Comfortable fit for many users",
      "Longer battery life than smaller types",
      "Less visible than behind-the-ear models",
    ],
    cons: [
      "More visible than CIC hearing aids",
      "Earwax buildup can affect performance",
      "Small controls may be harder to adjust",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 4,
    title: "Receiver-in-the-Ear & Behind-the-Ear",
    icon: Battery,
    description:
      "Receiver-in-the-ear (RITE) and behind-the-ear (BTE) models house most parts behind the ear. They connect to an in-ear speaker via a thin wire or tube.",
    pros: [
      "Durable and easily repairable components",
      "Suitable for mild to severe hearing loss",
      "Reliable amplification and clear sound quality",
    ],
    cons: [
      "More visible than smaller designs",
      "May feel less discreet for some users",
      "Can interfere slightly with glasses or masks",
    ],
    color: "from-cyan-500 to-blue-700",
  },
  {
    id: 5,
    title: "Open-Fit Hearing Aids",
    icon: Wind,
    description:
      "Open-fit hearing aids are lightweight BTE devices with a small tube keeping the ear canal open. They provide a natural sound experience with minimal blockage.",
    pros: [
      "Natural sound with open ear canal",
      "Good for high-frequency hearing loss",
      "Comfortable and lightweight design",
    ],
    cons: [
      "Smaller parts can be harder to handle",
      "Slightly more visible than in-canal models",
      "Less effective for severe hearing loss",
    ],
    color: "from-sky-400 to-blue-600",
  },
];

const HearingAidCard = ({ hearingAid, index }) => {
  const Icon = hearingAid.icon;
  
  return (
    <div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${hearingAid.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold flex-1">{hearingAid.title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-6">
          {hearingAid.description}
        </p>

        {/* Pros Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-1.5">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">Pros:</h4>
          </div>
          <ul className="space-y-2">
            {hearingAid.pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-1.5">
              <XCircle className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-gray-800">Cons:</h4>
          </div>
          <ul className="space-y-2">
            {hearingAid.cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const BestHearingAids = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
    <section className="relative text-white py-24 overflow-hidden w-screen max-w-[100vw] -mx-[calc(50vw-50%)]" style={{
        backgroundImage: "url('/images/bannerbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        position: "relative"
        
      }}>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/80"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center" data-aos="fade-down">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hearing Aids in Islamabad
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-white-400 to-white-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Modern hearing aids offer clear sound, advanced features, and superior comfort. Your journey to better hearing starts with finding the right fit for your needs contact us for a consultation to discover your best solution.
          </p>
        </div>
      </section>

      {/* Types of Hearing Aids Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Types of Hearing Aids
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hearing aids are broken down into about five categories in general.
            </p>
          </div>

          {/* Hearing Aid Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hearingAidTypes.map((hearingAid, index) => (
              <HearingAidCard key={hearingAid.id} hearingAid={hearingAid} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-3xl mx-auto text-center" data-aos="zoom-in">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Which model of hearing aids will best suit your needs?
    </h2>
    <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto leading-relaxed">
      The best model for you depends on your hearing loss level and preferences.
      Contact us to find the perfect solution.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        Contact Us
      </a>
      <a
        href="/appointment"
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
      >
        <Calendar className="w-5 h-5" />
        Schedule Appointment
      </a>
    </div>
  </div>
</section>


      {/* Additional Info Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expert Fitting</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional hearing aid fitting services tailored to your unique hearing profile
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Custom Programming</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized settings optimized for your lifestyle and listening environments
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive maintenance, adjustments, and support throughout your hearing journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default BestHearingAids;