import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import Audiologist from "./pages/Audiologist";
import BlogSocialIsolation from "./pages/BlogSocialIsolation";
import BlogBalanceHearing from "./pages/BlogBalanceHearing";
import BlogPreventHearingLoss from "./pages/BlogPreventHearingLoss";
import BlogTinnitusMemory from "./pages/BlogTinnitusMemory";


const App = () => {
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Debug: Log current location
  console.log('Current location:', location.pathname);
  
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
          <Route path="/audiologist" element={<Audiologist />} />
          <Route path="/hearing-aids/faq" element={<HearingAidFAQ />} />
          <Route path="/hearing-aids" element={<BestHearingAids />} />
          <Route path="/hearing-aids/brands" element={<HearingAidBrands />} />
          <Route path="/hearing-aids/otc" element={<OTCHearingAids />} />
          <Route path="/blog/social-isolation" element={<BlogSocialIsolation />} />
          <Route path="/blog/balance-hearing" element={<BlogBalanceHearing />} />
          <Route path="/blog/prevent-hearing-loss" element={<BlogPreventHearingLoss />} />
          <Route path="/blog/tinnitus-memory" element={<BlogTinnitusMemory />} />
        </Routes>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;