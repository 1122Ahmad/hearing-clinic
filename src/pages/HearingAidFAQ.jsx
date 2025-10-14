import { useState, useEffect } from "react";
import { ChevronDown, Search, Phone, Calendar, Share2, Printer, CheckCircle, Battery, Volume2, Wrench, Shield, Droplets, Smartphone, Sparkles, Heart, TrendingUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    id: 1,
    question: "Is Investing In Hearing Aids Worthwhile?",
    answer: "Yes, hearing aids are a worthwhile investment for more than their ability to help you hear better. Hearing aids can help improve your overall quality of life. Because you won't have such a difficult time hearing conversations, hearing aids will help you enjoy social situations and better connect with friends and family.\n\nUntreated hearing loss has also been shown to increase the risks of developing anxiety and depression. Improving your social connections by getting hearing aids can also improve your mood. Even more significantly, the risk of cognitive decline can be reduced, and some cognitive functions can even be improved by using hearing aids."
  },
  {
    id: 2,
    question: "Can Tinnitus Symptoms be Reduced by Using Hearing Aids?",
    answer: "A survey of hearing professionals conducted in 2007 revealed that hearing aids provided some relief to 60% of people with tinnitus symptoms and provided significant relief to nearly 25%. Tinnitus and hearing loss often go hand-in-hand, so to learn if hearing aids might help, you should make an appointment for a hearing test if you have ringing in your ears."
  },
  {
    id: 3,
    question: "What Causes Hearing Aids to Have Feedback?",
    answer: "Your hearing aids may have feedback for a number of reasons, and luckily, they're all fairly easy to fix. The following are a few reasons why a hearing aid may experience feedback and how to make it stop:\n\n• Contact – When you come into physical contact with someone or bump your hearing aid against your phone, you may get a quick bust of feedback. The sound waves traveling to your ear could be obstructed by a scarf or hat, which could also possibly cause some feedback. Your hearing aid should return to normal after a quick adjustment.\n\n• High volume – You will be more likely to experience feedback when the volume on your hearing aid is set to a really loud setting. Your hearing aid may need an adjustment if you repeatedly need the volume turned way up.\n\n• Fit – If your hearing aids don't fit properly, feedback is often the result. Removing and re-inserting them is the simple and quick solution. If that's not helpful, we can help you with an adjustment."
  },
  {
    id: 4,
    question: "Is It Possible to Adjust or Reprogram Hearing Aids?",
    answer: "Yes, it's very easy for us to do an adjustment or reprogramming. Simply give us a call so we can help. Many modern hearing aids can have different settings custom-programmed for different listening environments."
  },
  {
    id: 5,
    question: "Can Balance be Improved by Using Hearing Aids?",
    answer: "There's limited research on this. However, for those who cope with hearing loss, balance can be improved when their hearing loss is treated, according to one study. The results of this study revealed that people with hearing loss did worse on a balance test when their hearing aids were turned off and performed better when they were on."
  },
  {
    id: 6,
    question: "What Would Cause My Hearing Aid to Quit Working?",
    answer: "Much like other technological tools, hearing aids may stop working correctly on occasion. The issue is usually an easy fix, like a low battery. All hearing aids use a battery for power. Depending on which features you are using, you will usually get several days from a single battery charge. You will eventually need to replace even rechargeable batteries. If your hearing aid fails to power up or has poor, or weak sound quality, it could be due to a low battery. Your hearing aid may be in need of a cleaning in other cases. Discomfort, muted sound, and feedback can be the result of a dirty hearing aid. Your hearing aid will be fine if you clean it regularly and take it in once every year for a professional cleaning."
  },
  {
    id: 7,
    question: "Are Hearing Aids Compatible with Cell Phones?",
    answer: "The majority of modern hearing aids can connect to cell phones. A smartphone can be paired via Bluetooth connectivity to most modern hearing aids, and you can get even better control of your hearing aids with the help of one of several available apps. Some hearing aids are even specifically designed to be paired with smartphones. These specific hearing aids not only allow the user to enjoy stereo streaming of music and video content, but they also allow the user to make truly 'hands-free' calls. Other models often require a separate device to facilitate connectivity, unlike these direct connect models. We can demonstrate the technology to you; just come in and see us."
  },
  {
    id: 8,
    question: "What Level of Water Resistance Does a Hearing Aid Have?",
    answer: "Although most hearing aids are somewhat resistant to water, most are not waterproof. That means that if you get caught in a sudden rainstorm or forget to remove them before showering, you'll probably be fine, but it also means that you can't go swimming with them in. It's worth mentioning, though, that a hearing aid will be in its optimal working conditions when it's dry and clean. When a hearing aid is exposed to too much moisture, it causes bacterial growth on the shell and can damage the delicate electronic components inside. Storing your hearing aids in a dry, clean place when you're not wearing them and using a dehumidifier if there is excessive humidity are some practical steps you can take to keep your hearing aids dry."
  },
  {
    id: 9,
    question: "How Often Should Hearing Aids Be Cleaned?",
    answer: "Doing a daily, monthly, and yearly cleaning routine will be your best bet. The first thing to do before going to bed is to wipe down your hearing aids and store them in their case. We will teach you a specific monthly cleaning technique that you should stick to. You should make an appointment with us once every year to have your current level of hearing loss checked and have your hearing aids professionally cleaned."
  },
  {
    id: 10,
    question: "How Do I Get the Most Out of My Batteries?",
    answer: "In order to get the most life out of your batteries, make sure to use up your old ones before replacing them with new ones, and check the expiration date when you buy new batteries to ensure you get the freshest ones. Become familiar with the storage and handling guidelines for zinc since most hearing aid batteries are made of it. Zinc batteries will start to drain right after you pull the activation tab off, for example. However, you could get as many as three additional days of battery life if you pull the tab and then wait five minutes before inserting the battery into your hearing aid. Never put batteries in the freezer because it will make them drain faster; instead, store your batteries in a dry, clean spot when you're not using your hearing aid."
  },
  {
    id: 11,
    question: "How Do I Deal with Older, Used Hearing Aids?",
    answer: "When you get a new pair of hearing aids, you shouldn't throw away your old ones. It's better to donate the old pair so that someone in need can benefit from them. Organizations like the Starkey Foundation and the Lions Club will collect and redistribute used hearing aids. There are plenty of people out there with hearing loss who can't afford to buy hearing aids, and these organizations are dedicated to making sure those people are still able to have the gift of better hearing. You also may qualify for a tax credit in addition to helping people who are less fortunate."
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center" data-aos="fade-down">
          
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