import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface CookingFormProps {
  isOpen: boolean;
  onClose: (formData?: { mealType: string; peopleCount: string; mealTime: string; meals: string[] }) => void;
}

// Pricing data structure based on the provided pricing table
const pricingData = {
  '1 person': {
    'Vegetarian': {
      'Lunch': { price: 3000, duration: 60 },
      'Dinner': { price: 3500, duration: 60 },
      'Both': { price: 4500, duration: 60 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 3300, duration: 60 },
      'Dinner': { price: 3300, duration: 60 },
      'Both': { price: 5000, duration: 60 }
    }
  },
  '2 people': {
    'Vegetarian': {
      'Lunch': { price: 3000, duration: 60 },
      'Dinner': { price: 3000, duration: 60 },
      'Both': { price: 5000, duration: 60 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 3300, duration: 60 },
      'Dinner': { price: 3300, duration: 60 },
      'Both': { price: 5500, duration: 60 }
    }
  },
  '3-5 people': {
    'Vegetarian': {
      'Lunch': { price: 4100, duration: 60 },
      'Dinner': { price: 4100, duration: 60 },
      'Both': { price: 6200, duration: 90 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 4510, duration: 60 },
      'Dinner': { price: 4510, duration: 60 },
      'Both': { price: 6800, duration: 90 }
    }
  },
  '4 people': {
    'Vegetarian': {
      'Lunch': { price: 5000, duration: 90 },
      'Dinner': { price: 5000, duration: 90 },
      'Both': { price: 7500, duration: 150 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 5500, duration: 120 },
      'Dinner': { price: 5500, duration: 120 },
      'Both': { price: 8300, duration: 150 }
    }
  },
  '5-6 people': {
    'Vegetarian': {
      'Lunch': { price: 7000, duration: 120 },
      'Dinner': { price: 7000, duration: 120 },
      'Both': { price: 10500, duration: 165 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 7700, duration: 121 },
      'Dinner': { price: 7700, duration: 121 },
      'Both': { price: 11600, duration: 182 }
    }
  },
  '7-8 people': {
    'Vegetarian': {
      'Lunch': { price: 8000, duration: 120 },
      'Dinner': { price: 8000, duration: 120 },
      'Both': { price: 12000, duration: 180 }
    },
    'Veg+Non Veg': {
      'Lunch': { price: 8800, duration: 132 },
      'Dinner': { price: 8800, duration: 132 },
      'Both': { price: 13200, duration: 198 }
    }
  }
};

const mealInclusions = {
  lunch: [
    'Dal',
    'Rice',
    'Roti',
    'Sabzi (2 types)',
    'Salad'
  ],
  dinner: [
    'Dal',
    'Rice',
    'Roti',
    'Sabzi (2 types)',
    'Salad'
  ]
};

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours === 0) {
    return `${minutes} Minutes`;
  }
  return remainingMinutes === 0 
    ? `${hours}:00 Hour${hours > 1 ? 's' : ''}`
    : `${hours}:${String(remainingMinutes).padStart(2, '0')} Hour${hours > 1 ? 's' : ''}`;
};

