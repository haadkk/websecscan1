import React from "react";
import {
  SearchIcon,
  SearchCircleIcon,
  LightningBoltIcon,
  EyeIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline"; // Heroicons v1

const HowItWorksSection = () => {
  const features = [
    {
      title: "Resource discovery",
      description:
        "First, the scanner attempts to discover various endpoints, sensitive files, and hidden paths on the target application.",
      icon: <SearchIcon className="w-8 h-8 text-blue-500" />, // Search icon for resource discovery
    },
    {
      title: "Spidering",
      description:
        "Based on the target URL and endpoints it discovered in the previous phase, the Website Vulnerability Scanner explores the web application further.",
      icon: <SearchCircleIcon className="w-8 h-8 text-green-500" />, // Search circle for spidering
    },
    {
      title: "Active scanning",
      description:
        "While the Spider is running, another component of the Website Scanner takes each previously discovered endpoint and sends HTTP requests to detect vulnerabilities.",
      icon: <LightningBoltIcon className="w-8 h-8 text-purple-500" />, // Lightning bolt for active scanning
    },
    {
      title: "Passive scanning",
      description:
        "To detect interesting information and leaked sensitive data, the Website Vulnerability Scanner collects metadata about the target system.",
      icon: <EyeIcon className="w-8 h-8 text-yellow-500" />, // Eye icon for passive scanning
    },
    {
      title: "Version-based CVE detection",
      description:
        "Besides specific application vulnerability detection, the Website Vulnerability Scanner uses version information to detect known vulnerabilities.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-red-500" />, // Shield check for CVE detection
    },
    {
      title: "Full list of security tests performed",
      description:
        "The Deep version of the Website Vulnerability Scanner performs a complete security assessment of the application.",
      icon: <ClipboardCheckIcon className="w-8 h-8 text-teal-500" />, // Clipboard check for full tests
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          How does the{" "}
          <span className="text-blue-400">Website Vulnerability Scanner</span>{" "}
          work?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          The Website Vulnerability Scanner is a DAST (Dynamic Application
          Security Testing) tool which tries to discover vulnerabilities like
          XSS, SQL injection, HTTP Prototype Pollution, Directory Traversal,
          and more in running web applications.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
