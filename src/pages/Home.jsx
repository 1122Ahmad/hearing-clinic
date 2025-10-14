import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Hearingaid from "../assets/HearingAid.jpg";
import background from "../assets/background.jpg";
import coupleImage from "../assets/couple-ocean.jpg";
import doctorImage from "../assets/doctor-otoscope.jpg";
import earWaveImage from "../assets/ear-soundwave.jpg";
import audiologistBg from "../assets/audiologist-bg.jpg"; // Your background image for Audiologist section
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
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-4 md:px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-screen-xl text-left text-[#1D4ED8]" data-aos="fade-up">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Stay Connected to Life's Cherished Experiences
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium drop-shadow-lg">
            Regain Clear Hearing
          </p>
          <a
            href="/contact"
            aria-label="Contact us via call or text"
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-semibold"
          >
            Call or Text Us
          </a>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-6">
        <img
          src={doctorImage}
          alt="Audiologist performing ear exam with otoscope"
          className="w-full h-80 md:h-96 object-cover object-center rounded-xl shadow-md"
          data-aos="fade-right"
        />
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-4">Comprehensive Hearing Evaluation</h2>
          <p className="mb-4">
            Our specialists perform a full diagnostic assessment to understand your hearing condition. We use the latest technology to deliver precise and reliable results.
          </p>
          <p>
            Whether you've noticed recent changes in hearing or just want a routine check, we create a stress free and supportive testing experience.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-6">
        <div className="flex flex-col justify-center order-2 md:order-1" data-aos="fade-right">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-4">Hear Life’s Best Moments</h2>
          <p className="mb-4">
            Don’t let hearing loss affect your relationships and lifestyle. Enjoy conversations, laughter, and every precious memory with clarity.
          </p>
          <p>
            From quiet moments at home to adventures outdoors, our tailored treatment plans help you reconnect with the world around you.
          </p>
        </div>
        <img
          src={coupleImage}
          alt="Happy couple embracing by the ocean"
          className="w-full h-80 md:h-96 object-cover object-center rounded-xl shadow-md order-1 md:order-2"
          data-aos="fade-left"
        />
      </section>

      {/* Section 3 */}
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-6">
        <img
          src={earWaveImage}
          alt="Ear with digital soundwave overlay"
          className="w-full h-80 md:h-96 object-cover object-center rounded-xl shadow-md"
          data-aos="fade-right"
        />
        <div className="flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-4">Advanced Hearing Technology</h2>
          <p className="mb-4">
            Our hearing aids are discreet, comfortable, and powered by cutting-edge sound processing. Experience natural, crystal clear audio in any environment.
          </p>
          <p>
            Bluetooth connectivity, rechargeable batteries, and noise canceling features make our devices both practical and powerful.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-4 md:px-6" data-aos="fade-up">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <ul className="text-left space-y-4 text-lg">
            <li>✅ Certified hearing specialists with years of experience</li>
            <li>✅ Personalized treatment and device fitting</li>
            <li>✅ Friendly, patient focused care</li>
            <li>✅ Latest diagnostic and hearing aid technology</li>
            <li>✅ Ongoing support and adjustments</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 text-center" data-aos="zoom-in">
        <button
          className="bg-[#DC2626] text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#DC2626] border border-[#DC2626] transition duration-300"
          aria-label="Request an appointment"
        >
          Request An Appointment
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 px-4 md:px-6" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-8">What Our Clients Say</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Our clients consistently praise our friendly, professional service and the way our hearing solutions improve their daily lives. 
            From clearer conversations to enjoying every precious sound, we’re committed to helping you reconnect with the world around you.
          </p>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="bg-white py-12 px-4 md:px-6" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-[#1D4ED8] text-3xl font-semibold mb-8">Patient Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Reviewer profile"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <p className="text-gray-700 italic">
                “I was nervous about getting hearing aids, but the team made it so easy. I can hear my grandkids laugh again!”
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Linda S.</p>
              <p className="text-sm text-gray-500">★ ★ ★ ★ ★</p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Reviewer profile"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <p className="text-gray-700 italic">
                “Professional, kind, and incredibly thorough. My hearing test was quick and informative.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Omar R.</p>
              <p className="text-sm text-gray-500">★ ★ ★ ★ ★</p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Reviewer profile"
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <p className="text-gray-700 italic">
                “The hearing aids are so discreet and powerful. I wear them all day without even noticing.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Ayesha K.</p>
              <p className="text-sm text-gray-500">★ ★ ★ ★ ★</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audiologist Section - extension of Home page */}
    <section
      className="h-auto bg-cover bg-center py-20 px-4 md:px-12"
      style={{ backgroundImage: `url(${audiologistBg})` }}
    >
      <div className="max-w-3xl p-8 md:p-12 text-left mx-auto">
        <h2 className="text-[#1D4ED8] text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
          Here's How an Audiologist Can Help You Recover the Sounds You Enjoy
        </h2>
        <p className="text-white mb-4 text-lg md:text-xl drop-shadow-md">
          Don’t allow the wonderful sounds of your life to be dulled by hearing loss. The joy of clear communication can be rediscovered with the help of The Hearing Care Clinic.
        </p>
        <p className="text-white mb-4 text-lg md:text-xl drop-shadow-md">
          We will establish the severity and type of hearing loss that you’re dealing with by using advanced testing. Then, together we will formulate a treatment plan that’s personalized for your needs which may include hearing aids. We will find the best solution for you and help you make sure it continues to be effective. We will help you pick out the right hearing aids, complete a fitting, perform any necessary adjustments, and give you support going forward.
        </p>
        <p className="text-white text-lg md:text-xl drop-shadow-md">
          Are you ready to reconnect with your world? Be proactive about hearing the vibrant sounds around you by scheduling an appointment with The Hearing Care Clinic.
        </p>
      </div>
    </section>

<section className="relative w-full py-16 px-4 md:px-12 bg-white text-gray-800">
  {/* Background Image*/}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center "
    style={{ backgroundImage: `url(${servicesBg})` }}
  ></div>

  <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
    {/* Buttons Column */}
    <div className="w-full md:w-1/3 flex flex-col gap-6 z-10">
      {services.map((service, index) => (
        <button
          key={service.label}
          onClick={() => setActiveService(service)}
          className={`w-full py-6 px-6 text-left rounded-lg text-xl md:text-2xl font-semibold transition-all duration-300
            ${
              activeService?.label === service.label || (!activeService && index === 0)
                ? "bg-red-600 text-white"
                : "bg-white/70 text-red-600 hover:bg-red-100"
            }`}
        >
          {service.label}
        </button>
      ))}
    </div>

    {/* Content Column */}
    <div className="w-full md:w-2/3 z-10 flex items-center justify-center">
      <div className="bg-black/20 text-white p-8 rounded-lg shadow-md max-w-md text-center">
        {/* Icon */}
        <div className="mb-4">
          <img
            src={activeService?.icon || services[0].icon}
            alt={activeService?.label || services[0].label}
            className="w-16 h-16 mx-auto"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4">{activeService?.title || services[0].title}</h3>

        {/* Description */}
        <p className="text-lg mb-6">{activeService?.description || services[0].description}</p>

        {/* Learn More Button */}
        <button
          className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-6 py-3 rounded-md font-semibold border border-red-600 transition duration-300"
          onClick={() => {
            /* Placeholder - later you can use navigate('/service-page') */
            alert("Learn More page coming soon!");
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

{/* Trust Section with Background */}
<section
  className="relative bg-cover bg-center py-20 px-4 md:px-6 text-white"
  style={{ backgroundImage: `url(${Hearingaid})` }}
  data-aos="fade-up"
>
  <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
  <div className="relative max-w-screen-xl mx-auto text-center z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Experience the Difference by Choosing The Hearing Care Clinic
    </h2>
    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
      Our top priority at The Hearing Care Clinic is the health of your hearing. Our passion is all about helping you recover the ability to hear clearly and your satisfaction is our success.
    </p>

    <h3 className="text-2xl font-semibold mb-6 text-white">
      Here’s why People trust us:
    </h3>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
  {[
    { title: "Regain Clear Hearing", desc: "Your happiness and health are our priority." },
    { title: "Customized Treatment Solutions", desc: "Your individual needs will determine if you could benefit from hearing aids and find the best fit." },
    { title: "Professional Assistance", desc: "The entire process will be guided by our qualified audiologist." },
    { title: "Optimal Comfort", desc: "You will get the perfect fit from our custom molds." },
    { title: "Budget-Friendly Solutions", desc: "Reasonably priced high-tech hearing aids." },
  ].map((item, index) => (
    <div key={index} className="relative group rounded-lg overflow-hidden shadow-md">
      {/* Background fill */}
      <div className="absolute inset-0 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content */}
      <div className="relative p-6 z-10 text-white group-hover:text-white font-semibold">
        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  ))}
</div>

    <p className="mt-12 text-lg text-white/90">
      Make an appointment for a free assessment with The Hearing Care Clinic today and hear the difference!
    </p>

    <a
      href="/contact"
      className="mt-6 inline-block px-6 py-3 rounded-md text-lg font-semibold transition duration-300
                 bg-red-600 text-white hover:bg-white hover:text-red-600 border border-red-600"
    >
      Come See Us Today
    </a>
  </div>
</section>



    </div>
  );
};

export default Home;


