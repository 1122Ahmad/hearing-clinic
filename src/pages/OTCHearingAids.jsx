import { useEffect } from "react";
import { ShoppingCart, DollarSign, AlertCircle, CheckCircle, Stethoscope, Volume2, Settings, TrendingDown, Brain, Users, Phone, Calendar, Sparkles, TestTube, Sliders } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const infoSections = [
  {
    id: 1,
    title: "Why Does Treating Hearing Loss Have to Start With a Hearing Test?",
    icon: TestTube,
    content: "There are some forms of hearing loss that can't be effectively treated with over-the-counter sound amplifiers because it's too severe or too complex. A hearing test is the only way to identify the level and type of hearing loss. That's why the knowledge obtained by the hearing test will allow us to help you get the best hearing aid for you and the best fit. It's essential to be aware of which frequencies you are having a hard time hearing so that we can be sure your hearing aids are set up for your hearing loss needs.",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Volume is Not The Only Significant Factor",
    icon: Sliders,
    content: "Hearing aids are not simply little sound-amplifying speakers. Hearing aids need to be fine-tuned to address the frequencies that you're having trouble hearing in a similar way that prescription glasses need to target your particular vision needs. Clear hearing absolutely depends on a properly tuned device. When it comes to investing in hearing aids, an initial hearing test is essential, but in order to be sure your device continues to address your present level of hearing loss, a yearly appointment is also important.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 3,
    title: "Another Important Feature is the Ability to Filter Out Background Noise",
    icon: Settings,
    content: "Professional hearing aids also have some other features that over-the-counter amplifiers lack. Modern hearing aids allow voices to be heard more clearly by using artificial intelligence to filter out background noise. Contemporary hearing aids also often have some advanced features like step tracking, tinnitus control, and Bluetooth connectivity, allowing them to pair wirelessly with your cellphone or smart TV.",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 4,
    title: "\"Cheap Hearing Aids\" vs Professional Hearing Aids",
    icon: DollarSign,
    content: "There are other significant health issues linked to hearing loss besides depression and cognitive decline. You can often have other quality of life and health issues. Neglected hearing loss can also raise healthcare costs by as much as 40%. Some research indicates that treating hearing loss can improve cognitive clarity. The health of your hearing, as well as your overall health, depends on getting an evaluation.",
    color: "from-green-500 to-emerald-600"
  }
];

const keyPoints = [
  {
    icon: AlertCircle,
    title: "Health Risks",
    description: "Increased risk of social isolation, cognitive decline, and falling with untreated hearing loss",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: DollarSign,
    title: "Affordable Options",
    description: "New insurance policies and legislation making hearing aids more accessible",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Stethoscope,
    title: "Professional Testing",
    description: "Essential hearing test to identify frequencies and determine proper treatment",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Brain,
    title: "Cognitive Benefits",
    description: "Research shows treating hearing loss can improve cognitive clarity",
    color: "from-purple-500 to-pink-600"
  }
];

const InfoCard = ({ section, index }) => {
  const Icon = section.icon;
  
  return (
    <div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${section.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold flex-1">{section.title}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed">
          {section.content}
        </p>
      </div>
    </div>
  );
};

const KeyPointCard = ({ point, index }) => {
  const Icon = point.icon;
  
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl mb-4 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h4>
      <p className="text-gray-600 leading-relaxed">{point.description}</p>
    </div>
  );
};

const OTCHearingAids = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto" data-aos="fade-down">
          <div className="text-center mb-12">
           
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              OTC Hearing Aids in Islamabad
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 to-green-500 mx-auto mb-8 rounded-full"></div>
          </div>
            <div className="text-lg text-blue-100 leading-relaxed space-y-4">
              <p>
               Even mild hearing loss can raise the risk of isolation, cognitive decline, and falls. Many avoid hearing aids due to cost, but new insurance options and technology make them more affordable. The Hearing Care Clinic helps you find the right solution  and remember, always get professional guidance before using over-the-counter amplifiers.
              </p>
            </div>
          </div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Important Considerations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the key factors in choosing the right hearing solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, index) => (
              <KeyPointCard key={point.title} point={point} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Guidance Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-cyan-100">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg">
            <Stethoscope className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Testing is Essential
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            A professional hearing test will identify which frequencies you are having a hard time hearing and determine if hearing aids can help. That's where the science of hearing loss treatment starts. The clarity of your hearing aids and your ability to understand spoken language will be dependent on factors such as how it's programmed, how the device fits, and whether it has enough power.
          </p>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {infoSections.map((section, index) => (
              <InfoCard key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule a Hearing Test Today
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Getting a hearing test is always the first thing you should do. Schedule a hearing test today to see if hearing aids can help improve your quality of life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Contact Us
            </a>
            <a
              href="/appointment"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Calendar className="w-6 h-6" />
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Professional Hearing Care Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The advantages of professional hearing aid services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Precise Tuning</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional hearing aids are fine-tuned to address specific frequencies you struggle with
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
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Advanced Features</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered noise filtering, Bluetooth connectivity, and smart device integration
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular adjustments and professional care to ensure optimal performance
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

export default OTCHearingAids;