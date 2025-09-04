import React from 'react';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HowItWorks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;