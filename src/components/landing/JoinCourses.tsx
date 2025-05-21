"use client";

import React from "react";

// Updated SVG icons to match the design exactly
const BinocularsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="20" fill="#4CAF50" />
    <circle cx="22" cy="30" r="8" fill="white" />
    <circle cx="38" cy="30" r="8" fill="white" />
    <circle cx="22" cy="30" r="3" fill="#4CAF50" />
    <circle cx="38" cy="30" r="3" fill="#4CAF50" />
  </svg>
);

const ClickIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="12" width="32" height="20" rx="10" fill="white" />
    <path d="M32 32L32 44" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <path d="M32 44L26 38" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 44L38 38" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="18" r="4" fill="#5DA9DD" />
  </svg>
);

const CertificateIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="30" r="14" fill="white" />
    <circle cx="32" cy="30" r="8" stroke="#E8927C" strokeWidth="2" fill="none" />
    <path d="M26 44L22 56" stroke="white" strokeWidth="3" />
    <path d="M38 44L42 56" stroke="white" strokeWidth="3" />
    <path d="M22 56L26 52" stroke="white" strokeWidth="2" />
    <path d="M42 56L38 52" stroke="white" strokeWidth="2" />
  </svg>
);

const JoinCourses: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading */}
      <div className="mb-16 md:mb-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          The way you join
        </h2>
        <div className="flex items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our <span className="text-orange-500">courses</span></h3>
          <div className="h-1 w-12 bg-emerald-500 ml-4"></div>
        </div>
      </div>

      {/* Three-step process */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-emerald-500 flex items-center justify-center mb-6">
            <BinocularsIcon />
          </div>
          <h4 className="text-2xl font-semibold mb-3 text-gray-800">Find Your Courses</h4>
          <p className="text-gray-600 max-w-xs text-center">
            we have helped our worldwide students to get into the most popular courses
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-blue-400 flex items-center justify-center mb-6">
            <ClickIcon />
          </div>
          <h4 className="text-2xl font-semibold mb-3 text-gray-800">Book Your Seat</h4>
          <p className="text-gray-600 max-w-xs text-center">
            get the frist prioroty to book your seat and learn what you desire
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-orange-500 flex items-center justify-center mb-6">
            <CertificateIcon />
          </div>
          <h4 className="text-2xl font-semibold mb-3 text-gray-800">Get Certificate</h4>
          <p className="text-gray-600 max-w-xs text-center">
            after completing your courses we provide you renowned certificate
          </p>
        </div>

        {/* Curved dotted line connecting (only visible on desktop) */}
        {/* <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-16 w-1/3">
          <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M 0,50 C 100,10 300,90 400,50" stroke="#E8927C" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>
        </div> */}
        
        {/* Second curved line (going right to left) */}
        {/* <div className="hidden md:block absolute top-14 left-2/3 right-0 h-16">
          <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
            <path d="M 0,50 C 50,90 150,10 200,50" stroke="#E8927C" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default JoinCourses;