import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "TOOLS",
      links: [
        "Reconnaissance Tools",
        "Web Vulnerability Scanners",
        "Web CMS Scanners",
        "Network Vulnerability Scanners",
        "Offensive Tools",
      ],
    },
    {
      title: "RESOURCES",
      links: [
        "Blog",
        "Security Research",
        "Podcast: We think we know",
        "API Reference",
        "Data Security",
        "Vulnerabilities & Exploits",
        "Changelog",
        "Pentest Ground",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About",
        "Team",
        "Customers",
        "Reviews",
        "Jobs",
        "Affiliate program",
      ],
    },
    {
      title: "HELP",
      links: [
        "Terms and Conditions",
        "Privacy Policy",
        "Editorial Policy",
        "Frequently Asked Questions",
        "Support Center",
        "Contact Us",
      ],
    },
    {
      title: "COMPARISONS & BENCHMARKING",
      links: [
        "Detectify Alternative",
        "Invicti Alternative",
        "Intruder Alternative",
        "Acunetix Alternative",
        "Top network vulnerability scanners benchmark 2024",
        "Top web app vulnerability scanners benchmark 2024",
      ],
    },
    {
      title: "USE CASES",
      links: [
        "Internal Vulnerability Scanner",
        "External Vulnerability Scanner",
        "Online Vulnerability Scanner",
        "Penetration Testing Automation",
        "RPA For Pentesters",
        "Vulnerability Scanning Tools",
        "Pentest Reporting Tool",
        "Free pentesting tools",
      ],
    },
    {
      title: "UTILS",
      links: ["ICMP Ping", "Whois Lookup"],
    },
    {
      title: "LASER SCANNERS",
      links: [
        "XSS Scanner",
        "SQLi Scanner",
        "UDP Port Scan",
        "CVE-2024-1709 Scanner - ScreenConnect",
        "CVE-2023-44487 Scanner (HTTP/2 Rapid Reset Vulnerability)",
        "CVE-2024-24919 Scanner - Check Point VPN Vulnerability",
        "OpenSSH Scanner for CVE-2024-6387 (Regression)",
        "Log4j Scanner (CVE-2021-44228 - Log4Shell vulnerability)",
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="text-white">Vulnerability Scanners</span> &gt;{" "}
          <span className="text-white">Website Vulnerability Scanners</span> &gt;{" "}
          <span className="text-white">Website Scanner</span>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx} className="hover:text-white cursor-pointer text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-sm text-gray-500 flex justify-between flex-col lg:flex-row">
          <div>
            <span>Published: February 16, 2021</span> <br />
            <span>Updated: July 15, 2024</span>
          </div>
          <div className="text-right">
            &copy; 2024 Websecscan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
