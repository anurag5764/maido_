import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

interface Service {
  id: string;
  label: string;
  description: string;
  isActive: boolean;
}

const services: Service[] = [
  {
    id: 'cleaning',
    label: 'Domestic Help',
    description: 'House and bathroom cleaning services',
    isActive: true
  },
  {
    id: 'cooking',
    label: 'Cooking',
    description: 'Professional cooking services for your daily meals',
    isActive: true
  },
  {
    id: 'dishwashing',
    label: 'Dishwashing',
    description: 'Professional dishwashing services',
    isActive: true
  },
  {
    id: 'babysitting',
    label: 'Babysitting',
    description: 'Childcare and supervision services',
    isActive: false
  },
  {
    id: 'elderly',
    label: 'Adult Care',
    description: 'Assistance and care for elderly family members',
    isActive: false
  }
];

const ModalForm = ({ isOpen, onClose, initialServiceId }: ModalFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    phone: '',
    email: '',
    address: '',
    landmark: '',
    pincode: '721302',
    
    // Step 2: Service Requirements
    selectedServices: initialServiceId ? [initialServiceId] : [] as string[],
    houseSize: '',
    numberOfPeople: '',
    timing: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({
        ...prev,
        selectedServices: [initialServiceId]
      }));
    }
  }, [initialServiceId]);

  const handleServiceToggle = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service?.isActive) return; // Prevent selecting inactive services

    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.selectedServices.length === 0) {
      alert('Please select at least one service');
      return;
    }
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.phone || !formData.address) {
        alert('Please fill in all required fields');
        return;
      }
    }
    setStep(2);
  };

  const prevStep = () => setStep(1);

  if (!isOpen) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl p-8 max-w-lg w-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
              <p className="text-gray-600">Your request has been submitted successfully. Our team will contact you soon.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
              {step === 1 ? 'Personal Information' : 'Service Requirements'}
            </h2>
            <p className="text-center text-gray-600">Step {step} of 2</p>
            
            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-yellow-600 rounded-full transition-all duration-300"
                style={{ width: `${step * 50}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              // Step 1: Personal Information
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Complete Address *</label>
                  <textarea
                    id="address"
                    required
                    rows={3}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House/Flat No., Street, Area"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
                    <input
                      type="text"
                      id="landmark"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">PIN Code</label>
                    <input
                      type="text"
                      id="pincode"
                      value="721302"
                      disabled
                      className="mt-1 block w-full rounded-lg bg-gray-50 border-gray-300 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Step 2: Service Requirements
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Required *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`relative flex items-start p-4 rounded-lg border
                                  transition-colors duration-200 
                                  ${!service.isActive 
                                    ? 'bg-gray-50 border-gray-200 cursor-not-allowed opacity-75' 
                                    : formData.selectedServices.includes(service.id)
                                      ? 'border-yellow-500 bg-yellow-50 cursor-pointer'
                                      : 'border-gray-200 hover:border-yellow-200 cursor-pointer'
                                  }`}
                        onClick={() => service.isActive && handleServiceToggle(service.id)}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{service.label}</span>
                            {!service.isActive && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                        </div>
                        {service.isActive ? (
                          <div className={`h-5 w-5 rounded border flex items-center justify-center
                                        ${formData.selectedServices.includes(service.id)
                                          ? 'bg-yellow-500 border-yellow-500'
                                          : 'border-gray-300'
                                        }`}
                          >
                            {formData.selectedServices.includes(service.id) && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </div>
                        ) : (
                          <AlertCircle className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="houseSize" className="block text-sm font-medium text-gray-700">House Size (BHK) *</label>
                    <select
                      id="houseSize"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      value={formData.houseSize}
                      onChange={(e) => setFormData({ ...formData, houseSize: e.target.value })}
                    >
                      <option value="">Select size</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4">4 BHK</option>
                      <option value="5+">5+ BHK</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">Number of People *</label>
                    <select
                      id="numberOfPeople"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      value={formData.numberOfPeople}
                      onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2 people</option>
                      <option value="3-4">3-4 people</option>
                      <option value="5-6">5-6 people</option>
                      <option value="7+">7+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timing" className="block text-sm font-medium text-gray-700">Preferred Timing *</label>
                  <select
                    id="timing"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  >
                    <option value="">Select timing</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">Additional Details</label>
                  <textarea
                    id="details"
                    rows={3}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Please provide any specific requirements or preferences..."
                  ></textarea>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step === 2 ? (
                <>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 
                             transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 
                             focus:ring-offset-2 text-gray-700"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-yellow-900 text-white px-6 py-2.5 rounded-lg 
                             hover:bg-yellow-800 transition-colors focus:outline-none focus:ring-2 
                             focus:ring-yellow-500 focus:ring-offset-2 font-medium"
                  >
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 ml-auto bg-yellow-900 text-white px-6 py-2.5 
                           rounded-lg hover:bg-yellow-800 transition-colors focus:outline-none 
                           focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 font-medium"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;