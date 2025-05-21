"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-6 lg:px-8 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.svg"
            alt="Logo"
            width={90}
            height={40}
            className="h-20 w-30 mr-2"
          />
          {/* <span className="text-xl font-bold text-gray-800">Safe Web</span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/" className="font-medium text-gray-600 hover:text-gray-800">
            Our Approach
          </Link>
          <Link href="/" className="font-medium text-gray-600 hover:text-gray-800">
            Insights
          </Link>
          <Link href="/" className="font-medium text-gray-600 hover:text-gray-800">
            Resources
          </Link>
          
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="font-medium text-gray-800 hover:text-gray-600">
            Sign up
          </Link>
          <Link
            href="/play"
            className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-gray-800 flex items-center"
          >
            Work with us 
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 z-50 shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="font-medium text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/parent-portal"
              className="font-medium text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
             Our Approach
            </Link>
            <Link
              href="/safe-tube"
              className="font-medium text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
              Insights
            </Link>
            <Link
              href="/games"
              className="font-medium text-gray-600 hover:text-gray-800"
              onClick={toggleMenu}
            >
             Resourses
            </Link>
          
            <hr className="border-gray-200" />
            <Link
              href="/login"
              className="font-medium text-gray-800 hover:text-gray-600"
              onClick={toggleMenu}
            >
              Sign up
            </Link>
            <Link
              href="/play"
              className="bg-black text-white font-medium px-4 py-2 rounded-full hover:bg-gray-800 flex items-center justify-center"
              onClick={toggleMenu}
            >
              Work with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;