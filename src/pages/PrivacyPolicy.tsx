import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Lock, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-yellow-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: March 2024</p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Data Protection",
                description:
                  "We implement industry-standard security measures to protect your data",
              },
              {
                icon: Lock,
                title: "Secure Transactions",
                description:
                  "All transactions are encrypted and processed securely",
              },
              {
                icon: UserCheck,
                title: "User Control",
                description:
                  "You have full control over your personal information",
              },
              {
                icon: Mail,
                title: "Communication Choice",
                description:
                  "Opt in/out of marketing communications at any time",
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

          {/* Policy Content */}
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 mb-4">
                Maido provides web-based solutions connecting customers with
                service providers. This policy covers how we collect, use, and
                protect your personal data when you use our platform
                (website/mobile apps) or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Data Collection
              </h2>
              <p className="text-gray-600 mb-4">We collect:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Contact information (address, email, phone)</li>
                <li>User-generated content (photos, comments)</li>
                <li>Profile data (name, username, photos)</li>
                <li>Device and technical information</li>
                <li>Transaction and usage data</li>
                <li>Geolocation (with permission)</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                Collection Methods
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  Direct interactions when you create accounts or use services
                </li>
                <li>Automated technologies (cookies, web beacons)</li>
                <li>Third parties and public sources</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Data Usage
              </h2>
              <p className="text-gray-600 mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Verify identity and create accounts</li>
                <li>Provide and improve services</li>
                <li>Personalize experiences</li>
                <li>Process transactions</li>
                <li>Send promotional communications</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-600">
                We use cookies to remember preferences, enable security
                features, store settings, serve advertisements, and track
                interactions. You may disable cookies but some site
                functionality may be affected.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Security
              </h2>
              <p className="text-gray-600">
                We implement encryption, password protection, and other measures
                to protect your data. You are responsible for keeping your
                password confidential.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Your Rights
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Update/correct inaccurate information</li>
                <li>
                  Opt-out of marketing communications (7-day processing time)
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Data Sharing
              </h2>
              <p className="text-gray-600 mb-4">We may share your data with:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Authorized service providers</li>
                <li>Business partners</li>
                <li>Third-party advertisers</li>
                <li>Analytics services</li>
                <li>During business transitions (mergers/acquisitions)</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Account Deletion
              </h2>
              <p className="text-gray-600">
                Email support@maido.com to delete your account (processing takes
                up to 30 days).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-600">
                We retain data as needed for stated purposes and for a
                reasonable period after account termination to comply with legal
                obligations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Dispute Resolution
              </h2>
              <p className="text-gray-600">
                Bring concerns to the Grievance Officer in writing. Disputes
                resolved through alternative dispute resolution mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-600">
                For questions: visit "Contact Us" page or email
                support@maido.com (Grievance Officer)
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
