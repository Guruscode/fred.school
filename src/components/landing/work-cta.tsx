"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

const UnlockPotentialSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .btn-hover {
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .image-hover {
          transition: transform 0.5s ease;
        }
        .image-hover:hover {
          transform: scale(1.02);
        }
      `}</style>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight animate-fadeIn">
            Unlock Your Potential
            <div className="h-1 w-12 bg-yellow-500 mt-2"></div>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Embark on a transformative journey with our cutting-edge courses, guided by industry experts, to unlock your inherent potential and achieve empowered success.
          </p>
          <div className="flex gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Link href="/demo">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-md text-black font-semibold hover:bg-gray-100 btn-hover">
                <Play size={16} className="text-gray-600" />
                <span>Watch Demo</span>
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-6 py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-600 btn-hover">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <div className="relative w-full h-64 md:h-80 lg:h-96 image-hover">
            <Image
              src="/image1.jpg" // Replace with your image path
              alt="Team working together"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockPotentialSection;