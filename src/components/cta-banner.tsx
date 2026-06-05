import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function CTABanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 p-10 md:p-16 text-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <p className="text-black/60 font-medium text-sm mb-3 uppercase tracking-widest">
          Your Journey Awaits
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 font-heading leading-tight">
          Ready For Your <br /> Next Journey?
        </h2>
        <p className="text-black/70 text-base mb-8 max-w-md mx-auto">
          Book now and experience India&apos;s most reliable cab and holiday
          package service. Over 5000+ happy customers trust us.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Ride <IconArrowRight size={18} />
          </Link>
          <a
            href="tel:+919643902980"
            className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm text-black font-semibold px-8 py-4 rounded-xl hover:bg-white/50 transition-all duration-200 border border-black/10"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
}