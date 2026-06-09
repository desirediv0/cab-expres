import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconShieldCheck,
  IconCurrencyRupee,
  IconLock,
  IconBolt,
  IconCar,
  IconHeadset,
  IconRoute,
  IconPlaneDeparture,
  IconBuildingSkyscraper,
  IconGlobe,
  IconFileText,
  IconUsers,
  IconMapPin,
} from "@tabler/icons-react";

import { HeroSection } from "@/components/hero-section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ClientsCarousel } from "@/components/clients-carousel";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { PartnerCtaSection } from "@/components/partner-cta-section";;
import { FadeUp, FadeIn } from "@/components/animation-wrappers";
import AboutSection3 from "@/components/ui/about-section";
import StatsCollageSection from "@/components/ui/hero-section-9";

export const metadata: Metadata = {
  title: "CabExpress | Cab Booking, Taxi Services & Holiday Packages",
  description:
    "Book outstation cabs, airport transfers, local taxi rentals, and customized holiday tour packages across India. Punctual, safe, and transparent luxury travel with CabExpress.",
  alternates: {
    canonical: "https://cabexpress.com",
  },
  openGraph: {
    title: "CabExpress | Cab Booking, Taxi Services & Holiday Packages",
    description: "Book outstation cabs, airport transfers, local taxi rentals, and customized holiday tour packages across India. Punctual, safe, and transparent luxury travel.",
    url: "https://cabexpress.com",
  },
};

const trustCards = [
  { icon: <IconShieldCheck className="w-7 h-7 text-yellow-600" />, title: "Verified Drivers", desc: "Background-checked, experienced, and highly professional chauffeurs for your safety." },
  { icon: <IconCurrencyRupee className="w-7 h-7 text-yellow-600" />, title: "Transparent Pricing", desc: "No hidden charges, zero surprise tolls, and best rates guaranteed upfront." },
  { icon: <IconLock className="w-7 h-7 text-yellow-600" />, title: "Safe Travel", desc: "GPS tracking, real-time safety alerts, and sanitized luxury fleets." },
  { icon: <IconBolt className="w-7 h-7 text-yellow-600" />, title: "Instant Booking", desc: "Get booking confirmation within minutes via SMS and email notifications." },
  { icon: <IconCar className="w-7 h-7 text-yellow-600" />, title: "Luxury Vehicles", desc: "Premium Sedans, spacious SUVs, and Luxury Coaches in perfect condition." },
  { icon: <IconHeadset className="w-7 h-7 text-yellow-600" />, title: "24x7 Support", desc: "Dedicated round-the-clock support for any travel adjustments or queries." },
];

const popularServices = [
  { title: "One Way Cab", icon: <IconCar size={22} />, desc: "Fast, affordable, one-way transfers to any outstation city.", img: "/on-way-cab.jpg", tag: "Flat Fare" },
  { title: "Round Trip", icon: <IconRoute size={22} />, desc: "Intercity round trips with comfortable multi-day packages.", img: "/round-trip.jpg", tag: "Best Value" },
  { title: "Airport Transfer", icon: <IconPlaneDeparture size={22} />, desc: "Punctual, stress-free airport pick and drop services.", img: "/airport-transfer.jpg", tag: "24/7 Service" },
  { title: "Local Rental", icon: <IconBuildingSkyscraper size={22} />, desc: "Sightseeing and hourly local rentals in top Indian metros.", img: "/local-rental.jpg", tag: "Hourly Rates" },
  { title: "Taxi Packages", icon: <IconCurrencyRupee size={22} />, desc: "Tailor-made itineraries for pilgrim paths and family tours.", img: "/taxi-packages.jpg", tag: "Pilgrim Specials" },
  { title: "Holiday Packages", icon: <IconGlobe size={22} />, desc: "Premium tour packages with stay, meals, and luxury cabs.", img: "/holiday-packages.jpg", tag: "Curated Tours" },
];

