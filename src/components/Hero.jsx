import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const videos = {
    english: 'VIb-PinFiMo',
    telugu: 'E3bZHaxvwCg',
    hindi: 'oJX4W_2MQBU'
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-blue-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Video Section */}
          <div className="animate-slideInLeft order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm p-4">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  key={selectedLanguage}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos[selectedLanguage]}?autoplay=1&mute=1`}
                  title="AI Generalist Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Language Selection Buttons */}
              <div className="flex gap-3 mt-4 justify-center">
                <button
                  onClick={() => setSelectedLanguage('english')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedLanguage === 'english'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLanguage('telugu')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedLanguage === 'telugu'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Telugu
                </button>
                <button
                  onClick={() => setSelectedLanguage('hindi')}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedLanguage === 'hindi'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Hindi/Urdu
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="animate-scaleIn mb-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Business Growth Analyst
                </span>
              </h2>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp delay-200 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
                AI Generalist
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-6 animate-fadeInUp delay-400 lg:mx-0">
              Driving business growth through smart AI-powered strategies, data, and automation.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8 animate-fadeInUp delay-500 leading-relaxed lg:mx-0">
              The multidisciplinary professional who connects business strategy with AI power — acting as connectors, translators, and implementers to transform AI awareness into adoption.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scaleIn delay-700">
              <a
                href="#overview"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group animate-glow"
              >
                Explore the Role
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-gray-200"
              >
                See Impact Areas
              </a>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slideInLeft delay-900 border border-gray-100 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Thinking</h3>
            <p className="text-gray-600 leading-relaxed">Identify where AI creates the biggest business impact</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn delay-900 border border-gray-100 group">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Implementation</h3>
            <p className="text-gray-600 leading-relaxed">From prototype to production in record time</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slideInRight delay-900 border border-gray-100 group">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Functional Bridge</h3>
            <p className="text-gray-600 leading-relaxed">Connect technical teams with business goals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

