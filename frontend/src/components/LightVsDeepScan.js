import React from "react";

const LightVsDeepScan = () => {
  const testingAreas = [
    { name: "Version-based vulnerability detection", available: true },
    { name: "Common configuration issues", available: true },
    { name: "XSS testing using real browsers", available: false },
    { name: "SQL Injection", available: false },
    { name: "Server-Side Request Forgery (SSRF)", available: false },
    { name: "Server-Side Template Injection", available: false },
    { name: "Client-Side Prototype Pollution", available: false },
    { name: "Python, Javascript, PHP Code Injection", available: false },
  ];

  return (
    <section className="bg-gray-800 text-white py-12 px-6 rounded-lg shadow-lg mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-4">Light vs Deep Scan</h2>
        <p className="text-gray-400 mb-6">
          Using the deep version of the Website Scanner allows you to perform in-depth website scanning and discover high-risk vulnerabilities.
        </p>

        {/* Table */}
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Testing Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-600 pb-2"
              >
                {/* Area Name */}
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      area.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {area.available ? (
                      <span className="text-white font-bold">✔</span>
                    ) : (
                      <span className="text-white font-bold">✖</span>
                    )}
                  </span>
                  <p className="text-sm md:text-base text-gray-300">
                    {area.name}
                  </p>
                </div>

                {/* Deep Scan Tag */}
                {!area.available && (
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-500 text-black rounded-lg">
                    Deep Scan
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightVsDeepScan;
