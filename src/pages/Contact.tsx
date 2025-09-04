import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MessageSquare, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-yellow-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help and answer any questions you might have
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-yellow-900" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                Phone Number
              </h3>
              <a
                href="tel:+918401840142"
                className="text-gray-600 hover:text-yellow-700 transition-colors"
              >
                +91 8401-8401-42
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-yellow-900" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                E-mail ID
              </h3>
              <a
                href="mailto:support@maido.com"
                className="text-gray-600 hover:text-yellow-700 transition-colors"
              >
                support@maido.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-yellow-900" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/918401840142"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-700 transition-colors flex items-center gap-1"
              >
                +91 8401-8401-42
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-yellow-900" />
              </div>
              <h2 className="text-2xl font-bold text-yellow-900">Our Office</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-4">
                  123, Maido Tower
                  <br />
                  Mumbai Central
                  <br />
                  Mumbai - 400008
                  <br />
                  Maharashtra, India
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Mon-Fri:</span> 9:00 AM - 6:00
                    PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Saturday:</span> 9:00 AM -
                    4:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors"
                  >
                    LinkedIn <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors"
                  >
                    Instagram <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors"
                  >
                    Facebook <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors"
                  >
                    Twitter <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-yellow-900 text-white rounded-lg hover:bg-yellow-800 
                         transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
