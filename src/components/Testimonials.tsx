import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Working Professional',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'GharSeva has been a lifesaver! Their cook makes the most delicious meals, and the service is always punctual. The quality and reliability are exceptional.',
    rating: 5,
    service: 'Cook'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    text: 'Finding a trustworthy house help was a challenge until I found GharSeva. Their verification process is thorough, and the helper they provided is excellent.',
    rating: 5,
    service: 'House Help'
  },
  {
    name: 'Meera Patel',
    role: 'Parent',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'As a working mother, I was worried about childcare. The babysitter from GharSeva is amazing with kids and very professional. Highly recommended!',
    rating: 5,
    service: 'Babysitter'
  },
  {
    name: 'Amit Singh',
    role: 'IT Professional',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'The all-rounder service from GharSeva has made my life so much easier. Professional, punctual, and thorough in all aspects of household work.',
    rating: 4,
    service: 'All-Rounder'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied families who trust GharSeva for their domestic help needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center
                            transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-yellow-900" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 line-clamp-4">
                {testimonial.text}
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-yellow-900">{testimonial.name}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{testimonial.location}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonial.service}</span>
                  </div>
                </div>
              </div>

              {/* Service Tag */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-900 font-medium">
              Trusted by 5000+ families across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;