import React from "react";
import { ClockIcon, RefreshIcon, CodeIcon, ShareIcon } from "@heroicons/react/outline";

const EasyScanningSection = () => {
  const features = [
    {
      title: "No setup required",
      description:
        "Being a cloud-based scanner, it just works out of the box. There’s no need to install anything on your end to scan public-facing web applications. Just create an account and start scanning.",
      icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Scheduling",
      description:
        "It’s a really good idea to scan your web applications periodically since new vulnerabilities appear every day. With Websecscan, you can schedule daily, weekly, monthly, or quarterly scans against your web apps and automatically get reports via email or other channels when risks emerge.",
      icon: <RefreshIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "API access",
      description:
        "Many of our customers prefer to trigger scans programmatically through our REST API. This lets you integrate our scanner with your internal processes (CI/CD), data sources, and custom applications, reducing manual scanning work.",
      icon: <CodeIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Internal scanning",
      description:
        "You can also use the Website Vulnerability Scanner to detect vulnerabilities in applications hosted on internal networks, intranets, private clouds, or restricted network segments. A quick and easy VPN Agent setup routes the traffic from our servers to your internal network and gets you ready to scan.",
      icon: <ShareIcon className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Title and Description */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            It’s really easy to{" "}
            <span className="text-blue-400">scan your web application</span> for vulnerabilities
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Scan a wide variety of web applications and platforms, no matter the complexity, using
            our cutting-edge tools and workflows.
          </p>
        </div>

        {/* Right Side: Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyScanningSection;
