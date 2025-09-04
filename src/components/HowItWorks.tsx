import React from 'react';
import { ClipboardList, Users, PhoneCall, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Your Request',
    description: 'Fill out our simple form with your specific requirements and preferences for domestic help.',
    color: 'from-yellow-900 to-yellow-800'
  },
  {
    icon: Users,
    title: 'We Match You with Helpers',
    description: 'Our team carefully selects and verifies workers who match your needs perfectly.',
    color: 'from-yellow-800 to-yellow-700'
  },
  {
    icon: PhoneCall,
    title: 'Get Contacted & Confirm',
    description: 'Review our recommendations and choose your preferred helper to start immediately.',
    color: 'from-yellow-700 to-yellow-600'
  }
];

const HowItWorks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalonePage = location.pathname === '/how-it-works';

  return (
    <section id="how-it-works" className={`py-24 bg-yellow-50 ${isStandalonePage ? 'min-h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get started with GharSeva in three simple steps
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-32 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200">
            <div className="absolute -top-1 left-1/3 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute -top-1 left-2/3 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full 
                            bg-gradient-to-r from-yellow-600 to-yellow-500 text-white
                            flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg group-hover:shadow-xl 
                           transition-all duration-300 transform group-hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color}
                                flex items-center justify-center transform -rotate-6
                                group-hover:rotate-0 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-yellow-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>

                {/* Arrow Icon */}
                <div className="text-yellow-600 group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 bg-yellow-900 text-white px-8 py-4 rounded-2xl
                     hover:bg-yellow-800 transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-yellow-900/20 font-semibold group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;