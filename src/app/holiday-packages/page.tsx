import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HolidayForm } from "@/components/holiday-form";
import { FadeUp, FadeIn } from "@/components/animation-wrappers";

export const metadata: Metadata = {
  title: "Spiritual Packages | CabExpress",
  description:
    "Embark on a transformative journey with our spiritual packages designed to nourish the mind, body, and soul. Guided pilgrimage tours for Varanasi, Vrindavan, Mathura, Badrinath, Kedarnath, and other holy destinations.",
  alternates: {
    canonical: "https://cabexpress.com/holiday-packages",
  },
  openGraph: {
    title: "Spiritual Packages | CabExpress",
    description: "Embark on a transformative journey with our spiritual packages designed to nourish the mind, body, and soul.",
    url: "https://cabexpress.com/holiday-packages",
  },
};

const spiritualDestinations = [
  {
    name: "VARANASI",
    image: "https://images.unsplash.com/photo-1561361060-61992715d97e?w=800&q=80",
    desc: "Experience the divine evening Ganga Aarti on the sacred ghats.",
  },
  {
    name: "VRINDAVAN",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&q=80",
    desc: "Explore the beautiful temples and eternal devotion of Lord Krishna.",
  },
  {
    name: "MATHURA",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80",
    desc: "Visit the holy birthplace of Lord Krishna on the banks of Yamuna.",
  },
  {
    name: "BADRINATH",
    image: "https://images.unsplash.com/photo-1617653265243-7027999d193c?w=800&q=80",
    desc: "Seek blessings at the divine shrine of Lord Vishnu in the Himalayas.",
  },
  {
    name: "KEDARNATH",
    image: "https://images.unsplash.com/photo-1609766857685-7b5c9b1cb71d?w=800&q=80",
    desc: "A sacred journey to the ancient Shiva temple amidst snow peaks.",
  },
  {
    name: "AKSHARDHAM",
    image: "https://images.unsplash.com/photo-1532375811409-905115e3b55d?w=800&q=80",
    desc: "Witness the magnificent architecture and light show in Delhi.",
  },
  {
    name: "AYODHYA",
    image: "https://images.unsplash.com/photo-1668593467406-8c0379051a80?w=800&q=80",
    desc: "Experience the historic Ram Janmabhoomi temple and Saryu Aarti.",
  },
  {
    name: "JWALA JI",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
    desc: "Pay homage to the natural holy flames of Goddess Jwalamukhi.",
  },
  {
    name: "PURI",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80",
    desc: "Witness the sacred Rath Yatra and seek blessings of Lord Jagannath.",
  },
  {
    name: "PRAYGRAJ",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
    desc: "Take a holy dip at the confluence of Ganges, Yamuna, and Saraswati.",
  },
  {
    name: "DWARKA SOMNATH",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800&q=80",
    desc: "Visit the legendary seashore temple and ancient Dwarka city.",
  },
  {
    name: "UJJAIN",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80",
    desc: "Participate in the famous Bhasma Aarti at the Mahakal shrine.",
  },
];

const b2bPartnershipFeatures = [
  {
    num: "01",
    title: "CAR RENTAL SERVICES",
    desc: "Access a modern fleet of Sedans, SUVs, and luxury Tempo Travelers at flat wholesale rates.",
  },
  {
    num: "02",
    title: "100% Trusted Travel Agency",
    desc: "Partner with a decade-long established operator managing regional tours across India.",
  },
  {
    num: "03",
    title: "SAFETY & SECURITY",
    desc: "Real-time GPS tracking, verified chauffeurs, and a dedicated 24x7 customer helpline.",
  },
  {
    num: "04",
    title: "100% SATISFACTION",
    desc: "Tailor-made itineraries and premium stays, keeping guest comfort as our first priority.",
  },
  {
    num: "05",
    title: "Quality Service",
    desc: "Sanitized fleet, punctual airport transfers, and transparent invoice details.",
  },
];

