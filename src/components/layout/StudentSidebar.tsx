import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BarChart2,
  CreditCard,
  MessageSquare,
  LogOut,
  Menu,
} from "lucide-react";

const navItems = [
  { name: "Enrolled Courses", href: "/student/courses", icon: BookOpen, color: "text-teal-600" },
  { name: "Progress", href: "/student/progress", icon: BarChart2, color: "text-purple-600" },
  { name: "Payments", href: "/student/payments", icon: CreditCard, color: "text-orange-600" },
  { name: "Support", href: "/student/support", icon: MessageSquare, color: "text-indigo-600" },
  { name: "Logout", href: "/logout", icon: LogOut, color: "text-red-600" },
];

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].href);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white transform ${
          !isOpen && !isLargeScreen() ? "-translate-x-full" : "translate-x-0"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col p-6 min-h-screen shadow-sm border-r border-gray-100`}
      >
        {/* Logo/Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">S</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Fredmind</h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.href);
                if (isOpen) toggleSidebar();
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeItem === item.href
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-teal-50 hover:text-teal-600"
              }`}
            >
              <item.icon size={20} className={`${item.color} text-current`} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm text-gray-500">
          <p>© 2025 Fredmind Student</p>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

// Helper function to determine if the screen is large (lg breakpoint and above)
const isLargeScreen = () => {
  return typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
};

export default StudentSidebar;