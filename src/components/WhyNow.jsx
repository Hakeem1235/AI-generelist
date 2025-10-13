import React from 'react';
import { Globe, Users, Zap, TrendingUp } from 'lucide-react';

const WhyNow = () => {
  const reasons = [
    {
      icon: Globe,
      title: 'Democratized AI',
      description: 'The AI revolution is accessible to everyone — anyone can use advanced AI tools',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Need for Implementers',
      description: 'Businesses need practical implementers, not just AI researchers',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Faster Adoption',
      description: 'AI Generalists make adoption faster, cheaper, and more sustainable',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Growing Demand',
      description: 'Organizations across all sectors are actively seeking AI transformation experts',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="why-now" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Now is the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Right Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The perfect convergence of accessible AI, business need, and market demand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            AI-Powered Business Growth Analysts are the new backbone of digital transformation
          </p>
          <p className="text-lg md:text-xl text-white/90">
            Organizations that embrace this role today will lead tomorrow's AI revolution
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;