export default function HolidayPackagesPage() {
  return (
    <main className="bg-white min-h-screen pb-16">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white space-y-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Spiritual Journeys
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight">
              Divine Pilgrimages &amp; <br />
              <span className="text-yellow-400">Spiritual Packages</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl font-medium">
              Embark on a soul-stirring tour across India&apos;s most holy cities and shrines. We manage all premium logistics, transports, and stays for your peace of mind.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-4">
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-gray-500 font-sans tracking-wide">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-400">Spiritual Package</span>
        </div>
      </div>

      {/* INTRO DESCRIPTION */}
      <section className="pt-2 pb-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-4">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-neutral-900 tracking-tight text-center md:text-left">
              Spiritual Package
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium text-justify md:text-left">
              Embark on a transformative journey with our spiritual packages designed to nourish the mind, body, and soul. These thoughtfully curated retreats focus on self-discovery, mindfulness, and deep reflection. Enjoy guided meditations, workshops, and holistic practices in serene settings that inspire tranquility and enlightenment. Whether you&apos;re seeking to reconnect with your inner self, embrace new spiritual practices, or simply find peace, our spiritual packages provide the perfect environment for growth and rejuvenation. Join us in a nurturing space where you can explore your spirituality and recharge your spirit.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {spiritualDestinations.map((dest, i) => (
            <FadeIn
              key={dest.name}
              delay={i * 0.03}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-md group border border-gray-250/20"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Dark Overlay which intensifies on hover */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                <h3 className="text-lg md:text-xl font-black font-heading tracking-wide uppercase">
                  {dest.name}
                </h3>

                <div className="h-0 group-hover:h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 mt-1">
                  <p className="text-[11px] text-gray-300 font-semibold leading-normal">
                    {dest.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">
                    Spiritual Tour
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* B2B PARTNER SECTION */}
      <section className="py-16 bg-gray-50/70 border-y border-gray-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center space-y-3 mb-12">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-neutral-900 tracking-tight uppercase">
                Trusted B2B Travel Partner
              </h2>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="text-gray-500 text-xs md:text-sm font-semibold max-w-3xl mx-auto leading-relaxed">
                At CabExpress, we pride ourselves on being a premier tour and travel agency dedicated to crafting unforgettable travel experiences. With years of expertise in the industry, our passionate team of travel specialists designs personalized itineraries that cater to your unique preferences and interests.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {b2bPartnershipFeatures.map((card, i) => (
              <FadeUp
                key={card.title}
                delay={i * 0.05}
                className="bg-white hover:shadow-luxury border border-gray-200/60 hover:border-yellow-400/40 hover:-translate-y-1.5 transition-all duration-300 rounded-[2rem] p-6 flex flex-col justify-start text-left"
              >
                <span className="font-heading font-black text-2xl text-yellow-500 mb-3 block">
                  {card.num}
                </span>
                <h3 className="font-black font-heading text-neutral-900 text-sm tracking-wide leading-snug mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed flex-1">
                  {card.desc}
                </p>
              </FadeUp>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <FadeUp delay={0.3}>
              <Link
                href="#holiday-inquiry"
                className="inline-flex items-center justify-center bg-[#FFC107] hover:bg-neutral-900 text-black hover:text-white font-extrabold px-8 py-3.5 rounded-xl uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-sm active:scale-95"
              >
                Request B2B Pricing
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* HOLIDAY INQUIRY CTA */}
      <section id="holiday-inquiry" className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeUp className="bg-gradient-to-r from-yellow-450 via-yellow-400 to-amber-400 rounded-[32px] overflow-hidden p-6 md:p-10 shadow-2xl border border-yellow-500 relative">
            {/* Shapes overlays */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 left-10 w-[150px] h-[150px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-2 text-black">
                <span className="text-[10px] font-black uppercase tracking-widest bg-black/10 px-4 py-1.5 rounded-full border border-black/10">
                  Custom Planner
                </span>
                <h2 className="text-2xl md:text-3xl font-black font-heading leading-none">Plan Your Custom Holiday</h2>
                <p className="text-black/85 text-xs md:text-sm font-semibold max-w-md mx-auto">
                  Provide your group details and preferred tour length. Our designers will map out your route.
                </p>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-gray-900 border border-gray-150">
                <HolidayForm />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}