const CookingForm = ({ isOpen, onClose }: CookingFormProps) => {
  const [mealType, setMealType] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  const handleMealToggle = (meal: string) => {
    if (selectedMeals.includes(meal)) {
      // Remove the meal
      const newSelectedMeals = selectedMeals.filter(m => m !== meal);
      setSelectedMeals(newSelectedMeals);
      
      // Update meal time based on remaining selections
      if (newSelectedMeals.length === 0) {
        setMealTime('');
      } else if (newSelectedMeals.includes('lunch') && !newSelectedMeals.includes('dinner')) {
        setMealTime('Lunch');
      } else if (!newSelectedMeals.includes('lunch') && newSelectedMeals.includes('dinner')) {
        setMealTime('Dinner');
      }
    } else {
      // Add the meal
      const newSelectedMeals = [...selectedMeals, meal];
      setSelectedMeals(newSelectedMeals);
      
      // Update meal time based on new selections
      if (newSelectedMeals.includes('lunch') && newSelectedMeals.includes('dinner')) {
        setMealTime('Both');
      } else if (newSelectedMeals.includes('lunch')) {
        setMealTime('Lunch');
      } else if (newSelectedMeals.includes('dinner')) {
        setMealTime('Dinner');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mealType && peopleCount && mealTime && selectedMeals.length > 0) {
      onClose({ mealType, peopleCount, mealTime, meals: selectedMeals });
    }
  };

  // Calculate pricing based on selections
  const selectedPricing = mealType && peopleCount && mealTime 
    ? pricingData[peopleCount as keyof typeof pricingData]?.[mealType as keyof (typeof pricingData)[keyof typeof pricingData]]?.[mealTime as keyof (typeof pricingData)[keyof typeof pricingData][keyof (typeof pricingData)[keyof typeof pricingData]]]
    : null;

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
              Home-style food
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Meal Type Selection */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">What type of meals?</h3>
                  <p className="text-gray-500 text-sm mt-1">Select 1 out of 2 options</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    'Vegetarian',
                    'Veg+Non Veg'
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setMealType(option)}
                      className={`py-3 px-4 rounded-full border text-center transition-all
                                ${mealType === option
                                  ? 'border-yellow-500 bg-yellow-50 text-yellow-700 shadow-sm'
                                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meals Per Day Selection */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">Which meals?</h3>
                  <p className="text-gray-500 text-sm mt-1">Select at least one meal</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {['lunch', 'dinner'].map((meal) => (
                    <button
                      key={meal}
                      type="button"
                      onClick={() => handleMealToggle(meal)}
                      className={`relative py-6 px-4 rounded-xl border text-center transition-all
                                ${selectedMeals.includes(meal)
                                  ? 'border-yellow-500 bg-yellow-50'
                                  : 'border-gray-200 hover:border-gray-300'
                                }`}
                    >
                      <h4 className="text-lg font-medium capitalize mb-2 text-gray-900">
                        {meal}
                      </h4>
                      <div className="text-sm text-gray-600 line-clamp-2">
                        {mealInclusions[meal as keyof typeof mealInclusions].slice(0, 2).join(', ')}...
                      </div>
                      {selectedMeals.includes(meal) && (
                        <div className="absolute top-3 right-3">
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* People Count */}
              <div>
                <div className="mb-2">
                  <h3 className="text-lg text-gray-900">For how many people?</h3>
                  <p className="text-gray-500 text-sm mt-1">Select 1 option</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {[
                    '1 person',
                    '2 people',
                    '3-5 people',
                    '4 people',
                    '5-6 people',
                    '7-8 people'
                  ].map((option) => (
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

              {/* Inclusions */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Inclusions</h3>
                <div className="space-y-6">
                  {selectedMeals.map(meal => (
                    <div key={meal}>
                      <h4 className="font-medium text-gray-900 capitalize mb-2">{meal} includes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {mealInclusions[meal as keyof typeof mealInclusions].map((item, index) => (
                          <li key={index} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-yellow-600">
                      Note: Fresh ingredients and kitchen equipment to be provided by client
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Details */}
              {selectedPricing && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Service Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Meal Type:</span>
                      <span className="font-medium">{mealType}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>People Count:</span>
                      <span className="font-medium">{peopleCount}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Meal Time:</span>
                      <span className="font-medium">{mealTime}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Daily Duration:</span>
                      <span className="font-medium">{formatDuration(selectedPricing.duration)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Monthly Price:</span>
                      <span className="font-medium">₹{selectedPricing.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Bar */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">Monthly Salary</span>
                      <span className="text-yellow-600 font-semibold">
                        ~₹{selectedPricing ? selectedPricing.price.toLocaleString() : '0.00'}
                      </span>
                      <span className="text-gray-600">approx.</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">Daily Working Hours</span>
                      <span className="text-yellow-600 font-semibold">
                        ~{selectedPricing ? formatDuration(selectedPricing.duration) : '0:00'}
                      </span>
                      <span className="text-gray-600">approx.</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!mealType || !peopleCount || !mealTime || selectedMeals.length === 0}
                    className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                      mealType && peopleCount && mealTime && selectedMeals.length > 0
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                   Next
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

export default CookingForm;