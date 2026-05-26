'use client';

import React, { useState } from 'react';

export default function FranchiseSpotlight() {
const mainBranches = [
    { 
      location: "Pokhara-4, Siddhartha chok", 
      phone: "9804141253", 
      name: "Pokhara", 
      mapLink: "https://maps.app.goo.gl/vpFUURr2YRJSTxn47" 
    }
    // { 
    //   location: "Damauli, Durga mandir line", 
    //   phone: "9805831917", 
    //   name: "Damauli", 
    //   mapLink: "https://maps.app.goo.gl/Mds9XQhjwBbZH3Gt8" 
    // },
    // { 
    //   location: "Baglung, Jeep park", 
    //   phone: "9840684278", 
    //   name: "Baglung", 
    //   mapLink: "https://maps.app.goo.gl/CEFiG1M5x39mZXKp6" 
    // },
    // { 
    //   location: "Besisahar", 
    //   phone: "", 
    //   name: "Besisahar", 
    //   mapLink: "https://maps.app.goo.gl/QvuqaiFVyDnThFWZ6" 
    // },
  ];

  const branches = [
    { 
      location: "Pokhara-4, Siddhartha chok", 
      phone: "9804141253", 
      name: "Pokhara", 
      mapLink: "https://maps.app.goo.gl/vpFUURr2YRJSTxn47" 
    },
    { 
      location: "Damauli, Durga mandir line", 
      phone: "9805831917", 
      name: "Damauli", 
      mapLink: "https://maps.app.goo.gl/Mds9XQhjwBbZH3Gt8" 
    },
    { 
      location: "Baglung, Jeep park", 
      phone: "9840684278", 
      name: "Baglung", 
      mapLink: "https://maps.app.goo.gl/CEFiG1M5x39mZXKp6" 
    },
    { 
      location: "Besisahar", 
      phone: "", 
      name: "Besisahar", 
      mapLink: "https://maps.app.goo.gl/QvuqaiFVyDnThFWZ6" 
    },
    { 
      location: "Lamjung, Sera chok", 
      phone: "9860928718", 
      name: "Lamjung", 
      mapLink: "https://maps.app.goo.gl/Cs1rYtZpKjJwZsjN6" 
    },
    { 
      location: "Butwal, Yogikuti", 
      phone: "9823386705", 
      name: "Butwal", 
      mapLink: "" 
    },
    { 
      location: "Kathmandu, Basundhara", 
      phone: "9712011918", 
      name: "Kathmandu", 
      mapLink: "" 
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(mainBranches[0]);

  return (
    <section className="max-w-[1280px] mx-auto py-12 px-4 md:px-20">
      <div className="bg-primary rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        
        {/* Left Side: Store Information */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
          <h2 className="font-headline-xl text-headline-xl mb-6">Sampada Ankit Sports {selectedBranch.name}</h2>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4 text-white/90">
              <span className="material-symbols-outlined text-secondary-container">location_on</span>
              <span className="font-body-md text-body-md">{selectedBranch.location}</span>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <span className="material-symbols-outlined text-secondary-container">call</span>
              <span className="font-body-md text-body-md">Ph: {selectedBranch.phone}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-headline-sm text-headline-sm mb-4">Select Location:</h3>
            <div className="flex flex-wrap gap-3">
              {mainBranches.map((branch) => (
                <button
                  key={branch.name}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-6 py-2 rounded-lg font-body-md text-body-md transition-all ${
                    selectedBranch.name === branch.name
                      ? 'bg-secondary-container text-primary'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          <div className="font-body-lg text-body-lg text-white/80 space-y-3 mb-8">
            <p>• Delivery service available.</p>
            <p>• Wholesale & retails of all sports items.</p>
            <p>• Garment service available. Imported from China.</p>
            <p>• Print: sublimation, vinyl, dtf.</p>
            <p>• We make your own designs jersey, polo tshirt, jacket.</p>
            <p className="font-semibold text-white/90 mt-4">Other Services:</p>
            <p className="pl-4">• Token of love, frame, certificate, flex banner, logo design, jersey design, jersey fitting.</p>
          </div>

          <div className="mt-8 border-t border-white/20 pt-8">
            <h3 className="font-headline-sm text-headline-sm mb-4">Our Branches:</h3>
            <ul className="space-y-4 text-white/90">
              {branches.map((branch, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-body-md text-body-md font-semibold text-secondary-container whitespace-nowrap">Branch {index + 1}:</span>
                  <span className="font-body-md text-body-md">{branch.location}</span>
                  <span className="font-body-sm text-body-sm text-white/70 sm:ml-auto">Ph no. {branch.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Google Map Embed */}
        <div className="md:w-1/2 min-h-[500px] w-full relative bg-gray-200 flex items-center justify-center">
          <a
            href={selectedBranch.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 w-full h-full"
            title={`View ${selectedBranch.name} on Google Maps`}
          >
            <iframe 
              title={`Sampada Ankit Sports ${selectedBranch.name} Location`}
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%', pointerEvents: 'none' }} 
              loading="lazy" 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedBranch.location)}&output=embed`}
            >
            </iframe>
          </a>
          <button
            onClick={() => window.open(selectedBranch.mapLink, '_blank')}
            className="absolute bottom-6 right-6 bg-secondary-container hover:bg-secondary-container/90 text-primary px-6 py-2 rounded-lg font-body-md text-body-md shadow-lg transition-all z-10"
          >
            Open Full Map
          </button>
        </div>

      </div>
    </section>
  );
}