import React, { useState } from 'react';
import { ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import {
  updateCookingServices,
  updateCookingGender,
  updateCookingServiceData,
  resetCookingForm,
} from '../store/slices/formsSlice';
import CookingForm from './CookingForm';
import DishwashingAddOn from './DishwashingAddOn';
import BookingSummary from './BookingSummary';
import PaymentForm from './PaymentForm';

interface CookingServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    id: 'home-style',
    title: 'Home-style food',
    price: 3000,
    description: 'Authentic Indian home-style cooking service for delicious meals',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80',
    isMandatory: true,
    note: '+All services inclusive'
  },
  {
    id: 'dishwashing',
    title: 'Dish-washing',
    price: 550,
    description: 'Expert dishwashing service ensuring spotless and sanitized dishes',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&q=80',
    note: '+All services inclusive'
  }
];

const CookingServiceForm = ({ isOpen, onClose }: CookingServiceFormProps) => {
  const dispatch = useAppDispatch();
  const {
    selectedServices,
    gender,
    serviceFormData,
  } = useAppSelector((state) => state.forms.cooking);
  const [showHomeStyleForm, setShowHomeStyleForm] = useState(false);
  const [showDishwashingForm, setShowDishwashingForm] = useState(false);
  const [showShiftsForm, setShowShiftsForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [workShift, setWorkShift] = useState('');
  const [startDate, setStartDate] = useState('');
  const [notes, setNotes] = useState('');
  const [hasReligiousPreference, setHasReligiousPreference] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Calculate base price from cooking service if selected
  const cookingBasePrice = serviceFormData.cooking 
    ? calculateCookingPrice(
        serviceFormData.cooking.mealType, 
        serviceFormData.cooking.peopleCount, 
        serviceFormData.cooking.mealTime
      ) 
    : 3000;

  // Calculate dishwashing price if selected
  const dishwashingPrice = serviceFormData.dishwashing
    ? calculateDishwashingPrice(serviceFormData.dishwashing.peopleCount)
    : 550;

  // Calculate total monthly salary
  const totalMonthlySalary = selectedServices.reduce((total, serviceId) => {
    if (serviceId === 'home-style') {
      return total + cookingBasePrice;
    }
    if (serviceId === 'dishwashing') {
      return total + dishwashingPrice;
    }
    return total;
  }, 0);

  // Helper function to calculate cooking price based on selections
  function calculateCookingPrice(mealType: string, peopleCount: string, mealTime: string): number {
    const pricingData: Record<string, Record<string, Record<string, { price: number, duration: number }>>> = {
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

    try {
      return pricingData[peopleCount]?.[mealType]?.[mealTime]?.price || 3000;
    } catch (error) {
      return 3000; // Default price if calculation fails
    }
  }

  // Helper function to calculate dishwashing price
  function calculateDishwashingPrice(peopleCount: string): number {
    const peoplePricing: Record<string, { price: number, duration: number }> = {
      '1-2 person': { price: 400, duration: 25 },
      '3 people': { price: 700, duration: 40 },
      '4 people': { price: 1000, duration: 45 },
      '5 people': { price: 1300, duration: 50 },
      '6 people': { price: 1600, duration: 60 },
      '7+ people': { price: 2000, duration: 80 }
    };

    return peoplePricing[peopleCount]?.price || 550;
  }

  // Calculate working hours based on selections
  const calculateWorkingHours = (): string => {
    if (serviceFormData.cooking) {
      const { mealType, peopleCount, mealTime } = serviceFormData.cooking;
      
      const pricingData: Record<string, Record<string, Record<string, { price: number, duration: number }>>> = {
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

      try {
        const duration = pricingData[peopleCount]?.[mealType]?.[mealTime]?.duration || 60;
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        
        if (hours === 0) {
          return `${minutes} minutes`;
        }
        
        return minutes === 0 
          ? `${hours}:00 Hour${hours > 1 ? 's' : ''}`
          : `${hours}:${String(minutes).padStart(2, '0')} Hour${hours > 1 ? 's' : ''}`;
      } catch (error) {
        return "1:00 Hour"; // Default if calculation fails
      }
    }
    
    return "1:00 Hour"; // Default
  };

  const isServiceFormCompleted = (serviceId: string): boolean => {
    switch (serviceId) {
      case 'home-style':
        return !!serviceFormData.cooking?.mealType && 
               !!serviceFormData.cooking?.peopleCount && 
               !!serviceFormData.cooking?.mealTime &&
               !!serviceFormData.cooking?.meals.length;
      case 'dishwashing':
        return !!serviceFormData.dishwashing?.peopleCount && 
               !!serviceFormData.dishwashing?.frequency;
      default:
        return false;
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    if (serviceId === 'home-style') {
      setShowHomeStyleForm(true);
      return;
    }
    
    if (serviceId === 'dishwashing') {
      if (selectedServices.includes(serviceId)) {
        // Remove the dishwashing service
        const newServices = selectedServices.filter(id => id !== serviceId);
        dispatch(updateCookingServices(newServices));
        
        // Remove the dishwashing data from serviceFormData
        const newServiceFormData = { ...serviceFormData };
        delete newServiceFormData.dishwashing;
        dispatch(updateCookingServiceData(newServiceFormData));
      } else {
        // Show the form to add dishwashing service
        setShowDishwashingForm(true);
      }
      return;
    }
    
    // For other services (if any in the future)
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter(id => id !== serviceId)
      : [...selectedServices, serviceId];
    dispatch(updateCookingServices(newServices));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleFinalSubmit = () => {
    setShowPaymentForm(true);
  };

  if (showPaymentForm) {
    return (
      <PaymentForm
        isOpen={showPaymentForm}
        onClose={onClose}
        amount={totalMonthlySalary}
        serviceType="cooking"
        serviceData={{
          mealType: serviceFormData.cooking?.mealType,
          peopleCount: serviceFormData.cooking?.peopleCount,
          mealTime: serviceFormData.cooking?.mealTime,
          meals: serviceFormData.cooking?.meals,
          workShift,
          startDate,
          notes,
          hasDishwashing: selectedServices.includes('dishwashing'),
          dishwashingPeopleCount: serviceFormData.dishwashing?.peopleCount,
          dishwashingFrequency: serviceFormData.dishwashing?.frequency
        }}
      />
    );
  }

  if (showSummary) {
    const serviceDetails = {
      type: 'Home-style food',
      details: `How many people are there at home?-${serviceFormData.cooking?.peopleCount}, How many meals per day?-${serviceFormData.cooking?.mealTime}, Veg/Non Veg?-${serviceFormData.cooking?.mealType}`
    };

    return (
      <BookingSummary
        onBack={() => setShowSummary(false)}
        onSubmit={handleFinalSubmit}
        formData={{
          gender,
          startDate,
          notes,
          workShift,
          selectedServices,
          totalAmount: totalMonthlySalary
        }}
        serviceDetails={serviceDetails}
      />
    );
  }

  if (showHomeStyleForm) {
    return (
      <CookingForm 
        isOpen={showHomeStyleForm} 
        onClose={(formData?: { mealType: string; peopleCount: string; mealTime: string; meals: string[] }) => {
          setShowHomeStyleForm(false);
          if (formData) {
            dispatch(updateCookingServiceData({
              ...serviceFormData,
              cooking: formData
            }));
            setShowShiftsForm(true);
          }
        }} 
      />
    );
  }

  if (showDishwashingForm) {
    return (
      <DishwashingAddOn
        isOpen={showDishwashingForm} 
        onClose={(formData?: { peopleCount: string; frequency: string }) => {
          setShowDishwashingForm(false);
          if (formData) {
            const newServices = selectedServices.includes('dishwashing')
              ? selectedServices
              : [...selectedServices, 'dishwashing'];
            dispatch(updateCookingServices(newServices));
            dispatch(updateCookingServiceData({
              ...serviceFormData,
              dishwashing: formData
            }));
          }
        }} 
      />
    );
  }

  if (showShiftsForm) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowShiftsForm(false)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowShiftsForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold ml-4">Work Shifts & Date</h1>
            </div>

            <div className="space-y-8">
              {/* Work Shifts */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Work Shifts</h3>
                <p className="text-gray-600 mb-4">
                  Daily Working Hours ~ {calculateWorkingHours()}
                </p>
                <select
                  value={workShift}
                  onChange={(e) => setWorkShift(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Select shift start time</option>
                  <option value="morning">Morning (6 AM - 10 AM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Start Date</h3>
                <p className="text-gray-600 mb-4">Please select the date of starting the service</p>
                <input
                  type="date"
                  min={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Notes */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Notes</h3>
                <p className="text-gray-600 mb-2">Additional notes (if any)</p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes.."
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Preference */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Preference</h3>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={hasReligiousPreference}
                    onChange={(e) => setHasReligiousPreference(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-gray-600">
                    If you HAVE a religious preference, the salary of the worker would be 10% more than the estimated shown salary
                  </span>
                </label>
              </div>

              {/* Terms Agreement */}
              <div className="bg-white rounded-lg p-4">
                <label className="flex items-start space-x-3">
                  <input
                   required
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="w-5 h-5 mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-gray-600 text-sm">
                    I agree to pay (i) [Monthly salary of the worker] & (ii) [Maidos membership charges] through Maidos' online platform(s) only. The salary will be as shown here (approx.) and this includes 3 paid leaves per month which can be encashed if not taken by the worker.
                  </span>
                </label>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-gray-600">Monthly Salary ~₹{totalMonthlySalary.toLocaleString()} approx.</div>
                  <div className="text-gray-600">
                    Daily Working Hours ~{calculateWorkingHours()} approx.
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!workShift || !startDate || !agreeToTerms}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                    workShift && startDate && agreeToTerms
                      ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm">*estimate varies with workload, shifts, timings and location</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-semibold mb-6">Select a Service</h2>

          {/* Gender Selection */}
          <div className="mb-8">
            <span className="text-gray-700 mr-4">Gender</span>
            <button
              onClick={() => dispatch(updateCookingGender('female'))}
              className={`px-4 py-2 rounded-full border ${
                gender === 'female'
                  ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                  : 'border-gray-300 text-gray-600'
              }`}
            >
              Female
            </button>
          </div>

          {/* Cooking Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Cooking</h2>
            <p className="text-yellow-500 mb-4">Home-style food service is mandatory</p>

            {/* Services List */}
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-start">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-gray-600">{service.rating}</span>
                          </div>
                          {!service.isMandatory && (
                            <button
                              onClick={() => handleServiceToggle(service.id)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                selectedServices.includes(service.id) && isServiceFormCompleted(service.id)
                                  ? 'bg-yellow-500 text-white'
                                  : 'bg-gray-100 text-gray-400'
                              }`}
                            >
                              {selectedServices.includes(service.id) && isServiceFormCompleted(service.id) ? (
                                <Minus className="w-5 h-5" />
                              ) : (
                                <Plus className="w-5 h-5" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="text-yellow-500 font-medium">
                        ₹{service.id === 'home-style' ? cookingBasePrice.toLocaleString() : 
                           service.id === 'dishwashing' && serviceFormData.dishwashing ? 
                           dishwashingPrice.toLocaleString() : service.price.toLocaleString()}/month 
                        <span className="text-gray-500 text-sm"> starting</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      <p className="text-gray-500 text-sm mt-2">{service.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-4 mt-8">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-gray-600">Monthly Salary ~₹{totalMonthlySalary.toLocaleString()} approx.</div>
                <div className="text-gray-600">Daily Working Hours ~{calculateWorkingHours()} approx.</div>
              </div>
              <button
                onClick={() => setShowHomeStyleForm(true)}
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                Next
              </button>
            </div>
            <p className="text-gray-500 text-sm">*estimate varies with workload, shifts, timings and location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingServiceForm;