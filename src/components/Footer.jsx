import React from 'react';
import { Link2, MessageCircle, Zap, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future is{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            The practical enablers of the AI era who combine strategy, technology, and problem-solving to bring AI to life inside organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Link2 className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Connectors</h3>
            <p className="text-gray-300">Link problems to solutions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Translators</h3>
            <p className="text-gray-300">Make AI accessible to all</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h3 className="text-xl font-bold mb-2">Implementers</h3>
            <p className="text-gray-300">Turn ideas into outcomes</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <a
            href="#overview"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all hover:-translate-y-1 group"
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Generalist
            </span>
          </div>
          <p className="text-gray-400 mb-2">AI-Powered Business Growth Analyst</p>
          <p className="text-gray-500 text-sm mb-4">Driving business growth through smart AI-powered strategies, data, and automation</p>
          <p className="text-gray-300 text-base font-semibold mt-6">
            Presented By <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">NeuNex AI & Analytics</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

