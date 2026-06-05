import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconShield,
  IconCurrencyRupee,
  IconLeaf,
  IconUsers,
  IconMapPin,
  IconHeadset,
  IconTarget,
  IconEye,
  IconBriefcase,
} from "@tabler/icons-react";

import { Counter } from "@/components/counter";
import { FadeUp, FadeIn } from "@/components/animation-wrappers";

export const metadata: Metadata = {
  title: "About CabExpress | Trusted Travel Partner",
  description:
    "Learn about CabExpress, India's trusted travel and cab service partner. Discover our journey, mission, vision, and why thousands choose us for safe, reliable travel.",
  alternates: {
    canonical: "https://cabexpress.com/about",
  },
  openGraph: {
    title: "About CabExpress | Trusted Travel Partner",
    description: "Learn about CabExpress, India's trusted travel and cab service partner. Discover our journey, mission, and vision.",
    url: "https://cabexpress.com/about",
  },
};

const chooseUsData = [
  { icon: <IconShield className="text-yellow-600 w-7 h-7" />, title: "Safety First", desc: "Verified drivers, real-time GPS tracking, and SOS features for every journey." },
  { icon: <IconCurrencyRupee className="text-yellow-600 w-7 h-7" />, title: "Transparent Pricing", desc: "No hidden charges, zero surprise tolls, and best rates guaranteed." },
  { icon: <IconLeaf className="text-yellow-600 w-7 h-7" />, title: "Sanitized Fleet", desc: "Well-maintained, clean, and sanitized vehicles for a hygienic ride." },
  { icon: <IconUsers className="text-yellow-600 w-7 h-7" />, title: "Professional Drivers", desc: "Experienced, polite, and background-verified drivers for outstation routes." },
  { icon: <IconHeadset className="text-yellow-600 w-7 h-7" />, title: "24x7 Support", desc: "Active round-the-clock emergency support for absolute peace of mind." },
  { icon: <IconBriefcase className="text-yellow-600 w-7 h-7" />, title: "Easy Bookings", desc: "Instant bookings, easy schedules, and flexible cancellation terms." },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION (70vh) */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-8 space-y-6 text-white">
              <FadeUp>
                <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  About CabExpress
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight">
                  India&apos;s Trusted Travel &amp; <br />
                  <span className="text-yellow-400">Cab Service</span> Partner
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium">
                  Making travel comfortable, safe, and reliable. Book outstation cabs, local rentals, and customize tours across major Indian destinations.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/cabs"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </FadeUp>
            </div>

            {/* Hero Right Floating Stats (Desktop Only) */}
            <div className="hidden lg:col-span-4 lg:flex flex-col gap-4">
              {[
                { number: "5000+", label: "Happy Customers", icon: <IconUsers size={22} className="text-yellow-400" /> },
                { number: "100+", label: "Destinations", icon: <IconMapPin size={22} className="text-yellow-400" /> },
                { number: "24/7", label: "Support Desk", icon: <IconHeadset size={22} className="text-yellow-400" /> },
              ].map((stat, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 0.1 + 0.3}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4 shadow-xl"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">{stat.icon}</div>
                  <div>
                    <h3 className="text-white text-xl font-black font-heading leading-tight">{stat.number}</h3>
                    <p className="text-gray-300 text-xs mt-0.5">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY SECTION */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Image */}
            <FadeIn className="relative h-[340px] md:h-[460px] rounded-[32px] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&q=80"
                alt="Our Company Journey"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </FadeIn>

            {/* Right Story Content */}
            <FadeUp className="space-y-5">
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading leading-tight">
                Crafting Premium Travel Experiences
              </h2>
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  Founded with a vision to streamline intermediate transportation in India, CabExpress has grown from a local taxi operator into a premium travel network connecting hundreds of destinations.
                </p>
                <p>
                  We understand that journeys are about comfort and trust. That is why we invest in background-checking drivers, maintaining a pristine fleet of vehicles, and establishing transparent flat-rate models for outstation routes.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-14 md:py-16 bg-gray-50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <FadeUp className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:border-yellow-400 shadow-sm hover:shadow-xl transition-all duration-300 group flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                <IconTarget size={30} className="text-yellow-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 font-heading">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  To provide reliable, safe, and transparent travel logistics that allow families, business clients, and pilgrims to travel across India in complete comfort.
                </p>
              </div>
            </FadeUp>

            {/* Vision */}
            <FadeUp className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 hover:border-yellow-400 shadow-sm hover:shadow-xl transition-all duration-300 group flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                <IconEye size={30} className="text-yellow-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 font-heading">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  To set the benchmark for luxury cab logistics and curated holiday packaging in India, building a reputation rooted in punctuality and driver integrity.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CABEXPRESS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Why Us
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Why Choose CabExpress
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                We focus on premium comfort, verified safety protocols, and absolute transparency.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chooseUsData.map((item, i) => (
              <FadeUp
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200/65 shadow-sm hover:shadow-lg hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300 flex flex-col group h-full"
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-yellow-400/10 flex items-center justify-center mb-5 transition-colors border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY STATS (Animated Counters) */}
      <section className="py-14 md:py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.02),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "5000+", label: "Happy Customers", desc: "Trips completed successfully" },
              { value: "100+", label: "Destinations", desc: "Connected Indian cities" },
              { value: "500+", label: "Vehicles", desc: "Total certified fleet size" },
              { value: "24/7", label: "Support", desc: "Emergency support online" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-neutral-900/60 backdrop-blur-md border border-neutral-850 rounded-2xl p-5 hover:border-yellow-400/40 transition-colors duration-300"
              >
                <p className="text-3xl md:text-4xl font-black text-yellow-400 font-heading">
                  <Counter value={stat.value} />
                </p>
                <p className="text-white font-bold text-xs md:text-sm mt-1">{stat.label}</p>
                <p className="text-gray-500 text-[10px] mt-0.5">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="py-14 md:py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading leading-tight">
            Ready To Travel With Us?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Plan your next journey with CabExpress outstation services or customize a vacation package.
          </p>
          <div className="pt-2">
            <Link
              href="/#booking"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
            >
              Book Your Journey <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}