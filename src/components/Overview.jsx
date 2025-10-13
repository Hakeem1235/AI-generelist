import React from 'react';
import { Link2, MessageCircle, Zap } from 'lucide-react';

const Overview = () => {
  const roles = [
    {
      icon: Link2,
      title: 'Connectors',
      description: 'Link business challenges with AI solutions, bridging the gap between what\'s possible and what\'s profitable.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-emerald-50',
    },
    {
      icon: MessageCircle,
      title: 'Translators',
      description: 'Convert technical AI capabilities into business value, making complex concepts accessible to all stakeholders.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: Zap,
      title: 'Implementers',
      description: 'Turn AI ideas into real-world outcomes through rapid prototyping, testing, and deployment.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-600 to-pink-600',
    },
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who is an{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Business Growth Analyst?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Unlike traditional specialists who dive deep, AI-Powered Business Growth Analysts bring breadth across AI, automation, data, and business — enabling organizations to move from awareness to action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${role.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${role.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <role.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>
              <p className="text-gray-700">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <div className="text-2xl font-bold text-gray-400">→</div>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-blue-600">what's possible with AI</span>
                {' → '}
                <span className="font-semibold text-green-600">what's profitable for business</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

