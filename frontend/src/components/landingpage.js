import React from "react";
import Navbar from "./Navbar";
import ScanBox from "./scanbox";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import FAQSection from "./FAQSection";
import EasyScanningSection from "./EasyScanningSection";
import Footer from "./Footer";


const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Updated Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
            <span className="text-blue-400">Websecscan</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
            The Website Vulnerability Scanner is a highly-accurate vulnerability
            scanning solution, battle-tested in real-life penetration testing
            engagements. Quickly detect XSS, SQL injection, Command injection,
            XXE, and other critical issues — automatically validated to
            eliminate false positives.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Create free account
          </button>
        </div>
      </section>

      {/* Scan Box Section */}
      <div className="mb-16">
        <ScanBox />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* FAQ Section */}
      <FAQSection />

      <EasyScanningSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
