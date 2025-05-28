"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const UnlockPotentialSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Unlock potential, foster growth
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
            Embark on a transformative journey with us as we guide you to unlock your inherent potential, paving the way for empowered success.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300">
              <Play size={16} />
              <span>Watch Demo</span>
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image
              src="/image1.jpg" // Replace with your image path
              alt="Team working together"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotentialSection;