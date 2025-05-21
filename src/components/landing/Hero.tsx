"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const Hero: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);

  const categories: CategoryCard[] = [
    {
      id: 1,
      title: "Updated Curriculum",
      description:
        "Our modules are well-structured with up-to-date information, aligned with your learning goals.",
      imageSrc: "/image1.jpg",
      alt: "Students learning with updated curriculum",
    },
    {
      id: 2,
      title: "Stellar User Experience",
      description:
        "Our virtual-first, self-paced platform lets you learn from anywhere, in flexible cohorts.",
      imageSrc: "/image2.jpg",
      alt: "Person studying online comfortably",
    },
    {
      id: 3,
      title: "Expert Tutors",
      description:
        "Learn from seasoned industry leaders with real-world experience and academic credentials.",
      imageSrc: "/image3.jpg",
      alt: "Professional tutor guiding students",
    },
    {
      id: 4,
      title: "Progress Tracking",
      description:
        "Assess your progress with real-time feedback from quizzes, assignments, and projects.",
      imageSrc: "/image4.jpg",
      alt: "Progress dashboard for tracking learning goals",
    },
    {
      id: 5,
      title: "Support & Community",
      description:
        "Join a vibrant community through forums, group projects, and networking events.",
      imageSrc: "/image1.jpg",
      alt: "Group of learners collaborating online",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-center mb-4 leading-tight tracking-wide">
        Learn with{" "}
        <span className="relative inline-block">
          <span className="relative z-10">experts</span>
          <span className="absolute inset-0 bg-pink-200 rounded-full -z-0 transform scale-110"></span>
        </span>{" "}
        Get Certified
        <br />
        <span className="relative inline-block">
          <span className="relative z-10">Build a Globally </span>
          <span className="absolute inset-0 bg-green-100 rounded-full -z-0 transform scale-110"></span>
        </span>{" "}
        Relevant Career
        <div className="relative">
          <div className="h-1 w-64 bg-yellow-300 mx-auto mt-2"></div>
        </div>
      </h1>

      <p className="text-gray-600 text-center max-w-4xl mx-auto mb-10 px-4 text-base leading-relaxed">
        Pick the best courses from our platform and get access to top tutors and mentors.
        We provide you with an exceptional learning experience to help you build a lucrative tech career.
      </p>

      <div className="flex justify-center mb-12">
        <Link href="/apply">
        <button className="bg-black text-white px-8 py-3 rounded-full flex items-center font-medium hover:bg-gray-800 transition-colors">
          <span>Apply for a courses</span> <ChevronDown className="ml-2" size={18} />
        </button>
        </Link>
      </div>

      <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-6 md:pb-8 px-2">
        {categories.map((card) => (
          <div
            key={card.id}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden w-64 h-72 cursor-pointer shadow-md"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard(card.id === hoveredCard ? null : card.id)}
          >
            <div className="absolute inset-0 bg-gray-200">
              <div className="w-full h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.imageSrc})` }}
                ></div>
              </div>
            </div>

            {hoveredCard === card.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-200">
                <h3 className="text-white text-xl font-medium mb-1">
                  {card.title}
                </h3>
                <p className="text-white text-sm mb-4">{card.description}</p>
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
