import React, { useState } from "react";
import { MapPin, Info, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";

interface BookingSummaryProps {
  onBack: () => void;
  onSubmit: () => void;
  formData: {
    address?: string;
    gender: string;
    startDate: string;
    notes: string;
    workShift: string;
    selectedServices: string[];
    totalAmount: number;
  };
  serviceDetails?: {
    type: string;
    details: string;
  };
  serviceData?: {
    peopleCount: string;
    frequency: string;
    workShift: string;
    startDate: string;
    notes: string;
  };
}

const BookingSummary = ({
  onBack,
  onSubmit,
  formData,
  serviceDetails,
  serviceData,
}: BookingSummaryProps) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const bookingFee = 49.0;
  const totalAmount = bookingFee;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={onBack}></div>

          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl">
            {/* Header */}
            <div className="flex items-center p-6 border-b border-gray-200">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold ml-4">Summary</h1>
            </div>

            <div className="p-6 space-y-6">
              {/* Booking Details */}
              <div className="bg-white rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Booking Details</h3>
                  <Info className="w-5 h-5 text-gray-400" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Includes</span>
                    <span className="text-gray-900">
                      {serviceDetails?.type || "Service"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gender</span>
                    <span className="text-gray-900 capitalize">
                      {formData.gender}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Start Date</span>
                    <span className="text-gray-900">
                      {new Date(formData.startDate).toLocaleDateString(
                        "en-US",
                        { day: "2-digit", month: "short" }
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Notes</span>
                    <span className="text-gray-900">
                      {formData.notes || "NA"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work shifts</span>
                    <span className="text-gray-900">{formData.workShift}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Details</span>
                    <span className="text-gray-900 text-right max-w-[60%]">
                      {serviceDetails?.details}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Worker Salary</span>
                    <span className="text-gray-900">
                      ₹{formData.totalAmount.toLocaleString()}/-
                    </span>
                  </div>
                </div>
              </div>

              {/* Billing Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Billing</h3>
                  <button className="text-yellow-500 font-medium">
                    View Coupons
                  </button>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Booking Fee (Non refundable)</span>
                  <span>₹{bookingFee.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 italic">
                *estimate varies with workload, shifts, timings and location
              </p>

              {/* Terms and Total */}
              <div className="space-y-4">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="/terms" className="text-yellow-500">
                      Terms And Conditions
                    </Link>
                  </span>
                </label>

                <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-xl">
                  <div>
                    <span className="text-gray-600">Total Amount</span>
                    <div className="text-xl font-semibold">
                      ₹{totalAmount.toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowPaymentForm(true), onSubmit;
                    }}
                    className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-yellow-600 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentForm
        isOpen={showPaymentForm}
        onClose={() => setShowPaymentForm(false)}
        amount={totalAmount}
        serviceData={serviceData}
      />
    </>
  );
};

export default BookingSummary;
