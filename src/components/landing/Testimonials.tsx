export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      quote: 'Fredmind transformed my career with practical, hands-on training.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&grayscale',
    },
    {
      name: 'John Smith',
      quote: 'The mentorship was incredible, and I landed my dream job!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&grayscale',
    },
    {
      name: 'Emily Brown',
      quote: 'The courses are well-structured and industry-relevant.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&grayscale',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 animate-fade-in-up text-white">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all animate-fade-in-up border border-gray-800"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}