
import React, { useState } from 'react';
import { Check, Play, Smartphone, Tv, Monitor, Wifi, Shield, Clock, Star, ChevronDown, ChevronUp, MessageCircle, Send } from 'lucide-react';

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pricingPlans = [
    {
      name: "1 Connection",
      price: "€12.99",
      period: "/month",
      features: [
        "1 Device Connection",
        "30,000+ Live TV Channels",
        "120,000+ Movies & Series",
        "4K Ultra HD Quality",
        "Anti-Freeze Technology",
        "24/7 Premium Support",
        "99.9% Uptime Guarantee",
        "Instant Activation"
      ],
      popular: false
    },
    {
      name: "2 Connections",
      price: "€19.99",
      period: "/month",
      features: [
        "2 Device Connections",
        "30,000+ Live TV Channels",
        "120,000+ Movies & Series",
        "4K Ultra HD Quality",
        "Anti-Freeze Technology",
        "24/7 Premium Support",
        "99.9% Uptime Guarantee",
        "Instant Activation"
      ],
      popular: true
    },
    {
      name: "3 Connections",
      price: "€24.99",
      period: "/month",
      features: [
        "3 Device Connections",
        "30,000+ Live TV Channels",
        "120,000+ Movies & Series",
        "4K Ultra HD Quality",
        "Anti-Freeze Technology",
        "24/7 Premium Support",
        "99.9% Uptime Guarantee",
        "Instant Activation"
      ],
      popular: false
    }
  ];

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

  const devices = [
    { icon: <Smartphone className="h-12 w-12" />, name: "Android/iOS" },
    { icon: <Tv className="h-12 w-12" />, name: "Smart TV" },
    { icon: <Monitor className="h-12 w-12" />, name: "PC/Mac" },
    { icon: <Wifi className="h-12 w-12" />, name: "Android Box" }
  ];

  const faqs = [
    {
      question: "What is IPTV and how does it work?",
      answer: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional broadcast methods. You need a stable internet connection and compatible device to stream our content."
    },
    {
      question: "What devices are compatible with GeniusTV?",
      answer: "GeniusTV works on Smart TVs, Android/iOS devices, computers, tablets, Android boxes, MAG boxes, and most streaming devices with internet connectivity."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 24-hour free trial so you can test our service quality and channel selection before committing to a subscription."
    },
    {
      question: "What internet speed do I need?",
      answer: "We recommend minimum 10 Mbps for HD streaming and 25 Mbps for 4K content. Higher speeds ensure better streaming quality and multiple device usage."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No contracts required! You can cancel your subscription anytime. We believe in providing excellent service that keeps customers satisfied voluntarily."
    },
    {
      question: "How quickly will my service be activated?",
      answer: "Your GeniusTV service is activated instantly upon payment confirmation. You'll receive login credentials within minutes to start streaming immediately."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top border-bottom border-danger">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#" style={{color: '#e50914'}}>
            <span className="text-white">Genius</span><span className="text-danger">TV</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section min-vh-100 d-flex align-items-center position-relative">
        <div className="hero-overlay position-absolute w-100 h-100" style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(229,9,20,0.3))',
          zIndex: 1
        }}></div>
        <div className="container position-relative" style={{zIndex: 2, paddingTop: '100px'}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 text-gradient">
                Premium IPTV Experience with <span className="text-danger">GeniusTV</span>
              </h1>
              <p className="lead mb-4 text-light">
                Stream 30,000+ live channels and 120,000+ movies in stunning 4K quality. 
                Experience the future of entertainment with anti-freeze technology and 99.9% uptime guarantee.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                <a href="#pricing" className="btn btn-danger btn-lg px-4 py-3 fw-bold">
                  Start Streaming Now
                </a>
                <a href="https://wa.me/39644657615" className="btn btn-outline-light btn-lg px-4 py-3">
                  Free Trial
                </a>
              </div>
              <div className="d-flex align-items-center gap-4 text-light">
                <div className="d-flex align-items-center gap-2">
                  <Star className="text-warning" size={20} />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Shield className="text-success" size={20} />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-container position-relative">
                <div className="streaming-preview bg-dark rounded-4 p-4 shadow-lg border border-danger">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-2">
                      <div className="bg-danger rounded-circle" style={{width: '12px', height: '12px'}}></div>
                      <div className="bg-warning rounded-circle" style={{width: '12px', height: '12px'}}></div>
                      <div className="bg-success rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    </div>
                    <span className="text-danger fw-bold">LIVE</span>
                  </div>
                  <div className="ratio ratio-16x9 bg-secondary rounded-3 mb-3 position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <Play className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-sm text-light">
                    <span>Premium Sports HD</span>
                    <span>4K Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Why Choose <span className="text-danger">GeniusTV</span>?</h2>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Choose Your <span className="text-danger">Plan</span></h2>
            <p className="lead text-light">Flexible pricing for every household size</p>
          </div>
          <div className="row g-4 justify-content-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`card h-100 pricing-card ${plan.popular ? 'border-danger popular-plan' : 'border-secondary'} bg-dark`}>
                  {plan.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge bg-danger px-3 py-2">Most Popular</span>
                    </div>
                  )}
                  <div className="card-body p-4 text-center">
                    <h3 className="card-title text-white mb-3">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="display-4 fw-bold text-danger">{plan.price}</span>
                      <span className="text-light">{plan.period}</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="mb-2 d-flex align-items-center">
                          <Check className="text-success me-2 flex-shrink-0" size={16} />
                          <span className="text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="https://wa.me/39644657615" className={`btn w-100 btn-lg fw-bold ${plan.popular ? 'btn-danger' : 'btn-outline-danger'}`}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Compatible <span className="text-danger">Devices</span></h2>
            <p className="lead text-light">Stream on any device, anywhere, anytime</p>
          </div>
          <div className="row g-4 text-center">
            {devices.map((device, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="device-card p-4 rounded-3 bg-black border border-secondary">
                  <div className="text-danger mb-3">{device.icon}</div>
                  <h5 className="text-white">{device.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked <span className="text-danger">Questions</span></h2>
            <p className="lead text-light">Get answers to common questions about our service</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Get in <span className="text-danger">Touch</span></h2>
            <p className="lead text-light">24/7 support ready to help you</p>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-md-6">
              <div className="card bg-black border-danger h-100">
                <div className="card-body text-center p-4">
                  <MessageCircle className="text-success mb-3" size={48} />
                  <h4 className="text-white mb-3">WhatsApp Support</h4>
                  <p className="text-light mb-4">Get instant support via WhatsApp</p>
                  <a href="https://wa.me/39644657615" className="btn btn-success btn-lg fw-bold">
                    Chat on WhatsApp
                  </a>
                  <p className="text-light mt-2 small">+39 644 657 615</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-black border-danger h-100">
                <div className="card-body text-center p-4">
                  <Send className="text-info mb-3" size={48} />
                  <h4 className="text-white mb-3">Telegram Support</h4>
                  <p className="text-light mb-4">Connect with us on Telegram</p>
                  <a href="https://t.me/genuistv" className="btn btn-info btn-lg fw-bold">
                    Message on Telegram
                  </a>
                  <p className="text-light mt-2 small">@genuistv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-top border-danger py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3 mb-md-0">
                <span className="fw-bold fs-4">
                  <span className="text-white">Genius</span><span className="text-danger">TV</span>
                </span>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-light mb-0">&copy; 2024 GeniusTV. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
