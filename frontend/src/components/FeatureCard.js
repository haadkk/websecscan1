import React from 'react';

const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 flex items-start gap-4 shadow-lg">
      <img src={iconSrc} alt={`${title} Icon`} className="w-16 h-16" />
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
