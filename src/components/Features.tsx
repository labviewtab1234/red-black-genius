
import React from 'react';
import { Tv, Play, Shield, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Tv className="h-8 w-8" />,
      title: "30,000+ Live Channels",
      description: "Access to premium sports, movies, news, and entertainment channels worldwide"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "120,000+ VOD Content",
      description: "Massive library of movies, TV series, documentaries in multiple languages"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anti-Freeze Technology",
      description: "Advanced streaming technology ensures smooth playback without buffering"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Reliable service with guaranteed uptime and instant technical support"
    }
  ];

  return (
    <section id="features" className="py-5 bg-black">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Premium <span className="text-danger">Features</span></h2>
          <p className="lead text-light">Experience the ultimate IPTV service with cutting-edge features</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card bg-black border-danger h-100 feature-card">
                <div className="card-body text-center p-4">
                  <div className="text-danger mb-3">{feature.icon}</div>
                  <h5 className="card-title text-white mb-3">{feature.title}</h5>
                  <p className="card-text text-light">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
