
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('2-connections');

  const pricingData = {
    '1-connection': {
      name: "1 Connection",
      prices: {
        'starter': { name: 'Starter', price: '€12.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€32.99', period: '/3 months', savings: 'Save 15%', duration: '3 Months' },
        'max': { name: 'Max', price: '€59.99', period: '/6 months', savings: 'Save 23%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€99.99', period: '/12 months', savings: 'Save 36% – Best Value', duration: '12 Months' }
      }
    },
    '2-connections': {
      name: "2 Connections",
      prices: {
        'starter': { name: 'Starter', price: '€19.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€49.99', period: '/3 months', savings: 'Save 17%', duration: '3 Months' },
        'max': { name: 'Max', price: '€89.99', period: '/6 months', savings: 'Save 25%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€149.99', period: '/12 months', savings: 'Save 38% – Best Value', duration: '12 Months' }
      }
    },
    '3-connections': {
      name: "3 Connections",
      prices: {
        'starter': { name: 'Starter', price: '€24.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€64.99', period: '/3 months', savings: 'Save 13%', duration: '3 Months' },
        'max': { name: 'Max', price: '€119.99', period: '/6 months', savings: 'Save 20%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€199.99', period: '/12 months', savings: 'Save 33% – Best Value', duration: '12 Months' }
      }
    }
  };

  return (
    <section id="pricing" className="py-5 bg-black">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Choose Your <span className="text-danger">Plan</span></h2>
          <p className="lead text-light">Flexible pricing for every household size</p>
        </div>
        
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <div className="d-flex justify-content-center gap-2 mb-4">
              {Object.keys(pricingData).map((planKey) => (
                <button
                  key={planKey}
                  onClick={() => setSelectedPlan(planKey)}
                  className={`btn px-4 py-2 ${selectedPlan === planKey ? 'btn-danger' : 'btn-outline-danger'}`}
                >
                  {pricingData[planKey as keyof typeof pricingData].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {Object.entries(pricingData[selectedPlan as keyof typeof pricingData].prices).map(([planKey, details], index) => (
            <div key={planKey} className="col-lg-3 col-md-6">
              <div className={`card h-100 pricing-card ${planKey === 'legend' ? 'border-success popular-plan position-relative' : 'border-secondary'} bg-dark`} style={{marginTop: planKey === 'legend' ? '30px' : '0'}}>
                {planKey === 'legend' && (
                  <div className="position-absolute w-100 d-flex justify-content-center" style={{top: '-15px', zIndex: 10}}>
                    <span className="badge bg-success px-4 py-2 fs-6 fw-bold rounded-pill shadow-lg">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="card-body p-4 text-center">
                  <h4 className="card-title text-white mb-1">{details.name}</h4>
                  <p className="text-light small mb-3">{details.duration}</p>
                  <div className="mb-3">
                    <span className="display-6 fw-bold text-danger">{details.price}</span>
                    <div className="text-light">{details.period}</div>
                    {details.savings && (
                      <div className={`badge mt-2 ${planKey === 'legend' ? 'bg-success fs-6' : 'bg-warning text-dark'}`}>
                        {details.savings}
                      </div>
                    )}
                  </div>
                  <ul className="list-unstyled mb-4 text-start">
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">{pricingData[selectedPlan as keyof typeof pricingData].name}</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">30,000+ Live TV Channels</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">120,000+ Movies & Series</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">4K Ultra HD Quality</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">Anti-Freeze Technology</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check className="text-success me-2 flex-shrink-0" size={16} />
                      <span className="text-light">24/7 Premium Support</span>
                    </li>
                  </ul>
                  <a href="https://wa.me/39644657615" className={`btn w-100 btn-lg fw-bold ${planKey === 'legend' ? 'btn-success' : 'btn-outline-danger'}`}>
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
