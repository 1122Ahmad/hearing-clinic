import { useState, useEffect } from "react";
import { ChevronDown, Search, Phone, Calendar, Share2, Printer, CheckCircle, Battery, Volume2, Wrench, Shield, Droplets, Smartphone, Sparkles, Heart, TrendingUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    id: 1,
    question: "Is Investing In Hearing Aids Worthwhile?",
    answer: "Yes. Hearing aids not only improve hearing but also enhance your overall quality of life. They make conversations easier, boost confidence, reduce anxiety and depression risks, and may even help prevent cognitive decline."
  },
  {
    id: 2,
    question: "Can Tinnitus Symptoms be Reduced by Using Hearing Aids?",
    answer: "Yes, many people with tinnitus find relief using hearing aids. Studies show they ease symptoms in up to 60% of users. If you have ringing in your ears, a hearing test can help determine if hearing aids may help."
  },
  {
    id: 3,
    question: "What Causes Hearing Aids to Have Feedback?",
    answer: "Feedback may occur due to high volume, poor fit, or contact with objects like phones or scarves. Repositioning, lowering volume, or refitting usually solves it. If not, a quick professional adjustment can fix the issue."
  },
  {
    id: 4,
    question: "Is It Possible to Adjust or Reprogram Hearing Aids?",
    answer: "Yes. We can easily adjust or reprogram your hearing aids to suit your environment or comfort. Simply call us for a quick appointment modern models support multiple listening settings."
  },
  {
    id: 5,
    question: "Can Balance be Improved by Using Hearing Aids?",
    answer: "Some research shows people with hearing loss perform better on balance tests when using hearing aids. Treating hearing loss may help improve stability and overall coordination."
  },
  {
    id: 6,
    question: "What Would Cause My Hearing Aid to Quit Working?",
    answer: "Common reasons include low or dead batteries and earwax buildup. Regular cleaning, proper charging, and annual professional maintenance usually prevent most issues and ensure optimal sound quality."
  },
  {
    id: 7,
    question: "Are Hearing Aids Compatible with Cell Phones?",
    answer: "Most modern hearing aids connect via Bluetooth for streaming calls, music, and videos. Some models offer direct smartphone pairing for hands-free use, while others may need a small accessory device."
  },
  {
    id: 8,
    question: "What Level of Water Resistance Does a Hearing Aid Have?",
    answer: "Most hearing aids are water-resistant but not waterproof. Light rain or sweat is fine, but avoid swimming or showers. Keep them dry, clean, and stored in a dehumidifier for long-term reliability."
  },
  {
    id: 9,
    question: "How Often Should Hearing Aids Be Cleaned?",
    answer: "Wipe them daily before bed, follow a monthly cleaning routine, and visit us yearly for professional service. Regular cleaning ensures comfort, durability, and clear sound performance."
  },
  {
    id: 10,
    question: "How Do I Get the Most Out of My Batteries?",
    answer: "Use older batteries first and check expiration dates. Wait 5 minutes after pulling the tab before inserting. Store them in a dry place never in the freezer to maximize battery life."
  },
  {
    id: 11,
    question: "How Do I Deal with Older, Used Hearing Aids?",
    answer: "Donate them to groups like the Starkey Foundation or Lions Club. Your old devices can help others in need, and you may even qualify for a small tax credit for your contribution."
  }
];

const quickTips = [
  { icon: Volume2, title: "Daily Cleaning", description: "Wipe down your hearing aids before bed and store them in their case", color: "from-blue-400 to-blue-600" },
  { icon: Battery, title: "Battery Care", description: "Wait 5 minutes after removing the tab before inserting batteries", color: "from-blue-500 to-blue-700" },
  { icon: Wrench, title: "Regular Adjustments", description: "Schedule annual professional cleanings and adjustments", color: "from-blue-600 to-blue-800" },
  { icon: Shield, title: "Protect from Moisture", description: "Store in a dry place and use a dehumidifier if needed", color: "from-cyan-400 to-blue-600" },
  { icon: Smartphone, title: "Bluetooth Connectivity", description: "Most modern hearing aids can pair with smartphones", color: "from-sky-400 to-blue-600" },
  { icon: Droplets, title: "Water Resistance", description: "Remove before swimming, but light rain is usually okay", color: "from-blue-400 to-cyan-600" }
];

