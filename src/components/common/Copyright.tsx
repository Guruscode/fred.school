import React from 'react';

const Footer = () => {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-12 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Your Company</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@yourcompany.com" className="hover:text-teal-400 transition-colors">info@yourcompany.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-teal-400 transition-colors">+1 (234) 567-890</a></li>
              <li>Address: 123 Business Ave, Suite 100, City, Country</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.56c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.74-.95.56-2 .97-3.13 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.76.13 1.12-4.1-.21-7.73-2.17-10.16-5.16-.42.73-.67 1.58-.67 2.48 0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.61 3.44-1.69 1.33-3.81 2.12-6.12 2.12-.4 0-.79-.02-1.18-.07 2.19 1.4 4.78 2.22 7.56 2.22 9.07 0 14.02-7.51 14.02-14.02 0-.21-.01-.43-.02-.64.96-.69 1.8-1.56 2.46-2.55z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-5.46 15.66c-.09-.16-.14-.34-.14-.54v-7.24c0-.2.05-.38.14-.54l5.99-10.38c.18-.31.52-.48.87-.48h.6c.35 0 .69.17.87.48l5.99 10.38c.09.16.14.34.14.54v7.24c0 .2-.05.38-.14.54l-5.99 10.38c-.18.31-.52.48-.87.48h-.6c-.35 0-.69-.17-.87-.48l-5.99-10.38z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.34-1.59.57-2.46.67 1.88-.22 3.32-1.22 4-2.5-.88.52-1.86.9-2.9 1.1-1.66-1.77-4.52-2-6.8-.5-1.5 1-2.2 2.8-1.7 4.6-3.8-.2-7.2-2-9.5-4.8-.5.8-.8 1.7-.8 2.7 0 1.9 1 3.5 2.5 4.4-.9 0-1.8-.3-2.6-.7v.1c0 2.6 1.9 4.8 4.4 5.3-.46.13-.94.2-1.43.2-.35 0-.7-.06-.9-.1.7 2.2 2.7 3.8 5 3.8-1.9 1.5-4.3 2.4-6.9 2.4-.45 0-.9-.03-1.34-.1 2.5 1.6 5.5 2.5 8.7 2.5 10.5 0 16.2-8.7 16.2-16.2 0-.25-.01-.5-.03-.7 1.1-.8 2-1.8 2.8-2.9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
        aria-label="Go to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </>
  );
};

export default Footer;