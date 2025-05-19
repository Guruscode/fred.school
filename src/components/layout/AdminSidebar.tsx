import React, { useState } from "react";
import Link from "next/link";
import { Users, BookOpen, CreditCard, BarChart2, MessageSquare, LogOut, Menu } from "lucide-react";

const navItems = [
  { name: "Student Management", href: "/admin/students", icon: Users, color: "text-indigo-600" },
  { name: "Tutor Management", href: "/admin/tutors", icon: Users, color: "text-purple-600" },
  { name: "Content Management", href: "/admin/content", icon: BookOpen, color: "text-orange-600" },
  { name: "Payment Management", href: "/admin/payments", icon: CreditCard, color: "text-green-600" },
  { name: "Reports & Analytics", href: "/admin/reports", icon: BarChart2, color: "text-blue-600" },
  { name: "Support & Communication", href: "/admin/support", icon: MessageSquare, color: "text-yellow-600" },
  { name: "Logout", href: "/logout", icon: LogOut, color: "text-red-600" },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].href);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
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
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold text-white">F</span>
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
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              <item.icon size={20} className={`${item.color} text-current`} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm text-gray-500">
          <p>© 2025 Fredmind Admin</p>
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

export default AdminSidebar;