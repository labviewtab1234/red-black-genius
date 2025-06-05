
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
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your <span className="text-red-600">Plan</span></h2>
          <p className="text-xl text-gray-300">Flexible pricing for every household size</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-gray-900 p-2 rounded-lg">
            {Object.keys(pricingData).map((planKey) => (
              <button
                key={planKey}
                onClick={() => setSelectedPlan(planKey)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  selectedPlan === planKey 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {pricingData[planKey as keyof typeof pricingData].name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Object.entries(pricingData[selectedPlan as keyof typeof pricingData].prices).map(([planKey, details]) => (
            <div key={planKey} className="relative">
              {planKey === 'legend' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Best Value
                  </span>
                </div>
              )}
              <div className={`relative h-full rounded-xl p-8 text-center transition-all duration-300 ${
                planKey === 'legend' 
                  ? 'bg-gradient-to-b from-green-900/20 to-black border-2 border-green-500 shadow-2xl shadow-green-500/20 transform scale-105' 
                  : 'bg-gradient-to-b from-gray-900 to-black border border-gray-700 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/20'
              }`}>
                <h4 className="text-2xl font-bold text-white mb-2">{details.name}</h4>
                <p className="text-gray-400 mb-6">{details.duration}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-red-600">{details.price}</span>
                  <div className="text-gray-400 mt-1">{details.period}</div>
                  {details.savings && (
                    <div className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                      planKey === 'legend' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {details.savings}
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{pricingData[selectedPlan as keyof typeof pricingData].name}</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">30,000+ Live TV Channels</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">120,000+ Movies & Series</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">4K Ultra HD Quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Anti-Freeze Technology</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">24/7 Premium Support</span>
                  </li>
                </ul>
                <a 
                  href="https://wa.me/+33644657615" 
                  className={`block w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    planKey === 'legend'
                      ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  Subscribe Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
