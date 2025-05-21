import React, { useState } from "react";
import Image from 'next/image';


// Type definitions for course and category
type Course = {
  id: string;
  title: string;
  instructor: string;
  instructorImage: string;
  duration: string;
  lectures: number;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
};

// type CategoryKey = "ui-ux" | "development" | "data-science" | "business" | "financial";

// Course data
const coursesData: Course[] = [
  {
    id: "ds-1",
    title: "Data Science and Machine Learning with Python - Hands On!",
    instructor: "Jason Williams",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 385.00,
    originalPrice: 440.00,
    image: "/image1.jpg",
    category: "data-science"
  },
  {
    id: "ux-1",
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    instructor: "Pamela Foster",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 420.00,
    image: "/image1.jpg",
    category: "ui-ux"
  },
  {
    id: "bus-1",
    title: "Culture & Leadership: Strategies for a Successful Business",
    instructor: "Rose Simmons",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 295.00,
    originalPrice: 340.00,
    image: "/image1.jpg",
    category: "business"
  },
  {
    id: "fin-1",
    title: "Finance Series: Learn to Budget and Calculate your Net Worth",
    instructor: "Jason Williams",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 0,
    image: "/image1.jpg",
    category: "financial"
  },
  {
    id: "mkt-1",
    title: "Build Brand into Marketing: Tackling the New Marketing Landscape",
    instructor: "Jason Williams",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 136.00,
    image: "/image1.jpg",
    category: "marketing"
  },
  {
    id: "des-1",
    title: "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
    instructor: "Jason Williams",
    instructorImage: "/image1.jpg",
    duration: "08 hr 15 mins",
    lectures: 29,
    rating: 4.9,
    price: 237.00,
    image: "/image1.jpg",
    category: "design"
  }
];

// Category data
const categories = [
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "development", label: "Development" },
  { id: "data-science", label: "Data Science" },
  { id: "business", label: "Business" },
  { id: "financial", label: "Financial" }
];

// Star Rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 text-yellow-400`}
          fill={i < Math.floor(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}</span>
    </div>
  );
};

// Category badge component
const CategoryBadge = ({ category }: { category: string }) => {
  const colors: Record<string, string> = {
    "science": "bg-green-100 text-green-800",
    "finance": "bg-blue-100 text-blue-800",
    "marketing": "bg-yellow-100 text-yellow-800",
    "design": "bg-purple-100 text-purple-800",
    "default": "bg-gray-100 text-gray-800"
  };

  const getColorClass = () => {
    for (const [key, value] of Object.entries(colors)) {
      if (category.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }
    return colors.default;
  };

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getColorClass()}`}>
      {category}
    </span>
  );
};

const EduleCourseListings = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all"); // Changed default to "all"
  
  // Filter courses based on activeCategory
  const displayedCourses = activeCategory === "all"
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with search */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
        <div className="text-2xl font-bold text-gray-800 mb-4 lg:mb-0 flex items-center">
          <span className="mr-2">All</span> 
          <span className="text-green-600">Courses</span> 
          <span className="ml-2">of Edule</span>
          <div className="h-1 w-16 bg-green-500 ml-2 rounded"></div>
        </div>
        
        <div className="relative w-full lg:w-64">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-green-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Category filter */}
      <div className="relative bg-green-50 p-6 rounded-lg mb-8">
       
        <div className="flex justify-center overflow-x-auto px-8">
          <button
            className={`mx-2 px-6 py-2 rounded-md transition-all ${
              activeCategory === "all"
                ? "bg-white text-green-600 shadow-md font-semibold border border-green-200"
                : "bg-transparent text-gray-700 hover:bg-white"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`mx-2 px-6 py-2 rounded-md transition-all ${
                activeCategory === category.id
                  ? "bg-white text-green-600 shadow-md font-semibold border border-green-200"
                  : "bg-transparent text-gray-700 hover:bg-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
      
      </div>
      
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.length > 0 ? (
          displayedCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Course Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={600}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              {/* Course Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      width={200}
                      height={600}
                      className="w-10 h-10 rounded-full object-cover mr-2"
                    />
                    <span className="text-sm text-gray-700">{course.instructor}</span>
                  </div>
                  <CategoryBadge category={course.category} /> {/* Updated to use course.category */}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800 line-clamp-2 h-14">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3 text-gray-600">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-xs">{course.lectures} Lectures</span>
                  </div>
                </div>
                
                <hr className="my-3" />
                
                <div className="flex items-center justify-between">
                  <div>
                    {course.price === 0 ? (
                      <span className="text-green-600 font-semibold text-lg">Free</span>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-green-600 font-bold text-lg">${course.price.toFixed(2)}</span>
                        {course.originalPrice && (
                          <span className="text-gray-400 line-through text-sm ml-2">
                            ${course.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <StarRating rating={course.rating} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No courses found for this category.
          </div>
        )}
      </div>
      
      {/* "Other Course" Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-white border border-green-500 text-green-600 hover:bg-green-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
          Other Course
        </button>
      </div>
    </div>
  );
};

export default EduleCourseListings;