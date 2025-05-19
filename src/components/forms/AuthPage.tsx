"use client";

import { useState } from "react";

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Illustration Section */}
        <div className="hidden md:flex md:w-1/2 bg-green-50 p-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-gray-800">Exam Mastery Hub</h2>
            <p className="text-gray-600 mt-2">
              Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
            </p>
            <div className="mt-6">
              {/* Add your illustration or icons here */}
              <svg className="w-40 h-40 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-bold text-green-700">Mastery Hub</h1>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username or email
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="johnsmith007"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="********"
              />
              <a href="#" className="text-sm text-green-600 hover:underline mt-2 block">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
            <div className="text-center">or</div>
            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.78h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.78c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.34-1.36-.34-2.09s.12-1.43.34-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              </svg>
              Sign in with Google
            </button>
            <p className="text-sm text-gray-600 text-center">
              Are you new? <a href="#" className="text-green-600 hover:underline">Create an Account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}