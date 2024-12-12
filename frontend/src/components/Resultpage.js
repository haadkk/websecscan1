import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScanSummary from "./ScanSummary";
import ScanCoverage from "./ScanCoverage";
import FindingsSection from "./FindingsSection";
import LightVsDeepScan from "./LightVsDeepScan";

const ResultPage = () => {
  const location = useLocation();
  const [scanData, setScanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { targetUrl } = location.state || {};

  useEffect(() => {
    const fetchScanData = async () => {
      try {
        const response = await fetch("/api/scan-url/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: targetUrl }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch scan data");
        }

        const data = await response.json();
        setScanData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (targetUrl) {
      fetchScanData();
    } else {
      setError("No target URL provided");
      setLoading(false);
    }
  }, [targetUrl]);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
        <p className="text-xl font-semibold">Scanning in progress...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 to-gray-800 rounded-lg shadow-xl p-8 mb-10 max-w-4xl mx-auto mt-10">
        <h2 className="text-center text-3xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">
          SCANNING REPORT
        </h2>
        <h3 className="text-center text-xl font-semibold text-blue-400 mb-6">
          Website Scanner (Light)
        </h3>
        <div className="bg-gray-700/50 border border-gray-600 rounded-md p-4 mb-6 shadow-md">
          <h4 className="text-sm text-blue-300 font-semibold mb-1">TARGET</h4>
          <p className="text-lg text-white font-medium">{scanData.target}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">Scan Progress</h4>
          <div className="relative w-full bg-gray-600 rounded-full h-5 shadow-inner overflow-hidden">
            <motion.div
              className="bg-blue-500 h-5"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-right">Scanning target... 100%</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <ScanSummary data={scanData.detection_ratios} />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <ScanCoverage data={scanData} />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <FindingsSection findings={scanData.findings} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <LightVsDeepScan />
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
