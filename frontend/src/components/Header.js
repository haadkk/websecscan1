import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeaderSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-center text-2xl font-bold text-white mb-4">REPORT</h2>
      <h3 className="text-center text-3xl font-semibold text-blue-400 mb-6">
        Website Scanner (Light)
      </h3>
      <div className="bg-gray-700 rounded-md p-6 mb-6">
        <h4 className="text-sm text-blue-300 font-semibold mb-2">TARGET</h4>
        <p className="text-lg text-white">https://example.com</p>
      </div>
      <div>
        <h4 className="text-sm text-gray-300 font-semibold mb-2">Scan progress</h4>
        <div className="relative w-full bg-gray-600 rounded-full h-4 overflow-hidden">
          <motion.div
            className="bg-blue-500 h-4"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <p className="text-gray-400 text-sm mt-2">{`Scanning target... ${progress}%`}</p>
      </div>
    </div>
  );
};

export default HeaderSection;
