import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BathroomCleaningFormProps {
  isOpen: boolean;
  onClose: (formData?: { bathrooms: string }) => void;
}

const bathroomPricing = {
  '1-2 bathrooms': { price: 300, duration: 10 },
  '3-4 bathrooms': { price: 450, duration: 30 },
  '5-6 bathrooms': { price: 600, duration: 45 }
};

const BathroomCleaningForm = ({ isOpen, onClose }: BathroomCleaningFormProps) => {
  const [bathrooms, setBathrooms] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bathrooms) {
      onClose({ bathrooms });
    }
  };

  const selectedPricing = bathrooms ? bathroomPricing[bathrooms as keyof typeof bathroomPricing] : null;

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
              Bathroom cleaning
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Number of Bathrooms */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">
                    For how many bathrooms? <span className="text-gray-500 font-normal">(This will be done daily)</span>
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Select 1 out of 3 options</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {Object.entries(bathroomPricing).map(([option, { price, duration }]) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBathrooms(option)}
                      className={`py-3 px-4 rounded-full border text-center transition-all
                                ${bathrooms === option
                                  ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Details */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                <div className="space-y-3">
                  {bathrooms && (
                    <div className="flex justify-between text-gray-600">
                      <span>Selected Option:</span>
                      <span className="font-medium">{bathrooms}</span>
                    </div>
                  )}
                  {selectedPricing && (
                    <>
                      <div className="flex justify-between text-gray-600">
                        <span>Daily Duration:</span>
                        <span className="font-medium">{selectedPricing.duration} minutes</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Monthly Price:</span>
                        <span className="font-medium">₹{selectedPricing.price}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Inclusions</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Floor, slab and basin cleaning only</p>
                  <p className="text-yellow-600">
                    Pots will NOT be cleaned by Broomees. Cleaning chemicals, agents etc have to be provided by client
                  </p>
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
                    disabled={!bathrooms}
                    className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                      bathrooms
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

export default BathroomCleaningForm;