import { useEffect } from "react";
import {
  Award,
  Star,
  Shield,
  Zap,
  Phone,
  Calendar,
  TrendingUp,
  Radio,
  Headphones,
  Volume2,
  Mic,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const brands = [
  {
    id: 1,
    name: "Widex Hearing Aids",
    icon: "/images/Widex.jpg", // ✅ Image from public folder
    description:
      "Widex is one of the largest manufacturers of hearing aids and takes pride in being a family-owned company. They offer a wide range of hearing aids and innovative solutions for conditions like tinnitus.",
    color: "white",
    link: "https://www.widex.com/en-us/hearing-aids",
  },
  {
    id: 2,
    name: "Starkey Hearing Aids",
    icon:"/images/Starkey.jpg",
    description: "Starkey Hearing Technologies is an American-owned and operated hearing aid manufacturer. They offer invisible hearing aids, smartphone-compatible models and even hearing aids that track your activity.",
    color: "white",
    link: "https://www.starkey.com/hearing-aids"
  },
  {
    id: 3,
    name: "Unitron Hearing Aids",
    icon: "/images/Unitron.jpg",
    description: "Unitron is a Canadian-based manufacturer who has won numerous awards. Looking for an especially discreet hearing aid? Ask us about Unitron's super-small hearing aids.",
    color: "white",
    link: "https://www.unitron.com/us/en_us/products.html"
  },
  {
    id: 4,
    name: "Signia Hearing Aids",
    icon: "/images/Signia.jpg",
    description: "Signia offers advanced hearing aids that deliver natural sound and personalized solutions. They are known for their sleek design and innovative technology, including direct streaming and rechargeable options.",
    color: "white",
    link: "https://www.signiausa.com/hearing-aids/"
  },
  {
    id: 5,
    name: "Oticon Hearing Aids",
    icon: "/images/Oticon.jpg",
    description: "Oticon's mission is to empower people to communicate freely and naturally. They've been a world-class manufacturer since 1904.",
    color: "white",
    link: "https://www.oticon.com/solutions"
  },
  {
    id: 6,
    name: "ReSound Hearing Aids",
    icon: "/images/ReSound.jpg",
    description: "ReSound has more than 140 years of experience creating innovative hearing solutions including \"intelligent\" hearing aids, hearables, and even apps.",
    color: "white",
    link: "https://www.resound.com/en-us/hearing-aids/resound-hearing-aids"
  },
  {
    id: 7,
    name: "Rexton Hearing Aids",
    icon: "/images/Rexton.jpg",
    description: "Available through medical professionals specially-trained to fit them Rexton hearing aids are reasonably priced and offer excellent sound quality.",
    color: "white",
    link: "https://www.rexton.com/en/hearing-aids"
  },
  {
    id: 8,
    name: "Phonak Hearing Aids",
    icon: "/images/Phonak.jpg",
    description: "One of the largest hearing aid manufacturers in the world, Phonak is a Swiss company who distributes hearing aids in more than 100 countries worldwide. Phonak's hearing solutions include smart apps, rechargeable options, and \"super discreet\" hearing aids.",
    color: "white",
    link: "https://www.phonak.com/us/en/hearing-aids.html"
  }
];

const BrandCard = ({ brand, index }) => {
  const Icon = brand.icon;

  // Set size for Unitron (id: 3) to match other cards
  const imageSize = brand.id === 3 ? "w-40 h-40" : "w-40 h-40";

  return (
    <div
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:scale-[1.02] group"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Brand Image/Icon Area */}
      <div
        className={`bg-gradient-to-br ${brand.color} p-10 flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10 bg-white/30 backdrop-blur-md rounded-3xl p-8">
          {typeof brand.icon === "string" ? (
            <img
              src={brand.icon}
              alt={brand.name}
              className={`${imageSize} object-contain rounded-xl`}
            />
          ) : (
            <Icon className={`${imageSize} text-blue-600`} />
          )}
        </div>
      </div>

      {/* Brand Content */}
      <div className="p-6">
        <a
          href={brand.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 group-hover:text-blue-600 transition-colors"
        >
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {brand.name}
          </h3>
        </a>
        <p className="text-gray-700 leading-relaxed">{brand.description}</p>
      </div>
    </div>
  );
};


const HearingAidBrands = () => {
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
      
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center" data-aos="fade-down">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hearing Aid Brands in Islamabad
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-white-400 to-white-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            The right hearing aid depends on your lifestyle, type and severity of hearing loss, and insurance coverage. Whether you need advanced features or simple conversation support, The Hearing Care Clinic offers top brands and expert guidance to help you choose the perfect fit.
          </p>
          
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center" data-aos="zoom-in">
         
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to find out which hearing aid option will be best for your situation?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our experienced audiologists will help you choose the perfect hearing aid brand and model based on your unique needs, lifestyle, and budget.
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="block overflow-visible py-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Choose Our Hearing Aid Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert guidance in selecting the perfect hearing aid brand for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Top Brands</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to leading hearing aid manufacturers and the latest technology
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional audiologists to help you make the right choice
              </p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-lg">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Personalized Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom fitting and programming tailored to your hearing profile
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

export default HearingAidBrands;