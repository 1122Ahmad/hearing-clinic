import React from "react";
import audiologistBg from "../assets/audiologist-bg.jpg"; // Replace with your background image path

const Audiologist = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-fixed py-20 px-4 md:px-12 relative"
      style={{ 
        backgroundImage: `url(${audiologistBg})`,
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-center">
            How an Audiologist Can Help You Recover the Sounds You Enjoy
          </h2>
          
          <div className="space-y-6 text-gray-800">
            <p className="text-lg md:text-xl leading-relaxed text-center">
              Don't allow the wonderful sounds of your life to be dulled by hearing loss. The joy of clear communication can be rediscovered with professional help.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              We establish the severity and type of hearing loss through advanced testing, then create a personalized treatment plan that may include hearing aids. We'll help you find the best solution and ensure it continues to be effective.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Are you ready to reconnect with your world? Be proactive about hearing the vibrant sounds around you by scheduling an appointment with The Hearing Care Clinic.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/appointment" 
              className="btn-primary text-center px-8 py-4"
            >
              Schedule Appointment
            </a>
            <a 
              href="/contact" 
              className="btn-secondary text-center px-8 py-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audiologist;
