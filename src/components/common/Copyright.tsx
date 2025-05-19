'use client';
import { useEffect, useState } from 'react';

export default function Copyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (!year) return null;

  return <p className="mt-6 text-sm">&copy; {year} Fredmind Digital School</p>;
}
