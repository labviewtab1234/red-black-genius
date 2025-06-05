
import React from 'react';
import { Smartphone, Tv, Monitor, Wifi, Play } from 'lucide-react';

const Devices = () => {
  const devices = [
    { icon: <Smartphone className="h-12 w-12" />, name: "Android/iOS" },
    { icon: <Tv className="h-12 w-12" />, name: "Smart TV" },
    { icon: <Monitor className="h-12 w-12" />, name: "PC/Mac" },
    { icon: <Wifi className="h-12 w-12" />, name: "Android Box" },
    { icon: <Play className="h-12 w-12" />, name: "Firestick" },
    { icon: <Monitor className="h-12 w-12" />, name: "MAG Box" },
    { icon: <Tv className="h-12 w-12" />, name: "Enigma2" },
    { icon: <Monitor className="h-12 w-12" />, name: "Windows" }
  ];

  return (
    <section id="devices" className="py-5 bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Compatible <span className="text-danger">Devices</span></h2>
          <p className="lead text-light">Stream on any device, anywhere, anytime</p>
        </div>
        <div className="row g-4 text-center">
          {devices.map((device, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="device-card p-4 rounded-3 bg-black border border-secondary">
                <div className="text-danger mb-3">{device.icon}</div>
                <h6 className="text-white">{device.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
