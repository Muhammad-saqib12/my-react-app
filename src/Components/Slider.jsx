// src/Components/Slider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const images = [
    "https://t4.ftcdn.net/jpg/07/12/88/97/360_F_712889784_kM4G1JgbFsVp9IkQQn11qpijAI7nRi4I.jpg",
    "https://i.pinimg.com/736x/66/01/43/660143948271fc5cf9dc2b7b4769ea12.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRGDcevs7S-YP8y9Dfd4qIHADij-o-2_otA&s",
    "https://t3.ftcdn.net/jpg/01/10/24/34/360_F_110243449_7SHALLFfuzJq2j33dsfRWTElxxKOag9Y.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[300px] sm:h-[450px] md:h-[600px] overflow-hidden rounded-xl shadow-lg">
      {/* Images wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md transition"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
      </button>

      {/* Indicators (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white shadow-lg" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
