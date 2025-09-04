import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DishwashingAddOnProps {
  isOpen: boolean;
  onClose: (formData?: { peopleCount: string; frequency: string }) => void;
}

const peoplePricing = {
  '1-2 person': { price: 400, duration: 25 },
  '3 people': { price: 700, duration: 40 },
  '4 people': { price: 1000, duration: 45 },
  '5 people': { price: 1300, duration: 50 },
  '6 people': { price: 1600, duration: 60 },
  '7+ people': { price: 2000, duration: 80 }
};

const DishwashingAddOn = ({ isOpen, onClose }: DishwashingAddOnProps) => {
  const [peopleCount, setPeopleCount] = useState('');
  const [frequency, setFrequency] = useState('Once only');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (peopleCount && frequency) {
      onClose({ peopleCount, frequency });
    }
  };

  const selectedPricing = peopleCount ? peoplePricing[peopleCount as keyof typeof peoplePricing] : null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => onClose()}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl w-full max-w-2xl">
          {/* Close Button */}
          <button
            onClick={() => onClose()}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          {/* Form Content */}
          <div className="p-8">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Dish-washing
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* People Count Selection */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">How many people are there at home?</h3>
                  <p className="text-gray-500 text-sm mt-1">Select 1 out of 6 options</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  {Object.entries(peoplePricing).map(([option, { price, duration }]) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setPeopleCount(option)}
                      className={`py-3 px-4 rounded-full border text-center transition-all
                                ${peopleCount === option
                                  ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Selection */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">How many times a day?</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setFrequency('Once only')}
                    className={`py-3 px-4 rounded-full border text-center transition-all
                              ${frequency === 'Once only'
                                ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                              }`}
                  >
                    Once only
                  </button>
                </div>
              </div>

              {/* Pricing Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                <div className="space-y-3">
                  {peopleCount && (
                    <div className="flex justify-between text-gray-600">
                      <span>Selected Option:</span>
                      <span className="font-medium">{peopleCount}</span>
                    </div>
                  )}
                  {selectedPricing && (
                    <>
                      <div className="flex justify-between text-gray-600">
                        <span>Daily Duration:</span>
                        <span className="font-medium">
                          {selectedPricing.duration >= 60 
                            ? `${Math.floor(selectedPricing.duration / 60)}:${String(selectedPricing.duration % 60).padStart(2, '0')} Hour`
                            : `${selectedPricing.duration} Minutes`}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Monthly Price:</span>
                        <span className="font-medium">₹{selectedPricing.price}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">Monthly Salary</span>
                      <span className="text-yellow-600 font-semibold">
                        ~₹{selectedPricing ? selectedPricing.price.toFixed(2) : '0.00'}
                      </span>
                      <span className="text-gray-600">approx.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">Daily Working Hours</span>
                      <span className="text-yellow-600 font-semibold">
                        ~{selectedPricing ? (selectedPricing.duration / 60).toFixed(2) : '0.00'}
                      </span>
                      <span className="text-gray-600">approx.</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!peopleCount || !frequency}
                    className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                      peopleCount && frequency
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Done
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  *estimate varies with workload, shifts, timings and location
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishwashingAddOn;