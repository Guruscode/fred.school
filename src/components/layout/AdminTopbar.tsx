import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Search, User, LogOut, Settings, ChevronDown } from "lucide-react";

const AdminTopbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications] = useState(3);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const userMenuItems = [
    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "Settings", href: "/admin/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 lg:ml-64 bg-white shadow-sm p-4 z-30">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Title/Search */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900 hidden md:block">Admin Dashboard</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for students, tutors..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40 md:w-64 transition-all duration-200 text-sm"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button
            className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
            aria-label="Notifications"
          >
            <Bell size={20} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="User menu"
            >
              <Image
                src="https://i.pravatar.cc/40?u=admin"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-gray-900 font-medium hidden md:block text-sm">
                Admin User
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
                {userMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;