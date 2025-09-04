import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex items-center bg-yellow-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-yellow-800/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white block">INDIA'S</span>
                <span className="relative inline-block mt-2">
                  <span className={`relative z-10 text-yellow-900 px-4 py-2 opacity-0 ${isLoaded ? 'animate-highlight' : ''}`}>
                    TRUSTED
                  </span>
                </span>
                <span className="text-white block mt-2">HOME MAKERS</span>
              </h1>

              <p className="text-lg sm:text-xl text-yellow-100 max-w-xl">
                Experience the perfect blend of trust and convenience with our premium domestic help services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <button
                onClick={() => navigate('/services')}
                className="group flex items-center gap-2 bg-white text-yellow-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl
                         hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-yellow-500/30 font-semibold"
              >
                Book Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white
                         border-2 border-white/30 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Verified Helpers</div>
                  <div className="text-xs sm:text-sm text-yellow-100">100% Background Checked</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">5000+ Families</div>
                  <div className="text-xs sm:text-sm text-yellow-100">Trust Our Services</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/90 via-yellow-900/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 lg:p-6">
                      <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 transform translate-y-4 sm:translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-yellow-100 hidden sm:block transform translate-y-8 sm:translate-y-16 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: 'Babysitters/Japas',
    description: 'Experienced caregivers for your little ones',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Home Cooks',
    description: 'Professional chefs for delicious home-cooked meals',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80'
  },
  {
    title: 'House Cleaning',
    description: 'Thorough cleaning services for a spotless home',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80'
  },
  {
    title: 'All-Rounders',
    description: 'Versatile helpers for all your domestic needs',
    image: 'https://images.unsplash.com/photo-1590649880765-91b1956b8276?auto=format&fit=crop&q=80'
  }
];

export default HeroSection;