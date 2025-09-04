import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;