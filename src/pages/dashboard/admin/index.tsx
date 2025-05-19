import React, { useState } from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminTopbar from "@/components/layout/AdminTopbar";
import { CheckCircle, XCircle, BookOpen, Users, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data
const initialStudentApplications = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "pending" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "pending" },
];

const initialTutorApplications = [
  { id: 1, name: "Dr. Alan Turing", expertise: ["Frontend Engineering"], status: "pending" },
  { id: 2, name: "Grace Hopper", expertise: ["Backend Engineering"], status: "pending" },
];

const courses = [
  "Frontend Engineering",
  "Backend Engineering",
  "Digital Marketing",
  "Data Analysis",
];

// Mock data for the chart
const activityData = [
  { date: "Jan 22", hours: 2 },
  { date: "Jan 23", hours: 3 },
  { date: "Jan 24", hours: 1 },
  { date: "Jan 25", hours: 4 },
  { date: "Jan 26", hours: 2 },
  { date: "Jan 27", hours: 5 },
  { date: "Jan 28", hours: 3 },
  { date: "Jan 29", hours: 2 },
  { date: "Jan 30", hours: 4 },
  { date: "Jan 31", hours: 3 },
  { date: "Feb 1", hours: 2 },
  { date: "Feb 2", hours: 3 },
  { date: "Feb 3", hours: 1 },
  { date: "Feb 4", hours: 2 },
  { date: "Feb 5", hours: 3 },
];

export default function AdminDashboard() {
  const [studentApps, setStudentApps] = useState(initialStudentApplications);
  const [tutorApps, setTutorApps] = useState(initialTutorApplications);
  const [assignments, setAssignments] = useState<{ tutorId: number; course: string }[]>([]);

  const handleStudentDecision = (id: number, approve: boolean) => {
    setStudentApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: approve ? "approved" : "rejected" } : app
      )
    );
  };

  const handleTutorDecision = (id: number, approve: boolean) => {
    setTutorApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: approve ? "approved" : "rejected" } : app
      )
    );
  };

  const assignTutorToCourse = (tutorId: number, course: string) => {
    setAssignments((prev) => [...prev, { tutorId, course }]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminTopbar />
        <main className="p-8 mt-16 lg:ml-64 space-y-8 overflow-auto">
          {/* Greeting and Overview */}
          <section className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Good morning, Admin! 👋
            </h1>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Review Pending Applications
                  </p>
                  <p className="text-sm text-gray-500">
                    Check and approve student and tutor applications to keep the platform growing!
                  </p>
                </div>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 text-sm font-medium">
                Review Now
              </button>
            </div>
          </section>

          {/* Stats Overview */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-lg font-semibold text-gray-900">32</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Approved Tutors</p>
                <p className="text-lg font-semibold text-gray-900">{tutorApps.filter(t => t.status === "approved").length} / {tutorApps.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Clock size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Hours Taught</p>
                <p className="text-lg font-semibold text-gray-900">120h 3m</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Courses Assigned</p>
                <p className="text-lg font-semibold text-gray-900">{assignments.length} / {courses.length}</p>
              </div>
            </div>
          </section>

          {/* Activity Chart */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Activity Overview</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">120h 3m in this period</p>
                <p className="text-lg font-semibold text-gray-900">2.2h Today</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Line type="monotone" dataKey="hours" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Ongoing Courses/Assignments */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Assigned Courses</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assignments.map(({ tutorId, course }, i) => {
                const tutor = tutorApps.find((t) => t.id === tutorId);
                const colors = [
                  "from-indigo-500 to-indigo-400",
                  "from-orange-500 to-orange-400",
                  "from-purple-500 to-purple-400",
                ];
                const color = colors[i % colors.length];
                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}>
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-gray-900">{course}</p>
                      <p className="text-sm text-gray-500">Tutor: {tutor?.name}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-16 h-2 bg-gray-200 rounded-full">
                          <div className="absolute top-0 left-0 h-2 bg-indigo-500 rounded-full" style={{ width: "75%" }} />
                        </div>
                        <p className="text-sm text-gray-500">75%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {assignments.length === 0 && (
                <p className="text-gray-500 text-center col-span-3">No courses assigned yet.</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}