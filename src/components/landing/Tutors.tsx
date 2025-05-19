import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Mentor {
  id: number;
  name: string;
  years: number;
  category: string;
  photo: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Joyeta Banerji",
    years: 15,
    category: "Animation",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "—",
    years: 10,
    category: "Design",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=cropg",
  },
  {
    id: 3,
    name: "—",
    years: 8,
    category: "Audio art",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "—",
    years: 12,
    category: "Photography",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    name: "—",
    years: 7,
    category: "Development",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
  },
];

const MentorCarousel: FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-12">
      {/* headline */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        Our professional &amp; <br className="md:hidden" />
        experience mentors
      </h2>

      {/* nav arrows */}
      <div className="absolute top-16 right-4 z-20 flex gap-3">
        <button
          className="swiper-button-prev w-9 h-9 rounded-full bg-white/50 backdrop-blur hover:bg-white shadow"
          aria-label="previous slide"
        />
        <button
          className="swiper-button-next w-9 h-9 rounded-full bg-white/50 backdrop-blur hover:bg-white shadow"
          aria-label="next slide"
        />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={24}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2.4 },
          768: { slidesPerView: 3.3 },
          1024: { slidesPerView: 4.2 },
        }}
        className="!pl-4 md:!pl-0"
      >
        {mentors.map((m, idx) => (
          <SwiperSlide key={m.id}>
            <article className="group relative h-[360px] rounded-xl overflow-hidden shadow-sm">
              {/* background image */}
              <img
                src={m.photo}
                alt={m.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* category pill */}
              <span className="absolute top-4 left-4 text-xs bg-white py-1 px-3 rounded-full font-medium shadow">
                {m.category}
              </span>

              {/* info overlay – full on first slide, hidden on others until hover */}
              <div
                className={`
                  absolute inset-0 flex flex-col justify-end
                  bg-gradient-to-t from-black/70 via-black/20 to-transparent
                  p-4 text-white
                  ${
                    idx === 0
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  }
                `}
              >
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-sm">{m.years} years Experience</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MentorCarousel;
