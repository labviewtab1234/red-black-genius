
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is IPTV and how does GeniusTV work?",
      answer: "IPTV (Internet Protocol Television) delivers TV content over the internet. GeniusTV uses advanced streaming technology to provide 30,000+ channels and 120,000+ movies/shows with anti-freeze technology for smooth viewing on any device."
    },
    {
      question: "What devices are compatible with GeniusTV?",
      answer: "GeniusTV works on all major devices: Smart TVs (Samsung, LG, Sony), Android/iOS phones/tablets, computers (Windows/Mac), Firestick, Android boxes, MAG boxes, and Enigma2 receivers."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 24-hour free trial so you can test our service quality, channel selection, and streaming performance before subscribing."
    },
    {
      question: "What internet speed do I need for GeniusTV?",
      answer: "Minimum 10 Mbps for HD streaming, 25 Mbps for 4K content. Higher speeds ensure better quality and allow multiple simultaneous connections."
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "Depends on your plan: 1 Connection (1 device), 2 Connections (2 devices), 3 Connections (3 devices). Each connection allows one simultaneous stream."
    }
  ];

  return (
    <section id="faq" className="py-5 bg-black">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Frequently Asked <span className="text-danger">Questions</span></h2>
          <p className="lead text-light">Get answers to common questions about our IPTV service</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item bg-dark border-secondary mb-3">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button bg-dark text-white border-0 fw-bold"
                      type="button"
                      onClick={() => toggleFaq(index)}
                      style={{boxShadow: 'none'}}
                    >
                      {faq.question}
                      {activeFaq === index ? <ChevronUp className="ms-auto" size={20} /> : <ChevronDown className="ms-auto" size={20} />}
                    </button>
                  </h3>
                  <div className={`accordion-collapse ${activeFaq === index ? 'show' : 'collapse'}`}>
                    <div className="accordion-body bg-dark text-light border-top border-secondary">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
