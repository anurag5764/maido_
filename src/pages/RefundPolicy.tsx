import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Ban, Clock, Calculator, AlertCircle } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-yellow-900 mb-4">
              Cancellation & Refund Policy
            </h1>
            <p className="text-gray-600">Last updated: March 2024</p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Ban,
                title: "No Refunds",
                description:
                  "We maintain a strict no-refund policy for all services",
              },
              {
                icon: Clock,
                title: "Processing Time",
                description:
                  "Cancellation requests are processed within 7 days",
              },
              {
                icon: Calculator,
                title: "Pro-rata Calculation",
                description:
                  "Refunds, if applicable, are calculated on pro-rata basis",
              },
              {
                icon: AlertCircle,
                title: "Important Notice",
                description: "Service fees and charges are non-refundable",
              },
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-yellow-900" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Policy Content */}
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                General Policy
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700 font-medium">
                  No cancellations & Refunds are entertained
                </p>
              </div>
              <p className="text-gray-600">
                At Maido, we maintain a strict no-refund policy for all our
                services. This policy is in place to ensure service quality and
                commitment from both parties. All fees, including service
                charges and booking fees, are non-refundable once the service
                has been confirmed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Cancellation Terms
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Before Service Confirmation
                  </h3>
                  <p className="text-gray-600">
                    Cancellations made before service confirmation may be
                    considered, but processing fees are non-refundable.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    After Service Confirmation
                  </h3>
                  <p className="text-gray-600">
                    No refunds will be processed after service confirmation.
                    This includes all fees and charges.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Service Adjustments
              </h2>
              <p className="text-gray-600 mb-4">
                While we don't offer refunds, we provide the following
                alternatives:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Service rescheduling (subject to availability)</li>
                <li>Helper replacement (as per our replacement policy)</li>
                <li>Service credit for future bookings</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Exceptional Circumstances
              </h2>
              <p className="text-gray-600 mb-4">
                In rare cases, we may consider refunds under the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Service unavailability in your area</li>
                <li>Technical issues preventing service delivery</li>
                <li>Legal or regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Processing Time
              </h2>
              <p className="text-gray-600">
                In the rare event that a refund is approved:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Processing time: 7-14 business days</li>
                <li>Refund method: Original payment method</li>
                <li>Additional bank processing time may apply</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                For any questions about our refund policy, please contact our
                support team at support@maido.com
              </p>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  Note: This policy is subject to change without notice. Please
                  refer to the latest version on our website.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
