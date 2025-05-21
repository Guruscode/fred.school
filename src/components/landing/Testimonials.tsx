import React from 'react';

const ReasonsToChooseUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">3 Reasons To Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="flex mb-4">
              <div className="bg-teal-700 p-4 rounded-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"></path>
                </svg>
              </div>
              <div className="border-t-2 border-gray-300 w-full mt-6 ml-2"></div>
            </div>
            <h3 className="text-base font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-auto">
              <button className="text-sm font-medium flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="flex mb-4">
              <div className="bg-teal-700 p-4 rounded-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div className="border-t-2 border-gray-300 w-full mt-6 ml-2"></div>
            </div>
            <h3 className="text-base font-bold mb-2">Top Guide</h3>
            <p className="text-gray-500 text-sm mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-auto">
              <button className="text-sm font-medium flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="flex mb-4">
              <div className="bg-teal-700 p-4 rounded-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <div className="border-t-2 border-gray-300 w-full mt-6 ml-2"></div>
            </div>
            <h3 className="text-base font-bold mb-2">Best Course</h3>
            <p className="text-gray-500 text-sm mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-auto">
              <button className="text-sm font-medium flex items-center">
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsToChooseUs;