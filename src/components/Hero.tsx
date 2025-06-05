
import React from 'react';
import { Play, Star, Shield, Users, Smartphone, Tv, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section min-vh-100 d-flex align-items-center position-relative">
      <div className="hero-overlay position-absolute w-100 h-100" style={{
        background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(229,9,20,0.3))',
        zIndex: 1
      }}></div>
      <div className="container position-relative" style={{zIndex: 2, paddingTop: '100px'}}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              Premium IPTV Experience with <span className="text-danger">GeniusTV</span>
            </h1>
            <p className="lead mb-4 text-light fs-5">
              Stream 30,000+ live channels and 120,000+ movies in stunning 4K quality. 
              Experience the future of entertainment with anti-freeze technology and 99.9% uptime guarantee.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 mb-4">
              <a href="#pricing" className="btn btn-danger btn-lg px-5 py-3 fw-bold">
                Subscribe Now
              </a>
              <a href="https://wa.me/+33644657615" className="btn btn-outline-light btn-lg px-5 py-3">
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
              <div className="d-flex align-items-center gap-2">
                <Users className="text-info" size={20} />
                <span>50,000+ Users</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-image-container position-relative">
              <div className="streaming-interface bg-dark rounded-4 p-4 shadow-lg border border-danger position-relative overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex gap-2">
                    <div className="bg-danger rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    <div className="bg-warning rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    <div className="bg-success rounded-circle" style={{width: '12px', height: '12px'}}></div>
                  </div>
                  <span className="badge bg-danger px-3 py-1 fw-bold">LIVE 4K</span>
                </div>
                
                <div className="ratio ratio-16x9 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3 mb-3 position-relative overflow-hidden">
                  <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{
                    background: 'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)',
                  }}>
                    <div className="text-center">
                      <div className="position-relative mb-3">
                        <Play className="text-white bg-danger rounded-circle p-3" size={64} style={{
                          filter: 'drop-shadow(0 0 20px rgba(229, 9, 20, 0.5))'
                        }} />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-danger rounded-circle animate-ping opacity-25"></div>
                      </div>
                      <div className="text-white small fw-bold">UEFA Champions League</div>
                      <div className="text-light small">Manchester United vs Barcelona</div>
                    </div>
                  </div>
                </div>
                
                <div className="row g-2 mb-3">
                  <div className="col-4">
                    <div className="bg-secondary rounded-2 p-2 text-center position-relative">
                      <Tv className="text-danger mb-1" size={20} />
                      <div className="text-white small fw-bold">ESPN</div>
                      <div className="badge bg-success position-absolute top-0 end-0" style={{fontSize: '8px'}}>HD</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-secondary rounded-2 p-2 text-center position-relative">
                      <Monitor className="text-warning mb-1" size={20} />
                      <div className="text-white small fw-bold">Netflix</div>
                      <div className="badge bg-danger position-absolute top-0 end-0" style={{fontSize: '8px'}}>4K</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-secondary rounded-2 p-2 text-center position-relative">
                      <Play className="text-info mb-1" size={20} />
                      <div className="text-white small fw-bold">HBO Max</div>
                      <div className="badge bg-success position-absolute top-0 end-0" style={{fontSize: '8px'}}>HD</div>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center text-sm">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-success rounded-circle" style={{width: '8px', height: '8px'}}></div>
                    <span className="text-success small">30,000+ Channels</span>
                  </div>
                  <div className="text-danger small fw-bold">120,000+ Movies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
