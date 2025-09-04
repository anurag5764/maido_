import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-900 mb-12">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="tel:+911234567890"
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 
                          group-hover:bg-yellow-200 transition-colors">
              <Phone className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-yellow-900 mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+91 123 456 7890</p>
          </a>

          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 
                          group-hover:bg-yellow-200 transition-colors">
              <MessageCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-yellow-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-center">Chat with us</p>
          </a>

          <a
            href="mailto:contact@gharseva.com"
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 
                          group-hover:bg-yellow-200 transition-colors">
              <Mail className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-yellow-900 mb-2">Email</h3>
            <p className="text-gray-600 text-center">contact@gharseva.com</p>
          </a>

          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 
                          group-hover:bg-yellow-200 transition-colors">
              <MapPin className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-yellow-900 mb-2">Location</h3>
            <p className="text-gray-600 text-center">Available in major Indian cities</p>
          </div>
        </div>

        {/* Map or Additional Contact Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                Our support team is available from Monday to Saturday, 9:00 AM to 6:00 PM
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-yellow-600 mr-3" />
                  <span>123, GharSeva Tower, Mumbai Central, Mumbai - 400008</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 text-yellow-600 mr-3" />
                  <span>Toll Free: 1800-123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 text-yellow-600 mr-3" />
                  <span>support@gharseva.com</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;