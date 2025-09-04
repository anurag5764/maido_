import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can I hire a housemaid/babysitter/cook from Maido?",
    answer: "Hiring from Maido is simple: Just click the 'Book Now' button, fill out our form with your requirements, and our team will contact you within 24 hours with verified profiles matching your needs. We handle all verification and background checks."
  },
  {
    question: "What if I'm not satisfied with the services?",
    answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with the helper's services, we provide a free replacement within 48 hours. Our quality assurance team will work with you to understand your concerns and find a better match."
  },
  {
    question: "How much will a cook/maid/babysitter cost in major cities?",
    answer: "Our service costs vary based on the city, type of service, and duration. For example, full-time maids typically range from ₹12,000-20,000 per month, while part-time services start from ₹5,000. Contact us for a detailed price quote based on your specific requirements."
  },
  {
    question: "Why do your services seem more expensive than other helpers in the market?",
    answer: "Our pricing reflects the comprehensive service we provide: verified and background-checked helpers, insurance coverage, replacement guarantee, and ongoing support. We ensure fair wages, proper training, and reliable service quality, making it a worthwhile investment for your peace of mind."
  },
  {
    question: "Is a maid/cook/babysitter from Maido reliable?",
    answer: "Yes, absolutely! Every helper undergoes thorough verification including police verification, background checks, and skill assessment. We maintain detailed records, conduct regular performance reviews, and provide training to ensure consistent service quality."
  },
  {
    question: "Is it safe to hire a maid/cook/babysitter during the pandemic?",
    answer: "We follow strict COVID-19 safety protocols. All our helpers are vaccinated, regularly tested, and trained in safety measures. We provide health monitoring, sanitization guidelines, and immediate support in case of any health concerns."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-yellow-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-yellow-900" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-yellow-100 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;