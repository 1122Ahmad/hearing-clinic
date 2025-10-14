import { motion } from "framer-motion";

const services = [
  {
    label: "Hearing Testing",
    title: "Hearing Testing",
    description:
      "Hearing testing is a detailed and systematic evaluation of how well you can detect, process, and understand different types of sounds in everyday environments. It goes far beyond a simple screening and involves multiple clinically proven tests that provide a complete picture of your ear and auditory system. The process typically begins with a case history, where the audiologist discusses any hearing concerns, medical conditions, noise exposure, medication use, and communication challenges. This helps identify possible causes of hearing difficulties and guides the selection of appropriate tests. The assessment usually starts with otoscopic examination, where the audiologist looks inside the ear canal to check for earwax buildup, infections, or abnormalities. After this, pure tone audiometry is conducted using headphones or bone conduction devices. In this test, you listen to different tones at various pitches and volumes to determine the softest sounds you can hear. The results are recorded on an audiogram, which shows the degree (mild to profound) and type (conductive, sensorineural, or mixed) of hearing loss. Next, speech audiometry measures how well you can detect and understand spoken words at different loudness levels. This is crucial because real-life communication depends on speech clarity, not just hearing tones. Tests like Speech Reception Threshold (SRT) and Word Recognition Score (WRS) help determine how clearly you can understand voice in quiet or noisy environments. To evaluate the health of the middle ear, tympanometry is performed. This test measures how the eardrum moves in response to changes in air pressure, helping identify conditions such as fluid in the middle ear, eardrum perforations, or Eustachian tube dysfunction. In some cases, additional tests like acoustic reflexes or Otoacoustic Emissions (OAEs) may be used to assess nerve and cochlear function, especially in children or individuals who cannot complete traditional tests. Once all results are collected, the audiologist explains your hearing profile in clear, understandable terms and discusses how it may affect daily communication. If hearing loss is present, personalized treatment options are recommended—which may include hearing aids, medical referral, assistive listening devices, or auditory therapy. Regular hearing testing is essential not only for early detection of problems but also for preventing further damage, improving communication, enhancing social interactions, and maintaining overall cognitive and emotional wellbeing.",
    icon: "../assets/deafness.png",
    bgImage: "../assets/testing-bg.png",
    route: "/services/hearing-testing",
  },
  {
    label: "Hearing Aid Fittings",
    title: "Hearing Aid Fittings",
    description:
      "Hearing aid fitting is a highly personalized and collaborative process designed to ensure you receive the most effective hearing solution tailored to your specific hearing loss, lifestyle, and daily communication needs. The journey begins with a detailed consultation where the audiologist reviews your hearing test results and discusses your listening environments—such as work, social settings, or quiet home situations—to determine the most appropriate hearing aid style and technology level. Factors like comfort, cosmetic preference, manual dexterity, connectivity features (Bluetooth, phone streaming), and budget are also considered. Once the ideal device is selected, the hearing aids are professionally programmed using advanced software based on your audiogram. This helps deliver the right level of amplification for each frequency where hearing loss exists. To ensure accuracy in real-world listening, real-ear measurements (REM) are performed by placing a tiny microphone in the ear canal to verify that the hearing aid output matches your prescribed targets. This step is essential for natural sound quality and speech clarity. After initial programming, the audiologist provides guidance on how to insert, remove, clean, and maintain the devices. You will also learn how to use volume controls, program settings, and any smartphone or remote-control features. Because every ear and brain adapts differently, multiple follow-up appointments are scheduled to fine-tune the settings based on your listening experiences. These visits allow for adjustments to improve comfort, reduce background noise, enhance speech understanding, and address any challenges in different environments. The fitting process also includes counseling and auditory training, helping you adjust gradually to amplified sounds and rebuild listening confidence. The ultimate goal of hearing aid fitting is not just better hearing—but improved communication, stronger relationships, greater independence, and a better quality of life. With proper fitting and ongoing support, hearing aids become a powerful tool that reconnects you with the world around you.",
    icon: "../assets/Aid.png",
    bgImage: "../assets/fitting-bg.png",
    route: "/services/hearing-aid-fittings",
  },
  {
    label: "Hearing Aid Repair",
    title: "Hearing Aid Repair",
    description:
      "Hearing aid repair is an essential service designed to keep your devices working at peak performance and ensure consistent, clear hearing in your daily life. Because hearing aids are worn regularly and exposed to moisture, earwax, sweat, dust, and accidental drops, they can naturally experience performance issues over time. Common problems include weak or distorted sound, feedback or whistling, sudden loss of volume, physical damage to the shell or tubing, battery drain, or malfunctioning Bluetooth and connectivity features. Our professional hearing aid repair service begins with a thorough inspection and diagnostic evaluation to identify the root cause of the problem. We then perform deep cleaning and wax removal, as buildup is one of the most common reasons hearing aids stop working properly. If needed, we replace small but critical components such as microphones, speakers (receivers), tubing, domes, wax filters, or battery doors. For more advanced digital devices, we provide software updates, reprogramming, and fine-tuning to ensure the hearing aid matches your current hearing levels and listening environments. In cases of physical damage or internal electronic failure, we offer both in-house repair and manufacturer repair services depending on the severity and warranty status. Minor issues can often be fixed same-day or within minutes, while more complex repairs may require sending the device to the original manufacturer. We also educate you on proper daily care, cleaning techniques, and storage to help prevent future issues. Routine maintenance and timely repairs not only extend the lifespan of your hearing aids, but also ensure you continue to hear comfortably and confidently in all situations. Our goal is to keep your hearing aids reliable, high-performing, and ready to support your quality of life every day.Hearing aid repair is an essential service designed to keep your devices working at peak performance and ensure consistent, clear hearing in your daily life. Because hearing aids are worn regularly and exposed to moisture, earwax, sweat, dust, and accidental drops, they can naturally experience performance issues over time. Common problems include weak or distorted sound, feedback or whistling, sudden loss of volume, physical damage to the shell or tubing, battery drain, or malfunctioning Bluetooth and connectivity features. Our professional hearing aid repair service begins with a thorough inspection and diagnostic evaluation to identify the root cause of the problem. We then perform deep cleaning and wax removal, as buildup is one of the most common reasons hearing aids stop working properly. If needed, we replace small but critical components such as microphones, speakers (receivers), tubing, domes, wax filters, or battery doors. For more advanced digital devices, we provide software updates, reprogramming, and fine-tuning to ensure the hearing aid matches your current hearing levels and listening environments. In cases of physical damage or internal electronic failure, we offer both in-house repair and manufacturer repair services depending on the severity and warranty status. Minor issues can often be fixed same-day or within minutes, while more complex repairs may require sending the device to the original manufacturer. We also educate you on proper daily care, cleaning techniques, and storage to help prevent future issues. Routine maintenance and timely repairs not only extend the lifespan of your hearing aids, but also ensure you continue to hear comfortably and confidently in all situations. Our goal is to keep your hearing aids reliable, high-performing, and ready to support your quality of life every day.",
    icon: "../assets/repair.png",
    bgImage: "../assets/repair-bg.png",
    route: "/services/hearing-aid-repair",
  },
  {
    label: "Tinnitus Relief",
    title: "Tinnitus Relief",
    description:
      "Tinnitus relief is a comprehensive and individualized approach designed to help people manage the constant ringing, buzzing, or humming sounds in their ears that often interfere with daily life. Rather than focusing only on eliminating the sound—which is not always possible—treatment aims to reduce the emotional and physical burden tinnitus can cause. Many individuals with tinnitus experience difficulty sleeping, concentrating, relaxing, or communicating, and may also develop stress, anxiety, or irritability. Our tinnitus relief program addresses all of these areas through evidence-based strategies that target both the auditory system and the brain’s emotional response. The process often begins with a detailed assessment to understand the severity, triggers, and impact of your tinnitus. From there, a personalized treatment plan is created. Counseling and education play a key role, helping you understand what tinnitus is, why it occurs, and how the brain processes it. This knowledge reduces fear and anxiety, which can make tinnitus seem louder. Sound therapy is another powerful tool, using calming background sounds, noise generators, hearing aids with masking features, or tinnitus retraining devices to reduce the contrast between tinnitus and silence. Over time, this helps the brain become less sensitive to the noise, making it less noticeable. Relaxation and stress management techniques, such as breathing exercises, mindfulness, and cognitive-behavioral strategies, help break the stress-tinnitus cycle. For those with hearing loss, hearing aids can significantly reduce tinnitus by improving overall sound input and supporting healthy auditory function. Every treatment plan is tailored to your lifestyle, emotional needs, and daily challenges. The ultimate goal of tinnitus relief is to retrain the brain, build coping skills, and restore a sense of peace and control. With proper guidance and support, many individuals find that tinnitus becomes less distracting, less stressful, and far easier to live with—leading to better sleep, sharper focus, improved mood, and a higher quality of life.",
    icon: "../assets/tinnitus.png",
    bgImage: "../assets/tinnitus-bg.png",
    route: "/services/tinnitus-relief",
  },
  {
    label: "Hearing Protection",
    title: "Hearing Protection",
    description:
      "Hearing protection services are designed to safeguard your ears from long-term damage caused by loud environments, occupational noise, or frequent exposure to high-volume activities. Whether you work in a noisy industry, enjoy concerts or motorsports, play music, or have sensitive hearing, protecting your ears is essential to prevent conditions such as tinnitus, noise-induced hearing loss, and sound sensitivity disorders. The process begins with a hearing assessment and lifestyle evaluation to determine your level of noise exposure and specific listening needs. Based on this, custom-fitted ear protection is provided, including musician earplugs that reduce volume evenly while preserving sound clarity, occupational earplugs for workplace safety, swimmer’s earplugs to prevent infections, and high-fidelity or filtered plugs for daily noise sensitivity. Custom devices offer a superior fit, improved comfort, and consistent sound reduction without muffling important sounds. In addition to devices, education on safe listening practices—such as monitoring volume levels, taking listening breaks, and recognizing early signs of hearing damage—is provided. By proactively protecting your ears, you can preserve your hearing health, reduce the risk of tinnitus and permanent hearing loss, and maintain clear listening abilities, ensuring long-term comfort, safety, and quality of life.",
    icon: "../assets/headphones.png",
    bgImage: "../assets/hearProtection-bg.png",
    route: "/services/hearing-protection",
  },
  {
    label: "Earwax Management",
    title: "Earwax Management",
    description:
      "Earwax management is a thorough and professional process designed to safely remove excess or impacted earwax that can interfere with hearing, cause discomfort, or lead to infections. While many people attempt to clean their ears at home using cotton swabs or other tools, these methods often push wax deeper into the ear canal, increasing the risk of blockage, irritation, or damage to the eardrum. Our service uses medically approved and gentle techniques, including microsuction, where a small vacuum gently removes wax under direct visualization; irrigation, which flushes the ear canal with controlled water pressure; and manual extraction using specialized instruments for precise removal. The process begins with a careful assessment of the ear canal and earwax condition, ensuring that the appropriate technique is chosen for each individual. Microsuction, for example, is particularly useful for sensitive ears, children, or those with narrow ear canals, while irrigation may be preferred for softer wax buildup. Throughout the procedure, patient comfort and safety are prioritized, with the audiologist monitoring for any signs of irritation or underlying conditions. Proper earwax removal not only restores clear hearing but also prevents complications such as ear infections, tinnitus, or dizziness caused by wax impaction. In addition, regular earwax management contributes to long-term ear health by keeping the canal clean and allowing natural ear function to continue without obstruction. Beyond the removal itself, patients are provided with guidance on maintaining healthy ears, including tips to prevent wax buildup and recognize early warning signs of blockage. By combining precise techniques, professional care, and education, earwax management ensures optimal hearing, comfort, and overall ear health.",
    icon: "../assets/earwax.png",
    bgImage: "../assets/earwax-bg.png",
    route: "/services/earwax-management",
  },
];


const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-4xl font-bold text-red-600 text-center">Our Services</h2>
      <p className="mt-3 text-gray-700 text-center max-w-2xl mx-auto">
        Explore our clinical and technical services designed to support your hearing health journey.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            ></div>

            {/* Overlay & Content */}
            <div className="relative p-8 bg-gradient-to-br from-white/80 to-blue-50/80 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={service.icon}
                  alt={service.label}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-3xl font-semibold text-blue-800">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-md leading-relaxed">{service.description}</p>
              <a
                href="/contact"
                className="inline-block mt-6 text-green-700 font-medium hover:underline"
              >
                Book this service →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;