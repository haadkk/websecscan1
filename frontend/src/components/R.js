import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const R = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scanResults, setScanResults] = useState(null);
  const [status, setStatus] = useState("queued");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const scanId = location.state?.scanId;
  const targetUrl = location.state?.targetUrl;


  const engines = [
    "Artists Against 419",
    "Acronis",
    "Abusix",
    "Criminal IP",
    "AILabs",
    "AlienVault",
    "Dr.Web",
    "Emsisoft",
    "ESET",
    "PhishTank",
    "ThreatHive",
    "Securelytics",
    "Trustwave",
    "Webroot",
    "Lumu",
    "Malware Patrol",
    "ZeroFox",
    "Forcepoint ThreatSeeker",
    "Juniper Networks",
    "Cisco Talos",
  ];
  const totalDetections = 96;

  useEffect(() => {
    if (!scanId) {
      navigate("/"); // Redirect to home if no scan ID is found
      return;
    }

    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    
    const fetchResults = async () => {
      setTimeout(() => {
        const malicious = Math.floor(Math.random() * 3); 
        const harmless = Math.floor(Math.random() * 11) + 60; 
        const undetected = totalDetections - malicious - harmless;

        const simulatedResults = {
          stats: {
            malicious,
            harmless,
            suspicious: 0, 
            undetected,
          },
          results: engines.reduce((acc, engine) => {
            acc[engine] = {
              method: "blacklist",
              engine_name: engine,
              category: harmless > 0 ? "harmless" : "undetected",
              result: harmless > 0 ? "clean" : "unrated",
            };
            return acc;
          }, {}),
        };

        setScanResults(simulatedResults);
        setStatus("completed");
      }, 3000);
    };

    fetchResults();

    return () => clearInterval(progressInterval);
  }, [scanId, navigate]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (status === "queued") {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="bg-yellow-500 h-2 rounded-full mb-4 w-full max-w-md"
        />
        <p className="text-yellow-500 text-xl">Scanning in progress, please wait...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Scan Results for: {targetUrl}</h1>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Download Scan Report
          </button>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <p className="text-lg">
            Status: <span className="text-green-400">Completed</span>
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Stats</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Harmless:</p>
            <p className="text-green-400 text-xl">
              {scanResults?.stats?.harmless || 0}
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Malicious:</p>
            <p className="text-red-400 text-xl">
              {scanResults?.stats?.malicious || 0}
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Undetected:</p>
            <p className="text-gray-400 text-xl">
              {scanResults?.stats?.undetected || 0}
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Detailed Engine Results</h2>
        <div className="bg-gray-700 p-4 rounded-lg">
          {scanResults?.results ? (
            Object.entries(scanResults.results).map(([engine, result]) => (
              <div key={engine} className="mb-4 border-b border-gray-600 pb-2">
                <p className="text-lg font-semibold text-yellow-400">{engine}</p>
                <p>
                  Category: <span className="text-green-400">{result.category}</span>
                </p>
                <p>
                  Detection: <span className="text-red-400">{result.result || "No detection"}</span>
                </p>
              </div>
            ))
          ) : (
            <p>No detailed results available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default R;
