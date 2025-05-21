"use client";

import React, { useState } from "react";

// Type definitions for course and tab keys
type Course = {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  price: number;
  image: string;
};

type TabKey = "engineering" | "design" | "marketing";

const coursesData: Record<TabKey, Course[]> = {
  engineering: [
    {
      id: "eng-1",
      title: "Introduction to Web Development",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2453,
      price: 79.99,
      image: "/image1.jpg"
    },
    {
      id: "eng-2",
      title: "Advanced Data Structures & Algorithms",
      instructor: "Prof. Michael Chen",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1862,
      price: 99.99,
      image: "/image2.jpg"
    },
    {
      id: "eng-3",
      title: "Mobile App Development with React Native",
      instructor: "James Wilson",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 3214,
      price: 89.99,
      image: "/image3.jpg"
    },
    {
      id: "eng-4",
      title: "Cloud Architecture & DevOps",
      instructor: "Emma Rodriguez",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1728,
      price: 94.99,
      image: "/image4.jpg"
    }
  ],
  design: [
    {
      id: "des-1",
      title: "UI/UX Design Principles",
      instructor: "Alex Turner",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.9,
      students: 3782,
      price: 69.99,
      image: "/image4.jpg"
    },
    {
      id: "des-2",
      title: "Advanced Adobe Photoshop Techniques",
      instructor: "Lisa Wang",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
      students: 2146,
      price: 84.99,
      image: "/image2.jpg"
    },
    {
      id: "des-3",
      title: "Motion Graphics & Animation",
      instructor: "David Miller",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 1893,
      price: 89.99,
      image: "/image3.jpg"
    },
    {
      id: "des-4",
      title: "Product Design Masterclass",
      instructor: "Sofia Patel",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1247,
      price: 129.99,
      image: "/image4.jpg"
    }
  ],
  marketing: [
    {
      id: "mkt-1",
      title: "Digital Marketing Fundamentals",
      instructor: "Robert Garcia",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 4215,
      price: 59.99,
      image: "/image2.jpg"
    },
    {
      id: "mkt-2",
      title: "Social Media Strategy & Analytics",
      instructor: "Jennifer Lee",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 3127,
      price: 79.99,
      image: "/image1.jpg"
    },
    {
      id: "mkt-3",
      title: "Content Marketing & SEO",
      instructor: "Thomas Black",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 2834,
      price: 84.99,
      image: "/image3.jpg"
    },
    {
      id: "mkt-4",
      title: "Brand Management & Strategy",
      instructor: "Olivia Martinez",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1956,
      price: 99.99,
      image: "/image2.jpg"
    }
  ]
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
    </div>
  );
};

// Badge component for course level
const LevelBadge = ({ level }: { level: "Beginner" | "Intermediate" | "Advanced" }) => (
  <span
    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
      level === "Beginner"
        ? "bg-emerald-100 text-emerald-700"
        : level === "Intermediate"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {level}
  </span>
);

const CourseListings = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("engineering");
  
  // Tab options
  const tabs = [
    { id: "engineering", label: "Engineering" },
    { id: "design", label: "Design" },
    { id: "marketing", label: "Marketing" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          Explore our
        </h2>
        <div className="flex items-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Popular <span className="text-orange-500">courses</span></h3>
          <div className="h-1 w-12 bg-emerald-500 ml-4"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex rounded-lg shadow-sm" role="group">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`px-6 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } ${
                  tab.id === "engineering" ? "rounded-l-lg" : ""
                } ${
                  tab.id === "marketing" ? "rounded-r-lg" : ""
                } border border-gray-200`}
                onClick={() => setActiveTab(tab.id as TabKey)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {coursesData[activeTab].map(course => (
          <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Course Image */}
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <LevelBadge level={course.level} />
              </div>
            </div>
            
            {/* Course Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">{course.title}</h3>
              
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={course.rating} />
                <span className="text-sm text-gray-500">{course.students.toLocaleString()} students</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">{course.duration}</span>
                <span className="text-emerald-500 font-bold">${course.price}</span>
              </div>
              
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Courses Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-white border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default CourseListings;