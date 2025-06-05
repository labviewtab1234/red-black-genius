
import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get in <span className="text-danger">Touch</span></h2>
          <p className="lead text-light">24/7 support ready to help you start streaming</p>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <div className="card bg-black border-danger h-100">
              <div className="card-body text-center p-4">
                <MessageCircle className="text-success mb-3" size={48} />
                <h4 className="text-white mb-3">WhatsApp Support</h4>
                <p className="text-light mb-4">Get instant support and start your free trial</p>
                <a href="https://wa.me/+33644657615" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg fw-bold">
                  Chat on WhatsApp
                </a>
                <p className="text-light mt-2 small">+33 64 46 57 615</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-black border-danger h-100">
              <div className="card-body text-center p-4">
                <Send className="text-info mb-3" size={48} />
                <h4 className="text-white mb-3">Telegram Support</h4>
                <p className="text-light mb-4">Connect with us for quick assistance</p>
                <a href="https://t.me/genuistv" target="_blank" rel="noopener noreferrer" className="btn btn-info btn-lg fw-bold">
                  Message on Telegram
                </a>
                <p className="text-light mt-2 small">@genuistv</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
