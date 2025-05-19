export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-12 md:py-16 bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-md w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight tracking-tight">
          Education is create better future
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          We are create the understanding engagement and comprehensive for every student. There are so many student improve there skill.
        </p>
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
        <button className="px-6 py-3 text-white bg-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200 w-full md:w-auto">
            Apply now
          </button>
          <button className="px-6 py-3 text-blue-600 bg-white border-2 border-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-200 w-full md:w-auto">
           Search courses
          </button>
        </div>
        <div className="mt-6 md:mt-8 flex items-center space-x-4">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-500 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-600 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            More than 12,000 thousand student join with us
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center mt-8 md:mt-0">
        <p className="text-gray-500 text-sm">[Image Placeholder]</p>
      </div>
    </section>
  );
}