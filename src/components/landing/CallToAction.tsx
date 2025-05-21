import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';


const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isRegistered] = useState(false);
  
  // interface HandleSubmitEvent extends React.MouseEvent<HTMLButtonElement> {}

  // const handleSubmit = (e: HandleSubmitEvent): void => {
  //   e.preventDefault();
  //   // This would normally connect to your backend registration logic
  //   setTimeout(() => {
  //     setIsRegistered(true);
  //   }, 1000);
  // };

  return (
    <div className="w-full bg-gradient-to-r from-gray-600  to-gray-900 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left content area */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Join thousands of students mastering new skills and accelerating their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {['24/7 Support', 'Expert Instructors', 'Industry-Recognized Certificates'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-200" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Registration section */}
          {!isRegistered ? (
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button 
              
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="bg-blue-800 bg-opacity-30 p-4 rounded-lg max-w-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <p className="text-lg">Registration successful! Check your email to continue.</p>
            </div>
          )}
        </div>
        
        {/* Right decorative element */}
        <div className="hidden md:block w-1/3 relative">
          <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg transform rotate-6">
           
           <Image
            src="/image1.jpg"
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
            width={500}
            height={500}
          />

          </div>
          <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3">
             <Image
            src="/image1.jpg"
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
            width={500}
            height={500}
          />
          </div>
          <div className="relative bg-white bg-opacity-25 p-6 rounded-lg">
            <Image
            src="/image1.jpg"
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
            width={500}
            height={500}
          />

       
            <div className="w-full h-4 bg-white bg-opacity-30 rounded-full mb-3">
              
            </div>
            <div className="w-2/3 h-4 bg-white bg-opacity-30 rounded-full mb-6"></div>
            <div className="flex justify-end">
              <div className="w-24 h-8 bg-white bg-opacity-40 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;