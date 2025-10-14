import React from "react";
import audiologistBg from "../assets/audiologist-bg.jpg"; // Replace with your background image path

const Audiologist = () => {
  return (
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
  );
};

export default Audiologist;
