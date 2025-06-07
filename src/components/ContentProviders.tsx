
import React from 'react';
import { Plus } from 'lucide-react';

const ContentProviders = () => {
  const contentProviders = [
    { name: "UEFA Champions League", category: "Sports" },
    { name: "La Liga", category: "Sports" },
    { name: "Premier League", category: "Sports" },
    { name: "Netflix", category: "Streaming" },
    { name: "HBO Max", category: "Streaming" },
    { name: "Amazon Prime", category: "Streaming" },
    { name: "Disney+", category: "Streaming" },
    { name: "ESPN", category: "Sports" },
    { name: "Sky Sports", category: "Sports" },
    { name: "BBC", category: "News" },
    { name: "CNN", category: "News" },
    { name: "Discovery", category: "Documentary" }
  ];

  return (
    <section id="content" className="py-5 bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Premium <span className="text-danger">Content</span></h2>
          <p className="lead text-light">Access the world's best entertainment and sports</p>
        </div>
        <div className="row g-3">
          {contentProviders.map((provider, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="card bg-black border-secondary h-100 p-3 text-center">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h6 className="text-white mb-1">{provider.name}</h6>
                  <small className="text-danger">{provider.category}</small>
                </div>
              </div>
            </div>
          ))}
          <div className="col-6 col-md-4 col-lg-3">
            <div className="card bg-black border-danger h-100 p-3 text-center more-card">
              <div className="card-body d-flex flex-column justify-content-center">
                <Plus className="text-danger mx-auto mb-2" size={32} />
                <h6 className="text-white mb-1">More</h6>
                <small className="text-danger">30,000+ Channels</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentProviders;
