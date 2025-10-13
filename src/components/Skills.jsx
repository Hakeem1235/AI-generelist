import React from 'react';
import { Code, Brain, Users, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      skills: [
        'AI-Powered Coding (Cursor, GitHub Copilot, Replit)',
        'Data Analytics using AI (ChatGPT, Claude, Gemini)',
        'Design with AI (Genspark, Midjourney, DALL-E, Canva AI)',
        'Prompt Engineering & Optimization',
        'AI Workflow Automation (Make.com, Zapier, n8n)',
        'No-code/Low-code AI Tools (Bubble, Webflow)',
        'AI API Integration (OpenAI, Anthropic, Google AI)',
      ],
    },
    {
      icon: Brain,
      title: 'Business & Strategic Skills',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      skills: [
        'AI Use Case Identification & ROI Analysis',
        'Business Process Optimization with AI',
        'AI Product Strategy & Roadmapping',
        'Stakeholder Management & Buy-in',
        'AI Ethics, Privacy & Compliance',
        'Data-Driven Decision Making',
        'AI Risk Assessment & Mitigation',
        'Change Management for AI Adoption',
      ],
    },
    {
      icon: Users,
      title: 'Human & Soft Skills',
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-orange-50',
      skills: [
        'Cross-Functional Collaboration',
        'Clear Technical Communication',
        'Adaptability & Continuous Learning',
        'Critical Thinking & Problem-Solving',
        'Creative AI Application',
        'Emotional Intelligence & Leadership',
        'Time Management & Prioritization',
        'Curiosity & Experimental Mindset',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Essential{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skill Set
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A balanced mix of technical expertise, business acumen, and human skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <TrendingUp className="w-12 h-12 text-yellow-300" />
          </div>
          <p className="text-2xl md:text-3xl font-bold mb-4">
            lifelong learner
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The most critical skill is the ability to continuously adapt and learn in the rapidly evolving AI landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

