import React, { ReactNode } from 'react';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="font-sans text-gray-800 bg-white overflow-x-hidden">
      {children}
    </main>
  );
}
