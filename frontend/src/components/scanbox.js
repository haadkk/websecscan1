import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ScanBox = () => {
  const [protocol, setProtocol] = useState("https");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9]+\\.[a-zA-Z]{2,})",
      "i"
    );
    return pattern.test(url);
  };

  const sanitizeUrl = (url) => {
    // Remove extra protocol if already present
    let sanitizedUrl = url.trim().replace(/^(https?:\/\/)/, ""); // Remove any existing protocol
    return `${protocol}://${sanitizedUrl}`;
  };

  const handleScan = async () => {
    if (!url || !isValidUrl(url)) {
      setError("Please enter a valid URL!");
      return;
    }

    const sanitizedUrl = sanitizeUrl(url);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/scan-url/", {
        url: sanitizedUrl,
      });

      // Navigate to ResultPage with the scan_id
      navigate("/results", { state: { scanId: response.data.scan_id, targetUrl: sanitizedUrl } });
    } catch (err) {
      setError(err.response?.data?.error || "Failed to initiate scan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <select
            value={protocol}
            onChange={(e) => setProtocol(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="https">HTTPS</option>
            <option value="http">HTTP</option>
          </select>
        </div>

        <div className="flex-grow mb-4 md:mb-0">
          <input
            type="text"
            placeholder="www.example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScan}
          disabled={isLoading}
          className={`px-6 py-2 text-white font-semibold rounded-md shadow ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
        >
          {isLoading ? "Scanning..." : "Start Scan"}
        </motion.button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ScanBox;
