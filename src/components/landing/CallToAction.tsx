import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-black to-gray-800 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Join Fredmind today and gain the skills to shape your future.
        </p>
        <Link href="/apply">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg animate-fade-in-up animation-delay-400">
            Apply Now
          </button>
        </Link>
      </div>
    </section>
  );
}