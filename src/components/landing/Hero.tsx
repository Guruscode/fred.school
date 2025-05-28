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
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 10px 3px rgba(59, 130, 246, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
        .animate-glowPulse {
          animation: glowPulse 2.5s infinite ease-in-out;
        }
        .animate-cardReveal {
          animation: cardReveal 0.7s ease-out forwards;
        }
        .animate-textGlow {
          animation: textGlow 2s infinite ease-in-out;
        }
        .card-delay-1 { animation-delay: 0.2s; }
        .card-delay-2 { animation-delay: 0.4s; }
        .card-delay-3 { animation-delay: 0.6s; }
        .card-delay-4 { animation-delay: 0.8s; }
        .card-delay-5 { animation-delay: 1s; }
        .glass-effect {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <section className="relative container mx-auto px-6 py-16 md:py-32 bg-gradient-to-br  overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-500"></div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-center mb-8 leading-tight tracking-tight text-gray-900">
          <span className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Learn with{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-textGlow">
              Experts
              <span className="absolute -bottom-3 left-0 w-full h-3 bg-blue-300/50 rounded-full transform scale-x-110 blur-sm"></span>
            </span>{" "}
          </span>
          <span className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            & Get Certified
          </span>
          <br />
          <span className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 animate-textGlow">
              Build a Globally Relevant Career
              <span className="absolute -bottom-3 left-0 w-full h-3 bg-green-300/50 rounded-full transform scale-x-110 blur-sm"></span>
            </span>
          </span>
        </h1>

        {/* Hero Description */}
        <p
          className="text-gray-700 text-center max-w-4xl mx-auto mb-12 px-4 text-lg md:text-xl leading-relaxed font-medium animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          Discover top-tier courses, learn from industry experts, and gain certifications to propel your tech career forward with our cutting-edge platform.
        </p>

        {/* Call to Action Button */}
        <div className="flex justify-center mb-16 animate-fadeInUp" style={{ animationDelay: "1s" }}>
          <Link href="/apply">
            <button className="group glass-effect text-white px-10 py-5 rounded-full flex items-center gap-4 font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out animate-glowPulse">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Apply for a Course</span>
              <ArrowRight size={24} className="text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 max-w-7xl mx-auto">
          {categories.map((card, index) => (
            <div
              key={card.id}
              className={`relative rounded-2xl overflow-hidden w-full h-80 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-cardReveal card-delay-${card.id}`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(card.id === hoveredCard ? null : card.id)}
            >
              {/* Card Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.imageSrc})` }}
              ></div>

              {/* Card Overlay */}
              <div
                className={`absolute inset-0 glass-effect flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  hoveredCard === card.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-white text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 animate-textGlow">{card.title}</h3>
                <p className="text-gray-100 text-sm mb-4 font-medium">{card.description}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 glass-effect rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size= {18} className="text-blue-400" />
                  </div>
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