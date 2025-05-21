"use client";

import React, { useState } from "react";
import Image from 'next/image';

// Sample tutors data - in a real application, you would fetch this from an API
const tutorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Web Development Instructor",
    expertise: ["JavaScript", "React", "Node.js"],
    rating: 4.9,
    reviews: 127,
    students: 2453,
    courses: 8,
    biography: "Dr. Johnson has over 10 years of experience in web development and has worked with companies like Google and Microsoft. She specializes in modern JavaScript frameworks and responsive design.",
    image: "/image2.jpg",
    availability: "Weekdays, 9AM-5PM",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Data Structures & Algorithms Expert",
    expertise: ["Algorithms", "Python", "Java"],
    rating: 4.8,
    reviews: 98,
    students: 1862,
    courses: 6,
    biography: "With a PhD in Computer Science from MIT, Prof. Chen has been teaching advanced programming concepts for over 15 years. His research focuses on algorithm optimization and computational complexity.",
    image: "/image2.jpg",
    availability: "Weekends, 10AM-8PM",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Lisa Wang",
    title: "Creative Design Lead",
    expertise: ["UI/UX", "Adobe Suite", "Design Thinking"],
    rating: 4.9,
    reviews: 156,
    students: 3127,
    courses: 10,
    biography: "Lisa is an award-winning designer with experience at top creative agencies. She combines artistic vision with technical expertise to create compelling designs that solve real-world problems.",
    image: "/image2.jpg",
    availability: "Mon-Fri, 11AM-7PM",
    social: {
      twitter: "#",
      linkedin: "#",
      behance: "#"
    }
  },
  {
    id: 4,
    name: "Robert Garcia",
    title: "Digital Marketing Strategist",
    expertise: ["SEO", "Content Marketing", "Analytics"],
    rating: 4.7,
    reviews: 112,
    students: 2104,
    courses: 7,
    biography: "Robert has led marketing campaigns for Fortune 500 companies and startups alike. He brings a data-driven approach to digital marketing, helping students understand both creative and analytical aspects.",
    image: "/image2.jpg",
    availability: "Tue-Sat, 9AM-6PM",
    social: {
      twitter: "#",
      linkedin: "#",
      instagram: "#"
    }
  }
];

// Social media icons
type SocialPlatform = "twitter" | "linkedin" | "github" | "behance" | "instagram";

const SocialIcon = ({ platform }: { platform: SocialPlatform }) => {
  const icons: Record<SocialPlatform, React.JSX.Element> = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    behance: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.443 5.34c.639 0 1.23.05 1.77.198.54.099.984.297 1.377.544.394.247.689.594.885 1.039.197.445.295.98.295 1.583 0 .693-.147 1.286-.491 1.731-.295.446-.787.812-1.377 1.088.836.247 1.475.693 1.868 1.286.394.594.64 1.335.64 2.177 0 .693-.147 1.286-.393 1.78-.246.495-.639.94-1.082 1.237-.443.297-.984.544-1.573.692a7.5 7.5 0 01-1.771.148H0V5.34h7.443zm-.443 5.39c.541 0 .984-.148 1.328-.396.344-.247.492-.693.492-1.236 0-.297-.05-.544-.148-.742-.098-.198-.246-.347-.442-.445-.197-.099-.394-.148-.64-.198-.246 0-.491-.05-.787-.05H3.213v3.067h3.787zm.246 5.683c.295 0 .59-.05.885-.099a1.97 1.97 0 00.738-.297c.196-.148.344-.346.492-.594.098-.247.196-.594.196-.99 0-.79-.197-1.385-.59-1.682-.394-.297-.935-.445-1.574-.445H3.213v4.107h4.033zm10.147-5.88c.59 0 1.082.05 1.524.198.443.148.787.346 1.082.643.294.297.491.643.688 1.088.147.445.246.94.246 1.534 0 .148 0 .297-.05.445 0 .148-.05.247-.05.346H13.36c.05.89.492 1.384 1.377 1.384.393 0 .738-.099 1.033-.297.295-.198.492-.395.59-.692h2.067c-.344 1.038-.837 1.78-1.574 2.226-.738.446-1.623.693-2.657.693-.737 0-1.377-.099-1.967-.347a3.638 3.638 0 01-1.426-1.039c-.393-.444-.688-.939-.885-1.532a6.506 6.506 0 01-.295-2.028c0-.693.098-1.335.295-1.978.197-.643.492-1.187.934-1.682.393-.445.886-.84 1.475-1.088.59-.247 1.23-.396 1.967-.396.935 0 1.722.198 2.36.544.639.396 1.131.89 1.475 1.533h-2.166c-.147-.297-.394-.495-.688-.644-.295-.148-.639-.247-.984-.247-.787 0-1.377.247-1.672.742-.344.495-.492 1.187-.541 2.028h5.508v.049zm-5.46-4.404h5.362v1.632h-5.362V6.13z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  };

  return icons[platform] || null;
};

