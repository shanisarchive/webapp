import React from 'react';

const ArchitectChamber = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-sans overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/ch.png"
          alt="Chamber Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-sm tracking-widest text-blue-200 mb-4">
          DESIGNED, NOT DISCOVERED.
        </h2>

        <img
          src="/images/crystal.png"
          alt="Floating Crystal"
          className="w-24 h-24 mb-6 animate-pulse"
        />

        <h1 className="text-3xl md:text-5xl tracking-wide text-blue-200 mb-12">
          ENTER THE ARCHITECT’S CHAMBER
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-black/60 border border-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl text-white mb-2">Why an Entire Stack?</h3>
            <p className="text-gray-300 text-sm">
              We don't assemble, we forge. Aura is the silicon, the language, and the soul.
            </p>
          </div>
          <div className="bg-black/60 border border-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl text-white mb-2">Privacy by Architecture</h3>
            <p className="text-gray-300 text-sm">
              Our systems aren't private by policy. They’re private by nature.
            </p>
          </div>
          <div className="bg-black/60 border border-white/10 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl text-white mb-2">India to Infinity</h3>
            <p className="text-gray-300 text-sm">
              Built on Vedic logic, forged in code, designed for the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectChamber;
