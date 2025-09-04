import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import BookingSummary from './BookingSummary';
import PaymentForm from './PaymentForm';

interface DishwashingProps {
  isOpen: boolean;
  onClose: () => void;
}

const peoplePricing = {
  '1-2 person': { price: 400, duration: 25 },
  '3 people': { price: 700, duration: 40 },
  '4 people': { price: 1000, duration: 45 },
  '5 people': { price: 1300, duration: 50 },
  '6 people': { price: 1600, duration: 60 },
  '7+ people': { price: 2000, duration: 80 }
};

const Dishwashing = ({ isOpen, onClose }: DishwashingProps) => {
  const [peopleCount, setPeopleCount] = useState('');
  const [frequency, setFrequency] = useState('Once only');
  const [showWorkshift, setShowWorkshift] = useState(false);
  const [workShift, setWorkShift] = useState('');
  const [startDate, setStartDate] = useState('');
  const [notes, setNotes] = useState('');
  const [hasReligiousPreference, setHasReligiousPreference] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (peopleCount && frequency) {
      setShowWorkshift(true);
    }
  };

  const handleWorkshiftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleFinalSubmit = () => {
    setShowPaymentForm(true);
  };

  const selectedPricing = peopleCount ? peoplePricing[peopleCount as keyof typeof peoplePricing] : null;

  if (!isOpen) return null;

  if (showPaymentForm && selectedPricing) {
    return (
      <PaymentForm
        isOpen={showPaymentForm}
        onClose={onClose}
        amount={selectedPricing.price}
        serviceData={{
          peopleCount,
          frequency,
          workShift,
          startDate,
          notes
        }}
      />
    );
  }

  if (showSummary) {
    const serviceDetails = {
      type: 'Dishwashing',
      details: `People Count: ${peopleCount}, Frequency: ${frequency}`
    };

    return (
      <BookingSummary
        onBack={() => setShowSummary(false)}
        onSubmit={handleFinalSubmit}
        formData={{
          gender: 'female',
          startDate,
          notes,
          workShift,
          selectedServices: ['dishwashing'],
          totalAmount: selectedPricing?.price || 0
        }}
        serviceDetails={serviceDetails}
        serviceData={{
          peopleCount,
          frequency,
          workShift,
          startDate,
          notes
        }}
      />
    );
  }

  if (showWorkshift) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowWorkshift(false)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowWorkshift(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold ml-4">Work Shifts & Date</h1>
            </div>

            <form onSubmit={handleWorkshiftSubmit} className="space-y-8">
              <div className="space-y-8">
                {/* Work Shifts */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Work Shifts</h3>
                  <p className="text-gray-600 mb-4">
                    Daily Working Hours ~ {selectedPricing ? `${(selectedPricing.duration / 60).toFixed(2)} hours` : '0 hours'}
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
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-gray-600 text-sm">
                      I agree to pay (i) [Monthly salary of the worker] & (ii) [Maidos membership charges] through Mais' online platform(s) only. The salary will be as shown here (approx.) and this includes 3 paid leaves per month which can be encashed if not taken by the worker.
                    </span>
                  </label>
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
                    disabled={!workShift || !startDate || !agreeToTerms}
                    className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                      workShift && startDate && agreeToTerms
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit
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
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-3xl w-full max-w-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
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

export default Dishwashing;