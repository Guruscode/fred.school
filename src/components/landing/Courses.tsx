"use client";

import { useState } from "react";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All Categories");

  const tabs = ["All Categories", "Animation", "Photography", "Basic of UI", "Fundamental Design"];

  const courses = [
    {
      category: "Animation",
      image: "https://images.unsplash.com/photo-1618005182384-9a9b2b8c9a4e?w=300&h=200&fit=crop",
      videos: "100 live videos",
      price: "180$",
      duration: "3 Months duration",
    },
    {
      category: "Photography",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=300&h=200&fit=crop",
      videos: "120 live videos",
      price: "205$",
      duration: "3 Months duration",
    },
    {
      category: "Basic of UI",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop",
      videos: "80 live videos",
      price: "150$",
      duration: "2 Months duration",
    },
    {
      category: "Fundamental Design",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      videos: "90 live videos",
      price: "175$",
      duration: "3 Months duration",
    },
    {
      category: "Animation",
      image: "https://images.unsplash.com/photo-1626785774573-4b799f71a0c7?w=300&h=200&fit=crop",
      videos: "110 live videos",
      price: "190$",
      duration: "3 Months duration",
    },
  ];

  const filteredCourses = courses.filter(
    (course) => activeTab === "All Categories" || course.category === activeTab
  );

  return (
    <section className="px-6 py-10 md:px-12 md:py-16 bg-white">
      {/* Centered Heading and Tabs */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Enroll Your Favorite Courses
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
          >
            <img
              src={course.image}
              alt={course.category}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                #{course.category}
              </h3>
              <div className="flex items-center justify-between text-gray-600 text-sm mb-2">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m6 0a3 3 0 01-3 3m3-3a3 3 0 00-3-3m0 0H9m3 6a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6z"
                    ></path>
                  </svg>
                  {course.videos}
                </span>
                <span className="font-semibold">{course.price}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {course.duration}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}