import React from 'react';
import { Zap, DollarSign, Layers, Users, Building2 } from 'lucide-react';
import SectorCarousel from './SectorCarousel';

const Sectors = () => {

  const benefits = [
    {
      icon: Zap,
      title: 'Speed',
      description: 'Rapid prototyping and faster AI adoption across departments',
      color: 'text-yellow-500',
      borderColor: 'border-yellow-500',
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Uses prebuilt AI APIs and tools instead of costly development',
      color: 'text-green-500',
      borderColor: 'border-green-500',
    },
    {
      icon: Layers,
      title: 'Scalability',
      description: 'Enables AI integration across multiple departments seamlessly',
      color: 'text-blue-500',
      borderColor: 'border-blue-500',
    },
    {
      icon: Users,
      title: 'Cross-Functional',
      description: 'Connects engineers, managers, and decision-makers effectively',
      color: 'text-purple-500',
      borderColor: 'border-purple-500',
    },
    {
      icon: Building2,
      title: 'Governance',
      description: 'Ensures responsible AI usage aligned with policies',
      color: 'text-pink-500',
      borderColor: 'border-pink-500',
    },
  ];

  return (
    <section id="sectors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Organizations Need{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Business Growth Analysts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating value across different sectors — regardless of size or industry
          </p>
        </div>

        {/* Sector Carousel */}
        <div className="mb-16">
          <SectorCarousel />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Role of an{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Business Growth Analyst
            </span>
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Part strategist, part technologist, part communicator — wearing many hats to deliver results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`border-l-4 ${benefit.borderColor} bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color} mb-3`} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            How Organizations Benefit
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            Tangible advantages that drive real business transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Faster Time to Value</h4>
                  <p className="text-gray-600">Deploy AI solutions in weeks, not months, with rapid prototyping and agile implementation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Reduced Development Costs</h4>
                  <p className="text-gray-600">Leverage existing AI APIs and no-code tools instead of expensive custom development</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Bridge Technical Gaps</h4>
                  <p className="text-gray-600">Connect technical teams with business stakeholders for aligned, effective AI initiatives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Layers className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Scale AI Adoption</h4>
                  <p className="text-gray-600">Spread AI capabilities across departments with consistent governance and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;

