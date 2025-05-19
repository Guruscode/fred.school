import React from "react";
import TutorSidebar from "@/components/layout/TutorSidebar";
import TutorTopbar from "@/components/layout/TutorTopbar";
import { BookOpen, Calendar, Upload, BarChart2, CreditCard, Users, Edit } from "lucide-react";

// Mock data for classes, sessions, and other sections
const assignedClasses = [
  {
    id: 1,
    title: "Frontend Engineering",
    studentCount: 25,
    description: "Teaching React, Next.js, and modern web development.",
  },
  {
    id: 2,
    title: "Product Marketing",
    studentCount: 18,
    description: "Covering branding, SEO, and campaign strategies.",
  },
  {
    id: 3,
    title: "Data Science",
    studentCount: 22,
    description: "Exploring Python, machine learning, and data visualization.",
  },
];

const upcomingSessions = [
  {
    id: 1,
    date: "May 20, 2025 - 3:00 PM",
    topic: "React Hooks Deep Dive",
    classTitle: "Frontend Engineering",
  },
  {
    id: 2,
    date: "May 25, 2025 - 1:00 PM",
    topic: "Marketing Strategies 101",
    classTitle: "Product Marketing",
  },
];

const ClassCard = ({
  title,
  studentCount,
  description,
}: {
  title: string;
  studentCount: number;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full flex items-center justify-center">
      <BookOpen size={24} className="text-white" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
        <Users size={16} className="text-amber-500" />
        <span>{studentCount} Students</span>
      </div>
      <button className="mt-3 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors duration-200">
        View Class
      </button>
    </div>
  </div>
);

const SessionCard = ({
  date,
  topic,
  classTitle,
}: {
  date: string;
  topic: string;
  classTitle: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full flex items-center justify-center">
        <Calendar size={20} className="text-white" />
      </div>
      <div>
        <p className="font-semibold text-gray-900">{topic}</p>
        <p className="text-sm text-gray-500">{classTitle}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
    <button className="mt-3 w-full bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
      Join Session
    </button>
  </div>
);

export default function TutorDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <TutorSidebar />
      <div className="flex-1 flex flex-col">
        <TutorTopbar />
        <main className="p-8 mt-16 lg:ml-64 space-y-8 overflow-auto">
          {/* Greeting Section */}
          <section className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Good morning, Jane! 👋 (10:15 AM WAT)
            </h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Prepare for Your Next Class
                  </p>
                  <p className="text-sm text-gray-500">
                    Review materials and schedule your upcoming session!
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
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <BookOpen size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Assigned Classes</p>
                <p className="text-lg font-semibold text-gray-900">{assignedClasses.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Upload size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Materials Uploaded</p>
                <p className="text-lg font-semibold text-gray-900">15</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Edit size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Graded Assignments</p>
                <p className="text-lg font-semibold text-gray-900">40</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CreditCard size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Earnings</p>
                <p className="text-lg font-semibold text-gray-900">$1,200</p>
              </div>
            </div>
          </section>

          {/* Assigned Classes */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Assigned Classes</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assignedClasses.map((classItem) => (
                <ClassCard
                  key={classItem.id}
                  title={classItem.title}
                  studentCount={classItem.studentCount}
                  description={classItem.description}
                />
              ))}
            </div>
          </section>

          {/* Upcoming Live Sessions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Upcoming Live Sessions</h2>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  date={session.date}
                  topic={session.topic}
                  classTitle={session.classTitle}
                />
              ))}
              {upcomingSessions.length === 0 && (
                <p className="text-gray-500 text-center">No upcoming sessions scheduled.</p>
              )}
            </div>
          </section>

          {/* Upload Course Materials */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Upload Course Materials</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center">
                  <Upload size={24} className="text-white" />
                </div>
                <p className="text-gray-900 text-sm">
                  Upload PDFs, videos, and assignments for your classes.
                </p>
              </div>
              <input
                type="file"
                accept=".pdf,.mp4,.doc,.docx"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-white hover:file:bg-teal-600"
              />
            </div>
          </section>

          {/* Student Progress Monitoring */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Student Progress Monitoring</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center">
                  <BarChart2 size={24} className="text-white" />
                </div>
                <p className="text-gray-900 text-sm">
                  Track assignment submissions and grades for your students.
                </p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                View Progress
              </button>
            </div>
          </section>

          {/* Payment Details */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center">
                  <CreditCard size={24} className="text-white" />
                </div>
                <p className="text-gray-900 text-sm">
                  View your compensation and payment history.
                </p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                View Payments
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}