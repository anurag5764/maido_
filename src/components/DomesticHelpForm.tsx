import React, { useState } from "react";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  updateDomesticHelpServices,
  updateDomesticHelpGender,
  updateDomesticHelpHouseDetails,
  updateDomesticHelpDogs,
  updateDomesticHelpSchedule,
  updateDomesticHelpNotes,
  updateDomesticHelpPreferences,
  resetDomesticHelpForm,
  updateBathroomService,
  updateDustingService,
  updateDishwashingService,
} from "../store/slices/formsSlice";
import BathroomCleaningForm from "./BathroomCleaningForm";
import DustingForm from "./DustingForm";
import DishwashingAddOn from "./DishwashingAddOn";
import BookingSummary from "./BookingSummary";

interface DomesticHelpFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Service {
  id: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  isMandatory?: boolean;
  note?: string;
}

interface ServiceFormData {
  bathroom?: {
    bathrooms: string;
  };
  dusting?: {
    duration: string;
  };
  dishwashing?: {
    peopleCount: string;
    frequency: string;
  };
}

const services: Service[] = [
  {
    id: "brooming",
    title: "Brooming, Mopping",
    price: 2500,
    description:
      "Complete floor cleaning and sanitization for a sparkling clean space",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    isMandatory: true,
    note: "+All services inclusive",
  },
  {
    id: "bathroom",
    title: "Bathroom cleaning",
    price: 500,
    description: "Thorough bathroom cleaning for a hygienic space",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    note: "+All services inclusive",
  },
  {
    id: "dusting",
    title: "Dusting",
    price: 800,
    description: "Professional dusting service for a spotless dust-free home",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    note: "+All services inclusive",
  },
  {
    id: "dishwashing",
    title: "Dish-washing",
    price: 500,
    description:
      "Expert dishwashing service ensuring spotless and sanitized dishes",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1585837575652-267c041d77d4?auto=format&fit=crop&q=80",
    note: "+All services inclusive",
  },
];

const pricingMatrix: Record<
  string,
  Record<string, { price: number; duration: number }>
> = {
  "1 BHK": {
    "1 floor only": { price: 3100, duration: 45 },
    "2 floors": { price: 4500, duration: 60 },
    "3 floors": { price: 6300, duration: 75 },
    "4 floors": { price: 8000, duration: 90 },
    "5 floors": { price: 9800, duration: 117 },
  },
  "2 BHK": {
    "1 floor only": { price: 3000, duration: 60 },
    "2 floors": { price: 4500, duration: 60 },
    "3 floors": { price: 6300, duration: 120 },
    "4 floors": { price: 8000, duration: 150 },
    "5 floors": { price: 9300, duration: 180 },
  },
  "3 BHK": {
    "1 floor only": { price: 4000, duration: 90 },
    "2 floors": { price: 6300, duration: 150 },
    "3 floors": { price: 10000, duration: 180 },
    "4 floors": { price: 12800, duration: 240 },
    "5 floors": { price: 15600, duration: 300 },
  },
  "4 BHK": {
    "1 floor only": { price: 5000, duration: 90 },
    "2 floors": { price: 9000, duration: 150 },
    "3 floors": { price: 12500, duration: 240 },
    "4 floors": { price: 16000, duration: 300 },
    "5 floors": { price: 19500, duration: 360 },
  },
  "5 BHK": {
    "1 floor only": { price: 5300, duration: 90 },
    "2 floors": { price: 9500, duration: 150 },
    "3 floors": { price: 12700, duration: 240 },
    "4 floors": { price: 17200, duration: 300 },
    "5 floors": { price: 20500, duration: 360 },
  },
  "6 BHK": {
    "1 floor only": { price: 5800, duration: 120 },
    "2 floors": { price: 10400, duration: 180 },
    "3 floors": { price: 14400, duration: 270 },
    "4 floors": { price: 18400, duration: 360 },
    "5 floors": { price: 22425, duration: 420 },
  },
};

