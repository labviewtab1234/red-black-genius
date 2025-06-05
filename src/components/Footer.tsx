
import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-top border-danger py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <span className="fw-bold fs-3">
                <span className="text-white">Genius</span><span className="text-danger">TV</span>
              </span>
            </div>
            <p className="text-light mb-4">
              Premium IPTV service with 30,000+ channels and 120,000+ movies. 
              Experience entertainment like never before.
            </p>
            <div className="d-flex gap-3">
              <a href="https://wa.me/39644657615" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                <MessageCircle size={20} />
              </a>
              <a href="https://t.me/genuistv" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                <Send size={20} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">Service</h5>
            <ul className="list-unstyled">
              <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#pricing" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#devices" className="text-light text-decoration-none">Devices</a></li>
              <li><a href="#content" className="text-light text-decoration-none">Content</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-white mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="https://wa.me/39644657615" className="text-light text-decoration-none">Free Trial</a></li>
              <li><a href="#" className="text-light text-decoration-none">Setup Guide</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Contact Info</h5>
            <p className="text-light mb-2">
              <strong>WhatsApp:</strong> +39 644 657 615
            </p>
            <p className="text-light mb-2">
              <strong>Telegram:</strong> @genuistv
            </p>
            <p className="text-light">
              <strong>Support:</strong> 24/7 Available
            </p>
          </div>
        </div>
        <hr className="border-danger my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">&copy; 2024 GeniusTV. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-light mb-0">Premium IPTV Service | 99.9% Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
