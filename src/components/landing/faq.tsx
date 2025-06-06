"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import type React from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode | string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How can I enroll?",
      answer: (
        <>
          All you have to do is sign up{" "}
          <Link href="/school" className="text-yellow-500 hover:underline">
            here
          </Link>{" "}
          and follow the instructions!
        </>
      ),
    },
    {
      question: "I’m not sure what course to take, what do I do?",
      answer: (
        <>
          We have created{" "}
          <Link href="/guide" className="text-yellow-500 hover:underline">
            this guide
          </Link>{" "}
          to help you through this process. If you’re still clueless, you can reach out to us{" "}
          <a href="mailto:info@fredmindschool.com" className="text-yellow-500 hover:underline">
            here
          </a>
          .
        </>
      ),
    },
    {
      question: "What qualification do I need to get accepted?",
      answer: "No qualification is needed at all. Come as you are.",
    },
    {
      question: "How much is tuition?",
      answer: (
        <>
          Tuition varies by course. Check out yours{" "}
          <Link href="/tuition" className="text-yellow-500 hover:underline">
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "Can I start classes immediately after I enroll?",
      answer:
        "We run a cohort-based program which means that you can totally sign up but classes won’t start until the next cohort.",
    },
    {
      question: "Can I get a refund of my tuition fee?",
      answer:
        "No, you can’t. You can only transfer your enrollment to another course within your school.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-16">
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
          animation: fadeIn 0.5s ease-out forwards;
        }
        .faq-hover {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .faq-hover:hover {
          border-color: #eab308;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-black text-center mb-12 animate-fadeIn">
        Frequently Asked Questions
        <div className="h-1 w-12 bg-yellow-500 mt-2 mx-auto"></div>
      </h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md bg-white shadow-sm faq-hover animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-black">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;