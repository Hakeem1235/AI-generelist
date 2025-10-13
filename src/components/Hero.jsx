import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-blue-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeInUp mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Business Growth Analyst
            </span>
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp delay-200">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Generalist
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6 animate-fadeInUp delay-300">
          Driving business growth through smart AI-powered strategies, data, and automation.
        </p>

        <p className="text-base md:text-lg text-gray-500 max-w-4xl mx-auto mb-12 animate-fadeInUp delay-500">
          The multidisciplinary professional who connects business strategy with AI power — acting as connectors, translators, and implementers to transform AI awareness into adoption.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-1000">
          <a
            href="#overview"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:-translate-y-1 group"
          >
            Explore the Role
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            See Impact Areas
          </a>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fadeIn delay-1000">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Strategic Thinking</h3>
            <p className="text-gray-600">Identify where AI creates the biggest business impact</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rapid Implementation</h3>
            <p className="text-gray-600">From prototype to production in record time</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Cross-Functional Bridge</h3>
            <p className="text-gray-600">Connect technical teams with business goals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