const statistics = [
  { value: 60, suffix: "%", label: "Tinnitus Relief", description: "Users report symptom improvement", icon: Heart },
  { value: 5, suffix: "", label: "Days Battery Life", description: "Average charge duration", icon: Battery },
  { value: 100, suffix: "%", label: "Quality of Life", description: "Improvement in social connections", icon: TrendingUp }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}>
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-gray-700 leading-relaxed whitespace-pre-line bg-gradient-to-b from-blue-50/30 to-transparent">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ stat }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const Icon = stat.icon;

  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true);
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`stat-${stat.label}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [stat.value, stat.label, hasAnimated]);

  return (
    <div
      id={`stat-${stat.label}`}
      className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105 overflow-hidden group"
      data-aos="fade-up"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-4 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
          {count}
          <span className="text-3xl">{stat.suffix}</span>
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.label}</h4>
        <p className="text-gray-600">{stat.description}</p>
      </div>
    </div>
  );
};

const TipCard = ({ tip }) => {
  const Icon = tip.icon;
  return (
    <div
      className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105 overflow-hidden group"
      data-aos="fade-up"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="relative z-10">
        <div className={`bg-gradient-to-br ${tip.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
      </div>
    </div>
  );
};

const HearingAidFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFAQs(faqData);
    } else {
      const filtered = faqData.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFAQs(filtered);
    }
  }, [searchQuery]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Hearing Aid Tips & FAQ",
        url: window.location.href
      });
    } else {
      alert("Share functionality not supported on this browser");
    }
  };

  const handlePrint = () => {
    window.print();
  };

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
        
        <div className="relative w-full max-w-7xl mx-auto px-4 text-center" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hearing Aid Tips & FAQs
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about caring for your hearing aids and maximizing their performance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="/appointment"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Hearing Aid Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real users experiencing better hearing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Quick Hearing Aid Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential care and maintenance advice for optimal performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip, index) => (
              <TipCard key={index} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common hearing aid questions
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8" data-aos="fade-up">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Search className="text-white w-5 h-5" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-20 pr-6 py-5 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-lg text-lg"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-12" data-aos="fade-up">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-gray-700"
            >
              <Share2 className="w-5 h-5 text-blue-600" />
              Share
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-gray-700"
            >
              <Printer className="w-5 h-5 text-blue-600" />
              Print
            </button>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFAQ === faq.id}
                  onToggle={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                />
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg border-2 border-blue-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-4">
                  <Search className="w-10 h-10 text-blue-600" />
                </div>
                <p className="text-xl font-semibold text-gray-700 mb-2">No questions found matching your search.</p>
                <p className="text-gray-500">Try different keywords or browse all questions.</p>
              </div>
            )}
          </div>
        </div>
      </section>

{/* Expert Advice Banner */}
<section className="relative py-12 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
  </div>
  <div className="relative max-w-3xl mx-auto text-center" data-aos="zoom-in">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
      <CheckCircle className="w-10 h-10 text-white" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Still Have Questions?
    </h2>
    <p className="text-lg mb-6 text-blue-100 max-w-xl mx-auto leading-relaxed">
      Our audiologists are here to help. Schedule a free consultation to find the perfect hearing solution for you.
    </p>
    <a
      href="/contact"
      className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
    >
      <Phone className="w-5 h-5" />
      Schedule Free Consultation
    </a>
  </div>
</section>


      {/* Related Resources */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-gray-600">
              Explore more about our hearing care services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/hearing-aids"
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                <Volume2 className="w-24 h-24 text-white relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Best Hearing Aids
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore our selection of top-rated hearing aids for every lifestyle and budget.
                </p>
              </div>
            </a>

            <a
              href="/services"
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-56 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                <Wrench className="w-24 h-24 text-white relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Our Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From testing to fitting and repair, we offer comprehensive hearing care services.
                </p>
              </div>
            </a>

            <a
              href="/contact"
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-56 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                <Phone className="w-24 h-24 text-white relative z-10" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Contact Us
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get in touch with our team to schedule an appointment or ask questions.
                </p>
              </div>
            </a>
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

export default HearingAidFAQ;