const destinations = [
  { name: "Delhi", desc: "Capital city blend of history & modern culture", img: "/delhi.jpg" },
  { name: "Agra", desc: "Home of Taj Mahal, the monument of eternal love", img: "/agra.jpg" },
  { name: "Jaipur", desc: "The pink city with royal heritage & palaces", img: "/jaipur.jpg" },
  { name: "Rishikesh", desc: "Spiritual yoga capital on the banks of Ganges", img: "/rishikesh.jpg" },
  { name: "Haridwar", desc: "Holy ghats and beautiful evening Ganga Aarti", img: "/haridwar.jpg" },
  { name: "Shimla", desc: "Scenic mountain peaks and colonial history", img: "/shimla.jpg" },
  { name: "Manali", desc: "Adventure sports & breathtaking snowy valleys", img: "/manali.jpg" },
  { name: "Kashmir", desc: "Heaven on Earth with lakes & valley orchards", img: "/kashmir.jpg" },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* SECTION 1: PREMIUM HERO */}
      <HeroSection />

      {/* PARTNERS AUTO-SCROLL MARQUEE */}
      <ClientsCarousel />

      {/* SECTION 2: TRUST SECTION */}
      <section className="py-14 md:py-16 bg-gray-50 border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Trust &amp; Quality
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Why Thousands Trust CabExpress
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                We focus on premium comfort, verified safety protocols, and absolute transparency.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustCards.map((card, i) => (
              <FadeUp
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-yellow-400/10 flex items-center justify-center mb-5 transition-colors duration-300 border border-gray-100">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{card.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT PREVIEW */}
      <AboutSection3 />

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-16 md:py-20 bg-gray-50/70 border-y border-gray-150 relative overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full border border-yellow-400/10">
                Our Fleet Services
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight font-heading leading-tight">
                Premium Services We Offer
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm md:text-base font-semibold max-w-lg mx-auto">
                Flat-rate local and outstation taxi routes. Fully customizable journeys with professional chauffeurs.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {popularServices.map((service, i) => (
              <FadeUp
                key={i}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-200/50 shadow-sm hover:shadow-luxury hover:border-[#FFC107]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full relative"
              >
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between items-center text-center space-y-5 bg-white">
                  <div className="space-y-2">
                    <span className="text-yellow-600 font-black tracking-widest text-[10px] uppercase block">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-black text-neutral-900 font-heading leading-tight group-hover:text-yellow-600 transition-colors duration-200 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-semibold">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    href={service.title === "Holiday Packages" ? "/holiday-packages" : "/cabs"}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#FFC107] hover:bg-neutral-900 text-neutral-950 hover:text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-sm w-full active:scale-95"
                  >
                    Explore Now <IconArrowRight size={13} className="flex-shrink-0" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DESTINATIONS PREVIEW */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Featured Places
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Top Visited Destinations
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                Custom tours and round-trips regularly scheduled for these Indian cities.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {destinations.map((dest, i) => (
              <FadeIn
                key={i}
                delay={i * 0.05}
                className="relative h-60 md:h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Dark Overlay which intensifies on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold font-heading">{dest.name}</h3>

                  <div className="h-0 group-hover:h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 mt-1">
                    <p className="text-[11px] text-gray-300 font-medium leading-normal">{dest.desc}</p>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Explore</span>
                    <IconArrowRight size={14} className="text-yellow-400" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="py-14 md:py-16 bg-gray-50 border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                How it works
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Book Your Ride In 4 Easy Steps
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                Simple, digital process for hassle-free bookings.
              </p>
            </FadeUp>
          </div>

          <div className="relative max-w-5xl mx-auto pt-4">
            {/* Connecting lines for desktop (horizontal) */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10 text-center">
              {[
                { step: "01", title: "Select Service", icon: <IconCar size={22} />, desc: "Choose your travel tab (cabs, taxi packages, or holidays) and specify details." },
                { step: "02", title: "Submit Booking", icon: <IconFileText size={22} />, desc: "Complete the fields inside the form and submit your request." },
                { step: "03", title: "Confirm Ride", icon: <IconBolt size={22} />, desc: "Our staff checks schedules and sends prompt confirmation." },
                { step: "04", title: "Travel Comfortably", icon: <IconGlobe size={22} />, desc: "Enjoy your punctual journey with sanitized luxury cars." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center space-y-3 group">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 group-hover:border-yellow-400 group-hover:text-black transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-black text-[10px] font-black w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading pt-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm max-w-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US (STATS SECTION) */}
      <StatsCollageSection
        badge="Excellence In Figures"
        title="Luxury Feature Section"
        subtitle="With a decade of serving travelers, our track record represents reliability. We connect cities, manage logistics, and enable comfortable spiritual tours across the nation."
        description="Each transaction generates Brevo validation notifications to coordinate schedules instantly."
        stats={[
          { value: "5000+", label: "Happy Customers", icon: <IconUsers size={20} /> },
          { value: "100+", label: "Destinations", icon: <IconMapPin size={20} /> },
          { value: "500+", label: "Vehicles", icon: <IconCar size={20} /> },
          { value: "24/7", label: "Support Desk", icon: <IconHeadset size={20} /> },
        ]}
        images={[
          "/on-way-cab.jpg",
          "/airport-transfer.jpg",
          "/round-trip.jpg",
        ]}
      />

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Reviews
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                What Our Customers Say
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                Over 5000 happy travelers trust CabExpress. Read their feedback.
              </p>
            </FadeUp>
          </div>

          <div className="max-w-6xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* SECTION 9: PARTNER CTA */}
      <PartnerCtaSection />

      {/* SECTION 10: FAQ SECTION */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Faq
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Frequently Asked Questions
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                Find instant answers to common travel booking concerns.
              </p>
            </FadeUp>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="q1" className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base py-4 hover:no-underline">How do I book a cab?</AccordionTrigger>
                <AccordionContent>
                  Booking is simple. Use our web widget on the top of this page, select your travel type (One Way, Round Trip, local rental etc.), fill out your coordinates, and submit. Our staff checks schedules and sends prompt confirmation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base py-4 hover:no-underline">How can I contact support?</AccordionTrigger>
                <AccordionContent>
                  Our customer service operates 24x7. You can dial +91 96439 02980 or +91 87967 82980 directly, email us at support@cabexpress.com or hit the WhatsApp chat shortcut links.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base py-4 hover:no-underline">Do you provide airport transfers?</AccordionTrigger>
                <AccordionContent>
                  Yes, airport pickup and drop solutions are available. We operate dedicated schedules at all commercial airport terminals in major cities across India.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base py-4 hover:no-underline">Are drivers verified?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Every chauffeur operating under our brand goes through background validation, commercial license checks, and continuous professional driving training.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base py-4 hover:no-underline">Can I book holiday packages?</AccordionTrigger>
                <AccordionContent>
                  Yes! We provide complete pre-planned and customized holiday routes including Kedarnath temple pilgrimage tours, Golden Triangle, Himachal trails and Kashmir getaways.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-14 md:py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.02),transparent)]" />
        {/* Floating shape elements */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight leading-tight">
            Ready For Your Next Journey?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Book Reliable Cabs And Travel Across India With Complete Peace Of Mind.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Link
              href="#booking"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 hover:-translate-y-0.5"
            >
              Book Ride
            </Link>
            <Link
              href="/contact"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-850 hover:border-yellow-400 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETE REDESIGN: TOP BANNER SECTION */}
      <section className="bg-black text-white py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold font-heading">Let&apos;s Plan Your Next Journey</h3>
              <p className="text-gray-400 text-xs md:text-sm font-semibold">Talk to our travel experts for tailored quotes.</p>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md text-xs uppercase tracking-wider whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}