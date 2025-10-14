import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection"; // Make sure this file exists
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AppointmentPage from "./pages/AppointmentPage";
import HearingLoss from "./pages/HearingLoss";
import HearingAidFAQ from "./pages/HearingAidFAQ";
import BestHearingAids from "./pages/BestHearingAids";
import HearingAidBrands from "./pages/HearingAidBrands";
import OTCHearingAids from "./pages/OTCHearingAids";


const App = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main content with padding to avoid overlap */}
      <main className="pt-[80px] pb-[100px] px-4 min-h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/hearingLoss" element={<HearingLoss />} />
          <Route path="/hearing-aids/faq" element={<HearingAidFAQ />} />
          <Route path="/hearing-aids" element={<BestHearingAids />} />
          <Route path="/hearing-aids/brands" element={<HearingAidBrands />} />
          <Route path="/hearing-aids/otc" element={<OTCHearingAids />} />
        </Routes>

        {/* Contact Section - scrolls naturally */}
        <ContactSection />
      </main>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </>
  );
};

export default App;