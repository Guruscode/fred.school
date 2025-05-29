import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

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
  school: string;
  format: string;
  startDate: string;
  certificate: string;
};

// Course data from Fredmind School
const coursesData: Course[] = [
  // School of Digital Economy
  {
    id: "dm-1",
    title: "Master Digital Marketing Strategies",
    instructor: "Digital Marketing Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Weeks",
    lectures: 40,
    rating: 4.8,
    price: 259,
    originalPrice: 316,
    image: "/image1.jpg",
    category: "digital-marketing",
    school: "School of Digital Economy",
    format: "In-Person, Remote",
    startDate: "28/06/2025",
    certificate: "Diploma + TechStarts"
  },
  {
    id: "cc-1",
    title: "Unlock Your Creative Potential - Content Creation",
    instructor: "Content Strategy Expert",
    instructorImage: "/image1.jpg",
    duration: "8 Weeks",
    lectures: 32,
    rating: 4.9,
    price: 259,
    originalPrice: 316,
    image: "/image1.jpg",
    category: "content-creation",
    school: "School of Digital Economy",
    format: "Instructor-Led Course",
    startDate: "June 2025",
    certificate: "Diploma + TechStarts"
  },
  {
    id: "cd-1",
    title: "Creative Design - Out-Compete Top Designers",
    instructor: "Adobe Design Specialist",
    instructorImage: "/image1.jpg",
    duration: "8 Weeks",
    lectures: 30,
    rating: 4.7,
    price: 259,
    originalPrice: 316,
    image: "/image1.jpg",
    category: "creative-design",
    school: "School of Digital Economy",
    format: "Instructor-Led Course",
    startDate: "Various Cohorts",
    certificate: "Diploma + TechStarts"
  },
  // School of Engineering
  {
    id: "fe-1",
    title: "Frontend Development - Become a Sought-After Engineer",
    instructor: "Senior Frontend Engineer",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.9,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "frontend-development",
    school: "School of Engineering",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  {
    id: "be-1",
    title: "Backend Development - Build Software Foundations",
    instructor: "Backend Architecture Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.8,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "backend-development",
    school: "School of Engineering",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  {
    id: "md-1",
    title: "Mobile Development - Cross-Platform Apps",
    instructor: "Flutter & React Native Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.8,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "mobile-development",
    school: "School of Engineering",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  {
    id: "cs-1",
    title: "Cybersecurity - Launch Your Security Career",
    instructor: "Cybersecurity Professional",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.9,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "cybersecurity",
    school: "School of Engineering",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  {
    id: "ce-1",
    title: "Cloud Engineering - Master Cloud Infrastructure",
    instructor: "AWS & Cloud Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.7,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "cloud-engineering",
    school: "School of Engineering",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  // School of Product
  {
    id: "pd-1",
    title: "Product Design [UI/UX] - Master Interface Design",
    instructor: "UI/UX Design Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Weeks",
    lectures: 48,
    rating: 4.9,
    price: 259,
    originalPrice: 316,
    image: "/image1.jpg",
    category: "ui-ux-design",
    school: "School of Product",
    format: "On-site, Virtual",
    startDate: "Various Cohorts",
    certificate: "Diploma + TechStarts"
  },
  {
    id: "pm-1",
    title: "Product Management - Real-World Applications",
    instructor: "Product Strategy Expert",
    instructorImage: "/image1.jpg",
    duration: "16 Weeks",
    lectures: 56,
    rating: 4.8,
    price: 356,
    originalPrice: 396,
    image: "/image1.jpg",
    category: "product-management",
    school: "School of Product",
    format: "Virtual",
    startDate: "Coming Soon",
    certificate: "Diploma + TechStarts"
  },
  // School of Data
  {
    id: "da-1",
    title: "Data Analysis - Transform Raw Data into Insights",
    instructor: "Data Analytics Professional",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.8,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "data-analysis",
    school: "School of Data",
    format: "Online",
    startDate: "June 2025",
    certificate: "Diploma"
  },
  {
    id: "ds-1",
    title: "Data Science - Predictive Analytics & Machine Learning",
    instructor: "Data Science Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.9,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "data-science",
    school: "School of Data",
    format: "Online",
    startDate: "Coming Soon",
    certificate: "Diploma"
  },
  {
    id: "de-1",
    title: "Data Engineering - Build Data Pipelines & Infrastructure",
    instructor: "Data Infrastructure Expert",
    instructorImage: "/image1.jpg",
    duration: "12 Months",
    lectures: 96,
    rating: 4.8,
    price: 290,
    originalPrice: 360,
    image: "/image1.jpg",
    category: "data-engineering",
    school: "School of Data",
    format: "Online",
    startDate: "Coming Soon",
    certificate: "Diploma"
  }
];

// Category data based on Fredmind School programs
const categories = [
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "content-creation", label: "Content Creation" },
  { id: "creative-design", label: "Creative Design" },
  { id: "frontend-development", label: "Frontend Dev" },
  { id: "backend-development", label: "Backend Dev" },
  { id: "mobile-development", label: "Mobile Dev" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "cloud-engineering", label: "Cloud Engineering" },
  { id: "ui-ux-design", label: "UI/UX Design" },
  { id: "product-management", label: "Product Management" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "data-science", label: "Data Science" },
  { id: "data-engineering", label: "Data Engineering" }
];

// Star Rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}`}
          fill={i < Math.floor(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}</span>
    </div>
  );
};

// Category badge component
const CategoryBadge = ({ school }: { category: string; school: string }) => {
  const getSchoolColor = (school: string) => {
    switch (school) {
      case "School of Digital Economy":
        return "bg-yellow-100 text-yellow-800";
      case "School of Engineering":
        return "bg-gray-100 text-gray-800";
      case "School of Product":
        return "bg-gray-100 text-gray-800";
      case "School of Data":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col items-end">
      <span className={`px-2 py-1 text-xs font-medium rounded-full mb-1 ${getSchoolColor(school)}`}>
        {school.replace("School of ", "")}
      </span>
    </div>
  );
};

const FredmindCourseListings = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter courses based on activeCategory and searchQuery
  const displayedCourses = activeCategory === "all"
    ? coursesData.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : coursesData.filter(
        course =>
          course.category === activeCategory &&
          (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           course.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }
        .btn-hover {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-hover:hover {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Header with search */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 animate-fadeIn">
        <div className="text-3xl font-bold text-black mb-4 lg:mb-0 flex items-center">
          <span>All Courses</span>
          <div className="h-1 w-12 bg-yellow-500 ml-2 rounded"></div>
        </div>
        <div className="relative w-full lg:w-64">
          <input
            type="text"
            placeholder="Search your course"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-yellow-100 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-center overflow-x-auto px-2">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-yellow-500 text-black shadow-md"
                  : "bg-white text-gray-700 hover-oxo-1.5 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.length > 0 ? (
          displayedCourses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm card-hover animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={600}
                  className="w-full h-48 object-cover"
                />
                {course.startDate === "Coming Soon" && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center flex-1">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover mr-2"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-black font-medium">{course.instructor}</span>
                      <span className="text-xs text-gray-600">{course.certificate}</span>
                    </div>
                  </div>
                  <CategoryBadge category={course.category} school={course.school} />
                </div>

                <h3 className="text-lg font-semibold text-black mb-3 line-clamp-2 h-14">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between mb-3 text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span className="text-xs">{course.lectures} Lectures</span>
                  </div>
                </div>

                <div className="mb-3 text-gray-600">
                  <div className="flex items-center text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6h6m4 0a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v8z"
                      />
                    </svg>
                    <span>{course.format}</span>
                  </div>
                  <div className="flex items-center text-xs mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6h6m4 0a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v8z"
                      />
                    </svg>
                    <span>Starts: {course.startDate}</span>
                  </div>
                </div>

                <hr className="my-3 border-gray-200" />

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <span className="text-yellow-600 font-bold text-lg">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-gray-400 line-through text-sm ml-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <div className="text-xs text-yellow-600 font-medium">
                        Save ${course.originalPrice - course.price}
                      </div>
                    )}
                  </div>
                  <StarRating rating={course.rating} />
                </div>

                <Link href={`/courses/${course.id}`}>
                  <button className="w-full mt-4 bg-yellow-500 text-black font-medium py-2 px-4 rounded-md btn-hover">
                    {course.startDate === "Coming Soon" ? "Join Waitlist" : "Enroll Now"}
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 animate-fadeIn">
            No courses found for this category.
          </div>
        )}
      </div>

      {/* Browse More Button */}
      <div className="flex justify-center mt-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
        <Link href="/schools">
          <button className="bg-white border border-yellow-500 text-black font-medium py-3 px-8 rounded-md btn-hover">
            Browse All Schools
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FredmindCourseListings;