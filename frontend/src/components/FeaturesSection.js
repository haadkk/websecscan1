import { ShieldCheckIcon, CodeIcon, AdjustmentsIcon, GlobeAltIcon, KeyIcon } from '@heroicons/react/outline';

function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />,
      title: 'Built by penetration testers',
      description:
        'The team behind the Website Vulnerability Scanner has hands-on experience in penetration testing engagements.',
    },
    {
      icon: <CodeIcon className="h-8 w-8 text-green-500" />,
      title: 'Low false positives rate',
      description:
        'Our scanner is fine-tuned to provide accurate results, saving time with automatic validation.',
    },
    {
      icon: <AdjustmentsIcon className="h-8 w-8 text-purple-500" />,
      title: 'Scan JavaScript-heavy websites',
      description:
        'Our browser-based crawler scans SPAs and other JavaScript-heavy websites, ensuring high attack surface coverage and detection rates.',
    },
    {
      icon: <KeyIcon className="h-8 w-8 text-yellow-500" />,
      title: 'Authenticated scanning',
      description:
        'Scan login-protected pages with various authentication methods (username/password, cookies, headers).',
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-teal-500" />,
      title: 'Out-of-band detection',
      description:
        'Detect vulnerabilities that don’t appear in HTTP responses by leveraging out-of-band requests to logging servers.',
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Icon */}
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-700 mb-4">
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
