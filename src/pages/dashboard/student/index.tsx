import React from "react";
import StudentSidebar from "@/components/layout/StudentSidebar";
import StudentTopbar from "@/components/layout/StudentTopbar";
import { BookOpen, CheckCircle, AlertCircle, MessageSquare, Clock, Award } from "lucide-react";

// Mock data for courses and progress
const enrolledCourses = [
  {
    id: 1,
    title: "Frontend Engineering",
    description: "Learn React, Next.js, and modern web development.",
    progress: 60,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Master SEO, social media, and content strategies.",
    progress: 30,
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Explore data visualization and statistical methods.",
    progress: 45,
  },
];

const paymentStatus = {
  isUpToDate: true,
  lastPayment: "2025-05-01",
  nextDue: "2025-06-01",
};

const EnrolledCourseCard = ({
  title,
  description,
  progress,
}: {
  title: string;
  description: string;
  progress: number;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center">
      <BookOpen size={24} className="text-white" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-2 flex items-center gap-2">
        <div className="relative w-16 h-2 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-teal-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500">{progress}%</p>
      </div>
      <button className="mt-3 text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors duration-200">
        Continue Course
      </button>
    </div>
  </div>
);

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <StudentSidebar />
      <div className="flex-1 flex flex-col">
        <StudentTopbar />
        <main className="p-8 mt-16 lg:ml-64 space-y-8 overflow-auto">
          {/* Greeting Section */}
          <section className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Good morning, John! 👋
            </h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Complete Your Next Lesson
                  </p>
                  <p className="text-sm text-gray-500">
                    Continue your journey by diving into the next lesson!
                  </p>
                </div>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 text-sm font-medium">
                Start Now
              </button>
            </div>
          </section>

          {/* Stats Overview */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <BookOpen size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Enrolled Courses</p>
                <p className="text-lg font-semibold text-gray-900">{enrolledCourses.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Completed Lessons</p>
                <p className="text-lg font-semibold text-gray-900">12 / 20</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Hours Spent</p>
                <p className="text-lg font-semibold text-gray-900">45h 15m</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Award size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Achievements</p>
                <p className="text-lg font-semibold text-gray-900">5</p>
              </div>
            </div>
          </section>

          {/* Enrolled Courses */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Enrolled Courses</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map((course) => (
                <EnrolledCourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  progress={course.progress}
                />
              ))}
            </div>
          </section>

          {/* Payment Status */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Payment Status</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-3">
              {paymentStatus.isUpToDate ? (
                <CheckCircle size={24} className="text-green-500" />
              ) : (
                <AlertCircle size={24} className="text-red-500" />
              )}
              <div className="space-y-1 flex-1">
                <p className="text-lg font-semibold text-gray-900">
                  {paymentStatus.isUpToDate ? "All payments are up to date" : "Payment overdue"}
                </p>
                <p className="text-sm text-gray-500">
                  Last Payment: {paymentStatus.lastPayment}
                </p>
                {!paymentStatus.isUpToDate && (
                  <p className="text-sm text-gray-500">
                    Next Due: {paymentStatus.nextDue}
                  </p>
                )}
              </div>
              {!paymentStatus.isUpToDate && (
                <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 transition-all duration-200 text-sm font-medium">
                  Make Payment
                </button>
              )}
            </div>
          </section>

          {/* Support */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Need Help?</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <MessageSquare size={24} className="text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 text-sm">
                  Contact our support team for assistance.
                </p>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm font-medium">
                Request Support
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}