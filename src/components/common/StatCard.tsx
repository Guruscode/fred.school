// components/StatCard.tsx
import React from "react";

export const StatCard = ({
  title,
  value,
  children,
}: {
  title: string;
  value: string | number;
  children?: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-default">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <p className="text-3xl font-bold mt-2 text-indigo-600">{value}</p>
    {children}
  </div>
);
