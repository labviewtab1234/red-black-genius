
import React from 'react';
import { Zap, Shield, Award, Globe } from 'lucide-react';

const WhyChoose = () => {
  const whyChooseFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Anti-Freeze Technology",
      description: "Advanced streaming with zero buffering"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Stable Servers",
      description: "Enterprise-grade infrastructure"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "99.9% Uptime",
      description: "Guaranteed reliable service"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Worldwide Access",
      description: "Stream from anywhere in the world"
    }
  ];

  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why Choose <span className="text-danger">GeniusTV</span>?</h2>
          <p className="lead text-light">Industry-leading technology and service quality</p>
        </div>
        <div className="row g-4">
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="text-white">{feature.icon}</span>
                </div>
                <h5 className="text-white mb-2">{feature.title}</h5>
                <p className="text-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
