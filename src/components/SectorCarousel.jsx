import React, { useState } from 'react';
import { GraduationCap, Briefcase, Building2, PieChart, ChevronLeft, ChevronRight } from 'lucide-react';

const SectorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectors = [
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      shortDesc: 'AI-powered admission support chatbot',
      detailedDesc: 'Transform student experiences with intelligent automation and personalized learning pathways.',
      benefits: [
        'AI-powered chatbots for 24/7 student support and admissions queries',
        'Automated grading and feedback systems to reduce faculty workload',
        'Personalized learning paths using AI-driven analytics',
        'Predictive analytics for student retention and success',
        'Smart scheduling and resource optimization',
        'AI-enhanced research tools and academic assistance'
      ],
      stats: [
        { value: '60%', label: 'Time Saved in Admin Tasks' },
        { value: '85%', label: 'Student Query Resolution' },
        { value: '40%', label: 'Improved Retention Rate' }
      ]
    },
    {
      icon: Briefcase,
      title: 'Businesses & Startups',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      shortDesc: 'Integrated OpenAI API to automate reports',
      detailedDesc: 'Accelerate growth and innovation with AI-driven automation and intelligent decision-making.',
      benefits: [
        'Automated report generation and business intelligence',
        'AI-powered customer insights and market analysis',
        'Intelligent product recommendations and personalization',
        'Automated content creation for marketing campaigns',
        'Smart inventory and supply chain optimization',
        'AI-driven sales forecasting and pipeline management'
      ],
      stats: [
        { value: '70%', label: 'Faster Report Generation' },
        { value: '45%', label: 'Cost Reduction' },
        { value: '3x', label: 'Productivity Increase' }
      ]
    },
    {
      icon: Building2,
      title: 'Corporates & Enterprises',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      shortDesc: 'Personalized marketing campaigns using AI insights',
      detailedDesc: 'Scale operations and drive efficiency with enterprise-grade AI solutions.',
      benefits: [
        'AI-powered marketing automation and personalization at scale',
        'Intelligent customer segmentation and targeting',
        'Automated compliance monitoring and risk assessment',
        'AI-driven process optimization across departments',
        'Predictive maintenance and operational efficiency',
        'Advanced data analytics and business intelligence dashboards'
      ],
      stats: [
        { value: '50%', label: 'Marketing ROI Increase' },
        { value: '65%', label: 'Process Efficiency Gain' },
        { value: '80%', label: 'Data Processing Speed' }
      ]
    },
    {
      icon: PieChart,
      title: 'Consulting Firms & Agencies',
      gradient: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      shortDesc: 'Built internal AI assistant for HR and Finance queries',
      detailedDesc: 'Deliver exceptional client value with AI-enhanced insights and automation.',
      benefits: [
        'AI assistants for HR, Finance, and operational queries',
        'Automated client reporting and insights generation',
        'Intelligent project scoping and resource allocation',
        'AI-powered market research and competitive analysis',
        'Smart document processing and knowledge management',
        'Predictive analytics for client success and retention'
      ],
      stats: [
        { value: '55%', label: 'Faster Client Delivery' },
        { value: '90%', label: 'Query Resolution Rate' },
        { value: '2x', label: 'Team Productivity' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sectors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sectors.length) % sectors.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSector = sectors[currentIndex];
  const Icon = currentSector.icon;

  return (
    <div className="relative">
      {/* Main Carousel Content */}
      <div className={`${currentSector.bgColor} rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Icon and Title */}
          <div className="text-center lg:text-left">
            <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${currentSector.gradient} rounded-3xl items-center justify-center mb-6 shadow-xl`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentSector.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {currentSector.detailedDesc}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {currentSector.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${currentSector.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
            <ul className="space-y-3">
              {currentSector.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className={`w-2 h-2 bg-gradient-to-r ${currentSector.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-x-1 group"
          aria-label="Previous sector"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {sectors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to sector ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:translate-x-1 group"
          aria-label="Next sector"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
        </button>
      </div>

      {/* Sector Names Below */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {sectors.map((sector, index) => {
          const SectorIcon = sector.icon;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all ${
                index === currentIndex
                  ? `${sector.bgColor} border-2 border-gray-300 shadow-md`
                  : 'bg-white hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <SectorIcon className={`w-6 h-6 mx-auto mb-2 ${
                index === currentIndex ? 'text-gray-900' : 'text-gray-500'
              }`} />
              <div className={`text-sm font-medium ${
                index === currentIndex ? 'text-gray-900' : 'text-gray-600'
              }`}>
                {sector.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SectorCarousel;

