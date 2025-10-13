import React from 'react';
import { GraduationCap, UserPlus, Users as UsersIcon, BarChart } from 'lucide-react';

const Adoption = () => {
  const steps = [
    {
      icon: GraduationCap,
      title: 'Train',
      description: 'Upskill existing employees in AI fundamentals and no-code tools',
      number: '01',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserPlus,
      title: 'Hire',
      description: 'Bring in AI-Powered Business Growth Analysts to lead department-level AI adoption',
      number: '02',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: UsersIcon,
      title: 'Establish',
      description: 'Create cross-functional AI teams driven by business goals',
      number: '03',
      gradient: 'from-pink-500 to-pink-600',
    },
    {
      icon: BarChart,
      title: 'Measure',
      description: 'Track success using productivity, efficiency, and ROI metrics',
      number: '04',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const alternateNames = [
    'AI Strategist',
    'AI Implementation Specialist',
    'Business AI Lead',
    'AI Solutions Architect',
    'AI Product Manager',
    'AI Transformation Consultant',
    'Automation Specialist',
    'Digital Transformation Lead',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Adopting the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Business Growth Analyst Model
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four strategic steps to transform your organization's AI capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-4">
            Build a culture of AI-driven innovation, not just AI experiments
          </p>
          <p className="text-lg text-gray-600 text-center">
            Systematic adoption leads to sustainable competitive advantage
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Alternate Names & Related Roles
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Different names, same mission: turning AI ideas into real-world outcomes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {alternateNames.map((name, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;

