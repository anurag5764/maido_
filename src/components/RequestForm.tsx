import React, { useState } from 'react';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    timing: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
        <p className="text-gray-600">Your request has been submitted! Our team will contact you soon.</p>
      </div>
    );
  }

  return (
    <section id="request-form" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Tell Us What You Need</h2>
          <p className="text-center text-gray-600 mb-8">Fill out the form, and we'll contact you with the best options.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City/Locality</label>
              <select
                id="city"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                <option value="">Select a city</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
              <select
                id="service"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                <option value="cleaning">House Cleaning</option>
                <option value="cooking">Cooking</option>
                <option value="babysitting">Babysitting</option>
                <option value="elderly">Elderly Care</option>
                <option value="pet">Pet Care</option>
                <option value="security">Home Security</option>
              </select>
            </div>

            <div>
              <label htmlFor="timing" className="block text-sm font-medium text-gray-700">Preferred Timing</label>
              <select
                id="timing"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Request Help Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;