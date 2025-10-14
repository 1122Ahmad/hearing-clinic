import { Target, Microscope, Heart, Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">About Hearing Clinic Islamabad</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Dedicated to helping you rediscover the sounds of your world through professional, personalized hearing care solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6">Our Mission</h2>
            <p className="text-body mb-6">
              At Hearing Clinic Islamabad, we are passionate about helping you rediscover the sounds of your world. 
              We provide Islamabad with innovative hearing loss solutions and professional, personalized care through 
              comprehensive hearing assessments, compassionate support, and state-of-the-art technology.
            </p>
            <p className="text-body">
              Our deep understanding of hearing loss challenges allows us to provide personalized hearing aid strategies 
              tailored to your specific needs. Our goal is to help you enjoy a fuller life through better hearing.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="heading-tertiary mb-3">Personalized Care</h3>
              <p className="text-body">
                Every treatment plan is customized to your specific hearing needs and lifestyle requirements.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="heading-tertiary mb-3">Advanced Technology</h3>
              <p className="text-body">
                We use the latest diagnostic equipment and hearing aid technology for optimal results.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="heading-tertiary mb-3">Compassionate Support</h3>
              <p className="text-body">
                Our team provides ongoing support and guidance throughout your hearing health journey.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="card p-8 bg-gradient-to-r from-blue-50 to-blue-100">
            <h2 className="heading-secondary text-blue-800 mb-6 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-body">Certified hearing specialists with years of experience</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-body">Latest diagnostic and hearing aid technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-body">Friendly, patient-focused care approach</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-body">Ongoing support and device adjustments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;