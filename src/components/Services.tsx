import React, { useState } from 'react';
import { Star, Home, ChefHat, Utensils, Baby, Heart, AlertCircle } from 'lucide-react';
import DomesticHelpForm from './DomesticHelpForm';
import CookingServiceForm from './CookingServiceForm';
import DishwashingForm from './DishwashingForm';

const services = [
  {
    id: 'cleaning',
    icon: Home,
    title: 'Domestic Help',
    description: 'Professional house and bathroom cleaning services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    rating: 4.8,
    totalReviews: 12,
    isActive: true
  },
  {
    id: 'cooking',
    icon: ChefHat,
    title: 'Cooking',
    description: 'Expert cooks for delicious home-cooked meals',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80',
    rating: 4.9,
    totalReviews: 9,
    isActive: true
  },
  {
    id: 'dishwashing',
    icon: Utensils,
    title: 'Dishwashing',
    description: 'Professional dishwashing services',
    image: 'dishwashing.jpg',
    rating: 4.7,
    totalReviews: 8,
    isActive: true
  },
  {
    id: 'babysitting',
    icon: Baby,
    title: 'Babysitting',
    description: 'Experienced caregivers for your little ones',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80',
    rating: 0,
    totalReviews: 0,
    isActive: false
  },
  {
    id: 'elderly',
    icon: Heart,
    title: 'Adult Care',
    description: 'Compassionate care for elderly family members',
    image: 'https://images.unsplash.com/photo-1584473457409-ae5c91d211ff?auto=format&fit=crop&q=80',
    rating: 0,
    totalReviews: 0,
    isActive: false
  }
];

const Services = () => {
  const [showDomesticHelpForm, setShowDomesticHelpForm] = useState(false);
  const [showCookingServiceForm, setShowCookingServiceForm] = useState(false);
  const [showDishwashingForm, setShowDishwashingForm] = useState(false);

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4 md:mb-6">
              Our Featured Services
            </h2>
            <div className="space-y-2 md:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold">
                Professional and reliable help,
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold">
                tailored to your needs
              </p>
            </div>
            <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base">
              All our services come with verified workers and a satisfaction guarantee
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl md:rounded-3xl shadow-lg 
                         transition-all duration-300 hover:-translate-y-1 flex flex-col
                         ${!service.isActive ? 'opacity-75' : 'hover:shadow-xl'}`}
              >
                {/* Service Image */}
                <div className="aspect-[4/3] rounded-t-2xl md:rounded-t-3xl overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700
                              ${service.isActive ? 'group-hover:scale-110' : 'grayscale'}`}
                  />
                  {!service.isActive && (
                    <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[1px] flex items-center justify-center">
                      <div className="bg-white/90 px-3 py-1.5 rounded-full">
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-3 md:p-4 lg:p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-xl md:rounded-2xl 
                                flex items-center justify-center">
                      <service.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-900" />
                    </div>
                    {/* {service.isActive && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900 text-sm md:text-base">{service.rating}</span>
                      </div>
                    )} */}
                  </div>

                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {service.description}
                  </p>

                  {/* {service.isActive && (
                    <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3">
                      <span>{service.totalReviews.toLocaleString()} reviews</span>
                    </div>
                  )} */}

                  {/* Book Now Button */}
                  {service.isActive ? (
                    <div className="mt-auto md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => {
                          if (service.id === 'cleaning') {
                            setShowDomesticHelpForm(true);
                          } else if (service.id === 'cooking') {
                            setShowCookingServiceForm(true);
                          } else if (service.id === 'dishwashing') {
                            setShowDishwashingForm(true);
                          }
                        }}
                        className="w-full bg-yellow-900 text-white py-1.5 md:py-2 rounded-lg md:rounded-xl 
                                 text-sm md:text-base hover:bg-yellow-800 transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  ) : (
                    <div className="mt-auto">
                      <button 
                        disabled
                        className="w-full bg-gray-100 text-gray-400 py-1.5 md:py-2 rounded-lg md:rounded-xl 
                                 text-sm md:text-base cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          {/* <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-yellow-50 rounded-full">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
              <span className="text-yellow-900 font-medium text-sm md:text-base">
                Trusted by 5000+ families across India
              </span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Form Modals */}
      <DomesticHelpForm 
        isOpen={showDomesticHelpForm} 
        onClose={() => setShowDomesticHelpForm(false)} 
      />
      <CookingServiceForm
        isOpen={showCookingServiceForm}
        onClose={() => setShowCookingServiceForm(false)}
      />
      <DishwashingForm
        isOpen={showDishwashingForm}
        onClose={() => setShowDishwashingForm(false)}
      />
    </>
  );
};

export default Services;