const TutorsShowcase = () => {
  const [activeProfile, setActiveProfile] = useState(1);
  const activeTutor = tutorsData.find(tutor => tutor.id === activeProfile) || tutorsData[0];
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Heading */}
      <div className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          Learn from
        </h2>
        <div className="flex items-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our <span className="text-orange-500">expert tutors</span></h3>
          <div className="h-1 w-12 bg-emerald-500 ml-4"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tutor Profile Cards - Click to view details */}
        <div className="col-span-1 lg:col-span-1 space-y-4 order-2 lg:order-1">
          {tutorsData.map(tutor => (
            <div 
              key={tutor.id}
              onClick={() => setActiveProfile(tutor.id)}
              className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                activeProfile === tutor.id 
                  ? "bg-emerald-500 text-white shadow-lg transform scale-105" 
                  : "bg-white hover:bg-gray-100 shadow"
              }`}
            >
             <Image
                src={tutor.image}
                alt={tutor.name}
                width={200} // replace with your actual image width
                height={200} // replace with your actual image height
                 className="w-16 h-16 rounded-full object-cover"
              />

              <div className="ml-4">
                <h4 className={`font-semibold ${activeProfile === tutor.id ? "text-white" : "text-gray-800"}`}>
                  {tutor.name}
                </h4>
                <p className={`text-sm ${activeProfile === tutor.id ? "text-white" : "text-gray-600"}`}>
                  {tutor.title}
                </p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < Math.floor(tutor.rating) 
                          ? activeProfile === tutor.id ? "text-white" : "text-yellow-400" 
                          : activeProfile === tutor.id ? "text-emerald-300" : "text-gray-300"
                      }`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className={`text-xs ml-1 ${activeProfile === tutor.id ? "text-white" : "text-gray-600"}`}>
                    ({tutor.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed Active Tutor Profile */}
        <div className="col-span-1 lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-48 bg-emerald-500">
              <div className="absolute -bottom-16 left-8">
              <Image
              src={activeTutor.image}
              alt={activeTutor.name}
              width={200} // replace with your actual image width
              height={200} // replace with your actual image height
             className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />

              </div>
            </div>
            
            <div className="pt-20 px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{activeTutor.name}</h2>
                  <p className="text-emerald-500 font-medium">{activeTutor.title}</p>
                </div>
                
                <div className="flex mt-4 md:mt-0">
                  {Object.keys(activeTutor.social).map(platform => (
                    <a 
                      key={platform} 
                      href={activeTutor.social[platform as SocialPlatform]} 
                      className="text-gray-400 hover:text-emerald-500 mr-4"
                      aria-label={platform}
                    >
                      <SocialIcon platform={platform as SocialPlatform} />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-500">{activeTutor.courses}</p>
                  <p className="text-gray-600 text-sm">Courses</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-500">{activeTutor.students.toLocaleString()}</p>
                  <p className="text-gray-600 text-sm">Students</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-emerald-500">{activeTutor.reviews}</p>
                  <p className="text-gray-600 text-sm">Reviews</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Biography</h3>
                <p className="text-gray-600">{activeTutor.biography}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {activeTutor.expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-semibold text-gray-800">Availability</h3>
                  <p className="text-gray-600">{activeTutor.availability}</p>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg transition-colors duration-200">
                  Schedule Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsShowcase;