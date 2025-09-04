import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Scale, FileCheck, HelpCircle } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-yellow-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">Last updated: March 2024</p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Service Protection",
                description:
                  "Clear guidelines to protect both users and service providers",
              },
              {
                icon: Scale,
                title: "Fair Policies",
                description: "Balanced terms ensuring fairness for all parties",
              },
              {
                icon: FileCheck,
                title: "Clear Agreement",
                description: "Transparent terms written in simple language",
              },
              {
                icon: HelpCircle,
                title: "Support Available",
                description: "24/7 assistance for any terms-related queries",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-900" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Terms Content */}
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                1. Services
              </h2>
              <p className="text-gray-600 mb-4">Maido provides:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  A platform connecting users with independent service providers
                  ("Helpers") for housekeeping, cooking, childcare, and other
                  domestic services
                </li>
                <li>
                  Helper verification and background checks (where possible)
                </li>
                <li>Payment processing and subscription management</li>
                <li>Helper training and quality assessment</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Maido does not employ Helpers. Helpers are independent service
                providers responsible for their services. Maido facilitates
                connections but is not liable for Helper services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                2. Account Creation
              </h2>
              <p className="text-gray-600">
                To use our services, you must create an account with accurate
                information. You are responsible for maintaining account
                security and all activities conducted through your account.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                3. User Content
              </h2>
              <p className="text-gray-600">
                By posting reviews, comments, or other content on our platform,
                you grant Maido a non-exclusive, worldwide license to use this
                content for service improvement and promotional purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                4. Bookings and Subscriptions
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Bookings are made on a subscription basis (6 or 12 months)
                </li>
                <li>Cancellations before confirmation incur no charge</li>
                <li>
                  Post-confirmation cancellations are subject to our refund
                  policy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                5. Pricing and Payments
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Helper's Salary: Paid directly to the Helper</li>
                <li>Booking Fee: Charged when placing a booking</li>
                <li>Subscription Fee: Charged before Helper arrangement</li>
                <li>
                  All fees are non-refundable except as specified in our refund
                  policy
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                6. Replacement Policy
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Limited replacements provided based on subscription duration
                </li>
                <li>
                  Replacements processed within 1-7 days for part-time services
                  and 15-20 days for full-time services
                </li>
                <li>
                  Replacement requests must have valid reasons (not based on
                  discriminatory grounds)
                </li>
                <li>
                  Job descriptions must remain consistent for replacements
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                7. Refund Policy
              </h2>
              <p className="text-gray-600 mb-4">
                Refunds calculated on a pro-rata basis considering:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Tenure subscribed and utilized, OR</li>
                <li>Number of replacements exhausted (whichever is lower)</li>
                <li>A standard cancellation fee applies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                8. User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">You must:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Provide accurate information</li>
                <li>Treat Helpers with respect and dignity</li>
                <li>Provide a safe working environment</li>
                <li>Not discriminate against Helpers</li>
                <li>Report inappropriate behavior within 48 hours</li>
                <li>Provide basic meals for shifts longer than 5 hours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                9. Non-Solicitation
              </h2>
              <p className="text-gray-600">
                You agree not to directly hire or employ Helpers introduced
                through Maido without payment of a subscription fee.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                10. Intellectual Property
              </h2>
              <p className="text-gray-600">
                All platform content and technology belong to Maido. You receive
                a limited license to use our services as intended.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                11. Termination
              </h2>
              <p className="text-gray-600">
                Maido may restrict or terminate your access for breach of terms
                or other legitimate reasons. You may terminate by contacting
                support.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                12. Liability Limitation
              </h2>
              <p className="text-gray-600">
                Services are provided "as is" without warranties. Maido is not
                liable for Helper services or any indirect, incidental, or
                consequential damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                13. Dispute Resolution
              </h2>
              <p className="text-gray-600">
                Disputes shall be resolved through arbitration under applicable
                laws. The arbitrator's decision is final and binding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-gray-600">
                These terms may be revised at any time. Continued use of the
                platform implies acceptance of changes.
              </p>
              <p className="text-gray-600 mt-4">
                For questions or concerns, contact support@maido.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