const bathroomPricing = {
  "1-2 bathrooms": { price: 300, duration: 10 },
  "3-4 bathrooms": { price: 450, duration: 30 },
  "5-6 bathrooms": { price: 600, duration: 45 },
};

const dustingPricing = {
  "30 mins": { price: 300, duration: 0.5 },
  "1 hour": { price: 800, duration: 1 },
  "1.5 hrs": { price: 1300, duration: 1.5 },
  "2 hours": { price: 1800, duration: 2 },
};

const dishwashingPricing = {
  "1-2 person": { price: 400, duration: 25 },
  "3 people": { price: 700, duration: 40 },
  "4 people": { price: 1000, duration: 45 },
  "5 people": { price: 1300, duration: 50 },
  "6 people": { price: 1600, duration: 60 },
  "7+ people": { price: 2000, duration: 80 },
};

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours === 0) {
    return `${minutes} Minutes`;
  }
  return remainingMinutes === 0
    ? `${hours}:00 Hour${hours > 1 ? "s" : ""}`
    : `${hours}:${String(remainingMinutes).padStart(2, "0")} Hour${
        hours > 1 ? "s" : ""
      }`;
};

const DomesticHelpForm = ({ isOpen, onClose }: DomesticHelpFormProps) => {
  const dispatch = useAppDispatch();
  const {
    selectedServices,
    gender,
    houseSize,
    floors,
    hasDogs,
    workShift,
    startDate,
    notes,
    hasReligiousPreference,
    agreeToTerms,
    bathroom,
    dusting,
    dishwashing,
  } = useAppSelector((state) => state.forms.domesticHelp);
  const [showSummary, setShowSummary] = useState(false);
  const [showBroomingDetails, setShowBroomingDetails] = useState(false);
  const [showBathroomForm, setShowBathroomForm] = useState(false);
  const [showDustingForm, setShowDustingForm] = useState(false);
  const [showDishwashingForm, setShowDishwashingForm] = useState(false);
  const [showShiftsForm, setShowShiftsForm] = useState(false);

  const selectedPricing =
    houseSize && floors ? pricingMatrix[houseSize]?.[floors] : null;

  // Calculate bathroom price if selected
  const bathroomPrice = bathroom?.bathrooms
    ? bathroomPricing[bathroom.bathrooms as keyof typeof bathroomPricing]
        ?.price || 300
    : 300;

  // Calculate dusting price if selected
  const dustingPrice = dusting?.duration
    ? dustingPricing[dusting.duration as keyof typeof dustingPricing]?.price ||
      800
    : 800;

  // Calculate dishwashing price if selected
  const dishwashingPrice = dishwashing?.peopleCount
    ? dishwashingPricing[
        dishwashing.peopleCount as keyof typeof dishwashingPricing
      ]?.price || 400
    : 400;

  // Calculate total monthly salary with dynamic prices
  const totalMonthlySalary = selectedServices.reduce((total, serviceId) => {
    if (serviceId === "brooming" && selectedPricing) {
      return total + selectedPricing.price;
    }
    if (serviceId === "bathroom") {
      return total + bathroomPrice;
    }
    if (serviceId === "dusting") {
      return total + dustingPrice;
    }
    if (serviceId === "dishwashing") {
      return total + dishwashingPrice;
    }
    return total;
  }, 0);

  // Calculate total working hours
  const calculateTotalDuration = (): number => {
    let totalMinutes = 0;

    if (selectedServices.includes("brooming") && selectedPricing) {
      totalMinutes += selectedPricing.duration;
    }

    if (selectedServices.includes("bathroom") && bathroom?.bathrooms) {
      totalMinutes +=
        bathroomPricing[bathroom.bathrooms as keyof typeof bathroomPricing]
          ?.duration || 0;
    }

    if (selectedServices.includes("dusting") && dusting?.duration) {
      totalMinutes +=
        dustingPricing[dusting.duration as keyof typeof dustingPricing]
          ?.duration * 60 || 0;
    }

    if (selectedServices.includes("dishwashing") && dishwashing?.peopleCount) {
      totalMinutes +=
        dishwashingPricing[
          dishwashing.peopleCount as keyof typeof dishwashingPricing
        ]?.duration || 0;
    }

    return totalMinutes;
  };

  const isServiceFormCompleted = (serviceId: string): boolean => {
    switch (serviceId) {
      case "bathroom":
        return !!bathroom?.bathrooms;
      case "dusting":
        return !!dusting?.duration;
      case "dishwashing":
        return !!dishwashing?.peopleCount && !!dishwashing?.frequency;
      default:
        return false;
    }
  };

  const toggleService = (serviceId: string) => {
    if (serviceId === "brooming") {
      setShowBroomingDetails(true);
      return;
    }

    if (selectedServices.includes(serviceId)) {
      // Remove service
      const newServices = selectedServices.filter((id) => id !== serviceId);
      dispatch(updateDomesticHelpServices(newServices));

      // Also remove the service data
      if (serviceId === "bathroom") {
        dispatch(updateBathroomService({ bathrooms: "" }));
      } else if (serviceId === "dusting") {
        dispatch(updateDustingService({ duration: "" }));
      } else if (serviceId === "dishwashing") {
        dispatch(updateDishwashingService({ peopleCount: "", frequency: "" }));
      }
    } else {
      // Show form for adding service
      if (serviceId === "bathroom") {
        setShowBathroomForm(true);
      } else if (serviceId === "dusting") {
        setShowDustingForm(true);
      } else if (serviceId === "dishwashing") {
        setShowDishwashingForm(true);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetDomesticHelpForm());
    onClose();
  };
  const handleFinalSubmit = () => {
    setShowSummary(true);
  };

  if (!isOpen) return null;

  if (showSummary) {
    const selectedServiceNames = selectedServices
      .map((serviceId) => {
        const service = services.find((s) => s.id === serviceId);
        return service?.title || serviceId;
      })
      .join(", ");

    const serviceDetails = {
      type: selectedServiceNames,
      details: `House Size: ${houseSize}, Floors: ${floors}${
        bathroom ? `, Bathrooms: ${bathroom.bathrooms}` : ""
      }${dusting ? `, Dusting Duration: ${dusting.duration}` : ""}${
        dishwashing ? `, Dishwashing People: ${dishwashing.peopleCount}` : ""
      }`,
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
          totalAmount: totalMonthlySalary,
        }}
        serviceDetails={serviceDetails}
      />
    );
  }

  if (showBathroomForm) {
    return (
      <BathroomCleaningForm
        isOpen={showBathroomForm}
        onClose={(formData?: { bathrooms: string }) => {
          setShowBathroomForm(false);
          if (formData) {
            dispatch(
              updateDomesticHelpServices([...selectedServices, "bathroom"])
            );
            dispatch(updateBathroomService(formData));
          }
        }}
      />
    );
  }

  if (showDustingForm) {
    return (
      <DustingForm
        isOpen={showDustingForm}
        onClose={(formData?: { duration: string }) => {
          setShowDustingForm(false);
          if (formData) {
            dispatch(
              updateDomesticHelpServices([...selectedServices, "dusting"])
            );
            dispatch(updateDustingService(formData));
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
            dispatch(
              updateDomesticHelpServices([...selectedServices, "dishwashing"])
            );
            dispatch(updateDishwashingService(formData));
          }
        }}
      />
    );
  }

  if (showShiftsForm) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowShiftsForm(false)}
          ></div>

          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setShowShiftsForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold ml-4">
                Work Shifts & Date
              </h1>
            </div>

            <div className="space-y-8">
              {/* Work Shifts */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Work Shifts</h3>
                <p className="text-gray-600 mb-4">
                  Daily Working Hours ~{" "}
                  {formatDuration(calculateTotalDuration())}
                </p>
                <select
                  value={workShift}
                  onChange={(e) =>
                    dispatch(
                      updateDomesticHelpSchedule({ workShift: e.target.value })
                    )
                  }
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
                <p className="text-gray-600 mb-4">
                  Please select the date of starting the service
                </p>
                <input
                  type="date"
                  min={
                    new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                  value={startDate}
                  onChange={(e) =>
                    dispatch(
                      updateDomesticHelpSchedule({ startDate: e.target.value })
                    )
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Notes */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Notes</h3>
                <p className="text-gray-600 mb-2">Additional notes (if any)</p>
                <textarea
                  value={notes}
                  onChange={(e) =>
                    dispatch(updateDomesticHelpNotes(e.target.value))
                  }
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
                    onChange={(e) =>
                      dispatch(
                        updateDomesticHelpPreferences({
                          hasReligiousPreference: e.target.checked,
                        })
                      )
                    }
                    className="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-gray-600">
                    If you HAVE a religious preference, the salary of the worker
                    would be 10% more than the estimated shown salary
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
                    onChange={(e) =>
                      dispatch(
                        updateDomesticHelpPreferences({
                          agreeToTerms: e.target.checked,
                        })
                      )
                    }
                    className="w-5 h-5 mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="text-gray-600 text-sm">
                    I agree to pay (i) [Monthly salary of the worker] & (ii)
                    [Maidos membership charges] through Maidos' online
                    platform(s) only. The salary will be as shown here (approx.)
                    and this includes 3 paid leaves per month which can be
                    encashed if not taken by the worker.
                  </span>
                </label>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-gray-600">
                    Monthly Salary ~₹{totalMonthlySalary.toLocaleString()}{" "}
                    approx.
                  </div>
                  <div className="text-gray-600">
                    Daily Working Hours ~
                    {formatDuration(calculateTotalDuration())} approx.
                  </div>
                </div>
                <button
                  onClick={handleFinalSubmit}
                  disabled={!workShift || !startDate || !agreeToTerms}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                    workShift && startDate && agreeToTerms
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                *estimate varies with workload, shifts, timings and location
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showBroomingDetails) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setShowBroomingDetails(false)}
        ></div>
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            {/* Header */}
            <div className="flex items-center mb-8">
              <button
                onClick={() => setShowBroomingDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-semibold ml-4">Brooming, Mopping</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Content */}
              <div className="space-y-12">
                {/* House Size */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Select house size{" "}
                    <span className="text-sm font-normal text-gray-500">
                      (Please describe the area of ONLY 1 floor)
                    </span>
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Select 1 out of 6 options
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK", "6 BHK"].map(
                      (size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateDomesticHelpHouseDetails({
                                houseSize: size,
                              })
                            )
                          }
                          className={`py-3 px-4 rounded-xl border text-center ${
                            houseSize === size
                              ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                              : "border-gray-200 text-gray-600 hover:border-yellow-200"
                          }`}
                        >
                          {size}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Number of Floors */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    How many such floors?
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Select 1 out of 5 options
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "1 floor only",
                      "2 floors",
                      "3 floors",
                      "4 floors",
                      "5 floors",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          dispatch(
                            updateDomesticHelpHouseDetails({ floors: option })
                          )
                        }
                        className={`py-3 px-4 rounded-xl border text-center ${
                          floors === option
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                            : "border-gray-200 text-gray-600 hover:border-yellow-200"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                {selectedPricing && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Service Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>House Size:</span>
                        <span className="font-medium">{houseSize}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Number of Floors:</span>
                        <span className="font-medium">{floors}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Daily Duration:</span>
                        <span className="font-medium">
                          {formatDuration(selectedPricing.duration)}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Monthly Price:</span>
                        <span className="font-medium">
                          ₹{selectedPricing.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dogs Question */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Do you have dog(s)?
                  </h3>
                  <p className="text-gray-500 mb-2">
                    Select 1 out of 2 options
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    This would help us search for a pet friendly worker (if
                    needed)
                  </p>
                  <div className="flex gap-4">
                    {["yes", "no"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          dispatch(
                            updateDomesticHelpDogs(option as "yes" | "no")
                          )
                        }
                        className={`py-3 px-12 rounded-xl border ${
                          hasDogs === option
                            ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                            : "border-gray-200 text-gray-600 hover:border-yellow-200"
                        }`}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-8 border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-gray-600">
                      Monthly Salary ~₹
                      {selectedPricing
                        ? selectedPricing.price.toLocaleString()
                        : " 0.00"}{" "}
                      approx.
                    </div>
                    <div className="text-gray-600">
                      Daily Working Hours ~
                      {selectedPricing
                        ? formatDuration(selectedPricing.duration)
                        : "0:00"}{" "}
                      approx.
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBroomingDetails(false);
                      setShowShiftsForm(true);
                    }}
                    disabled={!houseSize || !floors}
                    className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                      houseSize && floors
                        ? "bg-yellow-500 text-white hover:bg-yellow-600"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Next
                  </button>
                </div>
                <p className="text-gray-500 text-sm">
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
              onClick={() => dispatch(updateDomesticHelpGender("female"))}
              className={`px-4 py-2 rounded-full border ${
                gender === "female"
                  ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              Female
            </button>
          </div>

          {/* Cleaning Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Cleaning</h2>
            <p className="text-yellow-500 mb-4">
              Brooming, Mopping service is mandatory
            </p>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service) => {
                // Calculate dynamic price based on service type and selected options
                let dynamicPrice = service.price;
                if (service.id === "brooming" && selectedPricing) {
                  dynamicPrice = selectedPricing.price;
                } else if (service.id === "bathroom" && bathroom?.bathrooms) {
                  dynamicPrice =
                    bathroomPricing[
                      bathroom.bathrooms as keyof typeof bathroomPricing
                    ]?.price || 300;
                } else if (service.id === "dusting" && dusting?.duration) {
                  dynamicPrice =
                    dustingPricing[
                      dusting.duration as keyof typeof dustingPricing
                    ]?.price || 800;
                } else if (
                  service.id === "dishwashing" &&
                  dishwashing?.peopleCount
                ) {
                  dynamicPrice =
                    dishwashingPricing[
                      dishwashing.peopleCount as keyof typeof dishwashingPricing
                    ]?.price || 400;
                }

                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl border border-gray-200 p-4"
                  >
                    <div className="flex items-start">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span className="ml-1 text-gray-600">
                                {service.rating}
                              </span>
                            </div>
                            {!service.isMandatory && (
                              <button
                                onClick={() => toggleService(service.id)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  selectedServices.includes(service.id) &&
                                  isServiceFormCompleted(service.id)
                                    ? "bg-yellow-500 text-white"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                              >
                                {selectedServices.includes(service.id) &&
                                isServiceFormCompleted(service.id) ? (
                                  <Minus className="w-5 h-5" />
                                ) : (
                                  <Plus className="w-5 h-5" />
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="text-yellow-500 font-medium">
                          ₹{dynamicPrice.toLocaleString()}/month{" "}
                          <span className="text-gray-500 text-sm">
                            starting
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                          {service.description}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                          {service.note}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-4 mt-8">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-gray-600">
                  Monthly Salary ~₹{totalMonthlySalary.toLocaleString()} approx.
                </div>
                <div className="text-gray-600">
                  Daily Working Hours ~
                  {formatDuration(calculateTotalDuration())} approx.
                </div>
              </div>
              <button
                onClick={() => setShowBroomingDetails(true)}
                className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                Next
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              *estimate varies with workload, shifts, timings and location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomesticHelpForm;
