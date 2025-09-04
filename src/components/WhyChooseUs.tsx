import React from 'react';
import { CheckCircle, IndianRupee, MessageSquareText, Shield, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Verified & Background Checked',
    description: 'Every helper undergoes thorough verification and background checks for your safety and peace of mind'
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden charges. Get detailed breakdowns of all services and costs'
  },
  {
    icon: MessageSquareText,
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is always available to assist you with any queries or concerns'
  },
  {
    icon: Users,
    title: 'Skilled Professionals',
    description: 'Experienced and trained helpers who are experts in their respective service areas'
  },
  {
    icon: CheckCircle,
    title: 'Quality Guarantee',
    description: 'Satisfaction guaranteed with our complimentary helper replacement policy'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose timing that works best for you with our flexible booking system'
  }
];

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Experience the GharSeva difference with our commitment to quality and trust
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center
                            transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-yellow-900" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-yellow-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-100 rounded-full opacity-0 
                           group-hover:opacity-10 transition-opacity duration-300 transform scale-0 
                           group-hover:scale-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 bg-yellow-900 text-white px-8 py-4 rounded-2xl
                     hover:bg-yellow-800 transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-yellow-900/20 font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;