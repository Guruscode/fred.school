"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategoryCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const Hero: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories: CategoryCard[] = [
    {
      id: 1,
      title: "Updated Curriculum",
      description:
        "Our modules are well-structured with up-to-date information, aligned with your learning goals.",
      imageSrc: "/tech1.jpg",
      alt: "Students learning with updated curriculum",
    },
    {
      id: 2,
      title: "Stellar User Experience",
      description:
        "Our virtual-first, self-paced platform lets you learn from anywhere, in flexible cohorts.",
      imageSrc: "/tech2.jpg",
      alt: "Person studying online comfortably",
    },
    {
      id: 3,
      title: "Expert Tutors",
      description:
        "Learn from seasoned industry leaders with real-world experience and academic credentials.",
      imageSrc: "/tech3.jpg",
      alt: "Professional tutor guiding students",
    },
    {
      id: 4,
      title: "Progress Tracking",
      description:
        "Assess your progress with real-time feedback from quizzes, assignments, and projects.",
      imageSrc: "/tech4.jpg",
      alt: "Progress dashboard for tracking learning goals",
    },
    {
      id: 5,
      title: "Support & Community",
      description:
        "Join a vibrant community through forums, group projects, and networking events.",
      imageSrc: "/tech5.jpg",
      alt: "Group of learners collaborating online",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .card-delay-1 { animation-delay: 0.1s; }
        .card-delay-2 { animation-delay: 0.2s; }
        .card-delay-3 { animation-delay: 0.3s; }
        .card-delay-4 { animation-delay: 0.4s; }
        .card-delay-5 { animation-delay: 0.5s; }
        .card-overlay {
          background: rgba(0, 0, 0, 0.7);
          transition: opacity 0.3s ease;
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.03);
        }
        .btn-hover {
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .btn-hover:hover {
          background-color: #eab308;
          transform: translateX(5px);
        }
      `}</style>
      <section className="container mx-auto px-6 py-16 md:py-24 bg-white">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight text-black animate-fadeIn">
          Learn with Experts & Get Certified
          <span className="block text-2xl md:text-3xl font-semibold text-gray-600 mt-2">
            Build a Globally Relevant Career
          </span>
        </h1>

        {/* Hero Description */}
        <p
          className="text-gray-600 text-center max-w-3xl mx-auto mb-12 px-4 text-lg leading-relaxed animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          Discover top-tier courses, learn from industry experts, and gain certifications to propel your tech career forward.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center mb-16 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Link href="/apply">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold text-lg flex items-center gap-3 btn-hover">
              Apply for a Course
              <ArrowRight size={20} className="text-black" />
            </button>
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 max-w-7xl mx-auto">
          {categories.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-lg overflow-hidden bg-white shadow-md hover-scale animate-fadeIn card-delay-${card.id}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(card.id === hoveredCard ? null : card.id)}
            >
              {/* Card Image */}
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.imageSrc})` }}
              ></div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>

              {/* Card Overlay */}
              <div
                className={`absolute inset-0 card-overlay flex items-center justify-center opacity-0 ${
                  hoveredCard === card.id ? "opacity-100" : ""
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
                  <ArrowRight size={18} className="text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;