"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-8 md:py-4 bg-white shadow-sm">
      <div className="flex items-center justify-between w-full md:w-auto md:space-x-8">
        <div className="text-2xl md:text-3xl font-bold text-blue-900">ED</div>
        {/* Hamburger menu for mobile (not functional, just for layout) */}
        <div className="md:hidden">
          <button className="text-blue-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className="hidden md:flex md:space-x-8 mt-4 md:mt-0">
        <Link href="/" className="text-blue-900 text-base md:text-lg font-medium hover:text-blue-700">Home</Link>
        <Link href="/courses" className="text-blue-900 text-base md:text-lg font-medium hover:text-blue-700">Courses</Link>
        <Link href="/mentors" className="text-blue-900 text-base md:text-lg font-medium hover:text-blue-700">Mentors</Link>
        <Link href="/community" className="text-blue-900 text-base md:text-lg font-medium hover:text-blue-700">Community</Link>
      </nav>
      <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 mt-4 md:mt-0 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-full md:w-40 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-5 py-2 text-white bg-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200 w-full md:w-auto">
          Login
        </button>
      </div>
    </header>
  );
}