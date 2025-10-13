import React from 'react';
import { BarChart3, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: TrendingUp,
      metric: '35%',
      title: 'Conversion Increase',
      description: 'E-commerce companies using AI personalization',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      metric: '70%',
      title: 'Time Savings',
      description: 'Report automation in financial services',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      metric: '50%',
      title: 'Cost Reduction',
      description: 'Customer support with AI chatbots',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: CheckCircle,
      metric: '3x',
      title: 'Faster Deployment',
      description: 'AI solutions compared to traditional development',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-World{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry can leverage the AI Generalist model to modernize faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${impact.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent mb-2`}>
                {impact.metric}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{impact.title}</h3>
              <p className="text-gray-600 text-sm">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            From 35% conversion increases to 70% time savings
          </p>
          <p className="text-lg md:text-xl text-white/90">
            AI-Powered Business Growth Analysts deliver measurable results across every sector
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;

