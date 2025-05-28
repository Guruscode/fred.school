"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide scroll-to-top button based on scroll position
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-white text-gray-900 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <div className="flex items-center mb-4">
            <svg
              className="w-8 h-8 text-gray-900 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L4.5 9h4.5v12h6V9h4.5L12 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900">Your Company</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Your UI - Slot UI kit and design system. Made in Figma, for Figma.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+1(000)9998877" className="hover:text-teal-500 transition-colors">
                +1 (000) 999 8877
              </a>
            </li>
            <li>
              <a href="mailto:office@yourcompany.io" className="hover:text-teal-500 transition-colors">
                office@yourcompany.io
              </a>
            </li>
            <li className="text-gray-600">Yellow Vale Ave 46, 9000 San Francisco, USA</li>
          </ul>
        </div>

        {/* Getting Started */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/introduction" className="hover:text-teal-500 transition-colors">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/documentation" className="hover:text-teal-500 transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/usage" className="hover:text-teal-500 transition-colors">
                Usage
              </Link>
            </li>
            <li>
              <Link href="/global" className="hover:text-teal-500 transition-colors">
                Global
              </Link>
            </li>
            <li>
              <Link href="/api" className="hover:text-teal-500 transition-colors">
                API
              </Link>
            </li>
            <li>
              <Link href="/elements" className="hover:text-teal-500 transition-colors">
                Elements
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-teal-500 transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-teal-500 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-teal-500 transition-colors">
                Community
              </Link>
            </li>
            <li>
              <Link href="/customers" className="hover:text-teal-500 transition-colors">
                Customers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-500 transition-colors">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Partner</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/individuals" className="hover:text-teal-500 transition-colors">
                For individuals
              </Link>
            </li>
            <li>
              <Link href="/freelancers" className="hover:text-teal-500 transition-colors">
                For freelancers
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-teal-500 transition-colors">
                For teams
              </Link>
            </li>
            <li>
              <Link href="/enterprises" className="hover:text-teal-500 transition-colors">
                For enterprises
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/support" className="hover:text-teal-500 transition-colors">
                Support
              </Link>
            </li>
            <li>
              <Link href="/security" className="hover:text-teal-500 transition-colors">
                Security
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-teal-500 transition-colors">
                Help center
              </Link>
            </li>
            <li>
              <Link href="/preferences" className="hover:text-teal-500 transition-colors">
                Preferences
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-teal-500 transition-colors">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal-500 transition-colors">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-600 mb-4">©2025 Your Company - All rights reserved</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-teal-500 transition-colors">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="hover:text-teal-500 transition-colors">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.4-.45 0-.9-.03-1.34-.1 2.19 1.4 4.79 2.2 7.58 2.2 9.14 0 14.31-7.7 14-14.6.96-.7 1.8-1.56 2.46-2.55z" />
            </svg>
          </a>
          <a href="#" className="hover:text-teal-500 transition-colors">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.675 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
          aria-label="Go to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;