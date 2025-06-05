
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ContentProviders from '../components/ContentProviders';
import Features from '../components/Features';
import WhyChoose from '../components/WhyChoose';
import Pricing from '../components/Pricing';
import Devices from '../components/Devices';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ContentProviders />
      <Features />
      <WhyChoose />
      <Pricing />
      <Devices />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
