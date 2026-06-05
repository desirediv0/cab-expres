"use client";

import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  IconStarFilled,
  IconChevronLeft,
  IconChevronRight,
  IconCheck,
} from "@tabler/icons-react";

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    date: "2 days ago",
    text: "Excellent service! The driver was very professional and the car was spotlessly clean. Reached the airport on time without any hassle. Highly recommend CabExpress for airport transfers.",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    rating: 5,
    date: "1 week ago",
    text: "Booked a round trip to Agra with CabExpress. The entire experience was seamless — from booking to the journey. The driver knew all the best spots and made our trip memorable.",
  },
  {
    name: "Amit Verma",
    location: "Jaipur",
    rating: 5,
    date: "2 weeks ago",
    text: "Used CabExpress for our family trip to Manali. The vehicle was comfortable, driver was courteous, and the pricing was very transparent. No hidden charges at all!",
  },
  {
    name: "Sunita Joshi",
    location: "Haridwar",
    rating: 5,
    date: "3 weeks ago",
    text: "Wonderful experience for our Char Dham Yatra tour package. The team was very supportive throughout the journey. CabExpress truly understands pilgrimage travel needs.",
  },
  {
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 5,
    date: "1 month ago",
    text: "Corporate travel made easy! Our team regularly uses CabExpress for outstation trips. Consistent quality, punctual drivers, and excellent customer support — highly recommended.",
  },
  {
    name: "Neha Agarwal",
    location: "Pune",
    rating: 5,
    date: "1 month ago",
    text: "Booked a one-way cab from Delhi to Rishikesh. Journey was smooth, the cab was well-maintained, and the booking process was super easy. Will definitely book again!",
  },
];

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Google Rating Summary Block */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 bg-gray-50 rounded-2xl py-3 px-6 max-w-lg mx-auto border border-gray-200/80 shadow-sm text-center sm:text-left">
        <div className="flex items-center gap-2">
          <GoogleIcon />
          <span className="font-bold text-gray-800 text-sm tracking-tight">Google Rating</span>
        </div>
        <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />
        <div className="flex items-center gap-1.5 justify-center">
          <span className="font-black text-gray-900 text-base leading-none">4.9</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <IconStarFilled key={i} size={15} className="text-yellow-450 fill-yellow-400" />
            ))}
          </div>
          <span className="text-gray-500 text-[11px] font-bold tracking-tight">(482 reviews)</span>
        </div>
      </div>

      {/* Embla slider window */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
            >
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200/65 hover:border-yellow-400/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group">
                
                {/* Header: Google Icon & Date */}
                <div className="flex justify-between items-start w-full mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <IconStarFilled
                        key={j}
                        size={15}
                        className="text-yellow-450 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>

                {/* Text content */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-1 mb-6 font-medium">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm border border-yellow-500/10">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-extrabold text-gray-900 text-sm leading-tight truncate">
                        {t.name}
                      </p>
                      {/* Verified Badge */}
                      <span className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0" title="Verified Customer">
                        <IconCheck size={9} className="text-white font-extrabold" />
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">
                      <span>{t.location}</span>
                      <span>•</span>
                      <span className="text-gray-400/80 font-semibold lowercase font-sans">{t.date}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-200 group shadow-sm"
          aria-label="Previous Review"
        >
          <IconChevronLeft
            size={18}
            className="text-gray-600 group-hover:text-black"
          />
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-200 group shadow-sm"
          aria-label="Next Review"
        >
          <IconChevronRight
            size={18}
            className="text-gray-600 group-hover:text-black"
          />
        </button>
      </div>
    </div>
  );
}