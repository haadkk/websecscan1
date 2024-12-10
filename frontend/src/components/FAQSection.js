import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a web vulnerability scanner?",
      answer: `A web vulnerability scanner is a specialized software tool designed to automatically identify security flaws within web applications. 
        A reliable, robust website security scanner should be able to mimic real attacker tactics and identify realistic, exploitable security issues.`,
    },
    {
      question: "How long does a website security scan take?",
      answer: `The duration of a scan depends on the complexity of your web application and the scan type (light scan or deep scan). 
        A light scan might take a few minutes, while a deep scan could take several hours.`,
    },
    {
      question: "How do I scan a password-protected site for vulnerabilities?",
      answer: `Our tool supports authenticated scanning using credentials like username/password, cookies, headers, or recorded login sessions. 
        You can easily set up scanning for password-protected areas.`,
    },
    {
      question: "Can I schedule automated scans?",
      answer: `Yes, Websecscan allows you to schedule scans on a daily, weekly, or monthly basis to ensure your application remains secure. 
        Scheduled scans will automatically provide detailed reports.`,
    },
    {
      question: "What is the difference between light and deep scanning?",
      answer: `A light scan performs a quick analysis of the most common vulnerabilities, while a deep scan performs a comprehensive assessment 
        covering all possible security flaws, which may take longer.`,
    },
    {
      question: "Does the scanner work on internal networks?",
      answer: `Yes, using our VPN Agent setup, you can scan applications hosted on internal networks, private clouds, or restricted environments. 
        This ensures full coverage for enterprise-level security needs.`,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Common questions about <span className="text-blue-400">web vulnerability scanning</span>
        </h2>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                {expandedIndex === index ? (
                  <MinusIcon className="w-6 h-6 text-blue-400" />
                ) : (
                  <PlusIcon className="w-6 h-6 text-blue-400" />
                )}
              </div>

              {/* Answer with Smooth Animation */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
