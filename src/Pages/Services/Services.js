import React from 'react';
import ServiceHeroSection from '../../Components/ServiceHeroSection/ServiceHeroSection';
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection';
import FaqsComponent from '../../Components/FaqsComponent/FaqsComponent';
import Footer from '../../Components/Footer/Footer';
import './Services.css';
import Header from '../../Components/Header/Header';

function Services() {
  return (
    <div className="Services">
      <Header />
      <ServiceHeroSection />
      <FeaturesSection />
      <FaqsComponent />
      <Footer />
    </div>
  );
}

export default Services;