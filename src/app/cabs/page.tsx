import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, FadeIn } from "@/components/animation-wrappers";
import { CabForm } from "@/components/cab-form";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Car Rentals & Cabs | CabExpress",
  description:
    "Book premium sedans, SUVs, luxury tempo travelers, and coaches across India with CabExpress. Flat-rate B2B car rentals available in Lucknow, Varanasi, Agra, Delhi NCR, Chandigarh, and Ayodhya.",
  alternates: {
    canonical: "https://cabexpress.com/cabs",
  },
  openGraph: {
    title: "Car Rentals & Cabs | CabExpress",
    description: "Book premium sedans, SUVs, tempo travelers, and coaches across India. B2B car rentals available at flat-rates.",
    url: "https://cabexpress.com/cabs",
  },
};

const vehicles = [
  {
    name: "SEDAN",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
    query: "Sedan",
    specs: "4 Passengers | 2 Bags | AC",
  },
  {
    name: "7 SEATER",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    query: "7 Seater",
    specs: "6 Passengers | 4 Bags | AC",
  },
  {
    name: "26 SEATER",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    query: "26 Seater",
    specs: "26 Passengers | Large Coach | AC",
  },
  {
    name: "17 SEATER",
    image: "https://images.unsplash.com/photo-1562620669-979148d28dbd?w=800&q=80",
    query: "17 Seater",
    specs: "17 Passengers | 15 Bags | AC",
  },
  {
    name: "LUXURY URBANIA",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&q=80",
    query: "Luxury Urbania",
    specs: "17 Passengers | Super Luxury Fit | AC",
  },
  {
    name: "MAHARAJA 12/15 SEATER",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    query: "Maharaja 12/15 Seater",
    specs: "12-15 Passengers | Premium Pushback | AC",
  },
  {
    name: "12 SEATER",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80",
    query: "12 Seater",
    specs: "12 Passengers | Standard Van | AC",
  },
  {
    name: "20 SEATER",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    query: "20 Seater",
    specs: "20 Passengers | Medium Coach | AC",
  },
];

const b2bCities = [
  {
    name: "Lucknow",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
  },
  {
    name: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361060-61992715d97e?w=600&q=80",
  },
  {
    name: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
  },
  {
    name: "DELHI NCR (NOIDA)",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
  },
  {
    name: "Chandigarh",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
  },
  {
    name: "Ayodhya",
    image: "https://images.unsplash.com/photo-1668593467406-8c0379051a80?w=600&q=80",
  },
];

export default function CabsPage() {
  return (
    <main className="bg-white min-h-screen pb-16">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white space-y-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Premium Fleet
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight">
              Premium Fleet &amp; <br />
              <span className="text-yellow-400">Car Rentals</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl font-medium">
              Choose from our diverse range of sanitized Sedans, spacious SUVs, and luxury Tempo Travelers for a comfortable journey across India.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-4">
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-gray-500 font-sans tracking-wide">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-400">Car Rentals</span>
        </div>
      </div>

      {/* PAGE HEADER */}
      <section className="pt-2 pb-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-4">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-neutral-900 tracking-tight text-center md:text-left">
              Car Rentals
            </h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium text-justify md:text-left">
              At CabExpress, we provide a seamless and convenient car rental experience tailored to meet your travel needs. Whether you&apos;re planning a road trip, a business trip, or simply need a vehicle for local errands, we have a diverse fleet of well-maintained cars to choose from.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* VEHICLES GRID */}
      <section className="pb-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((veh, i) => (
            <FadeIn key={veh.name} delay={i * 0.03} className="h-full">
              <div
                className="group flex flex-col h-full bg-white border border-gray-200/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-luxury hover:border-[#FFC107]/30 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
                  <Image
                    src={veh.image}
                    alt={veh.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between items-center text-center space-y-4 bg-white">
                  <div className="space-y-1.5">
                    <h3 className="font-black font-heading text-neutral-900 text-base md:text-lg tracking-wide leading-snug uppercase group-hover:text-yellow-600 transition-colors duration-200">
                      {veh.name}
                    </h3>
                    <p className="text-gray-400 text-[11px] md:text-xs font-bold tracking-tight uppercase">
                      {veh.specs}
                    </p>
                  </div>

                  <Link
                    href={`/contact?vehicle=${encodeURIComponent(veh.query)}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#FFC107] hover:bg-neutral-900 text-neutral-950 hover:text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-sm w-full active:scale-95"
                  >
                    Enquire Now <IconArrowRight size={13} className="flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* B2B CITIES SECTION */}
      <section className="py-16 bg-gray-50/50 border-y border-gray-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center space-y-3 mb-12">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-black font-heading text-neutral-900 tracking-tight uppercase">
                B2B CAR RENTAL AVAILABLE FROM THE CITY
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {b2bCities.map((city, i) => (
              <FadeIn key={city.name} delay={i * 0.04} className="h-full">
                <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-md border border-gray-200/40 bg-gray-150 group">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                  {/* Dark Overlay which intensifies on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end items-center text-center">
                    <h3 className="text-white font-black font-heading text-xs md:text-sm tracking-widest leading-tight uppercase">
                      {city.name}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <FadeUp delay={0.25}>
              <Link
                href="/contact?subject=B2B Partnership"
                className="inline-flex items-center justify-center bg-[#FFC107] hover:bg-neutral-900 text-black hover:text-white font-extrabold px-8 py-3.5 rounded-xl uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-sm active:scale-95"
              >
                Start Your B2B Partnership
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAB INQUIRY CTA */}
      <section id="cab-inquiry" className="py-14 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeUp className="bg-black rounded-[32px] overflow-hidden p-6 md:p-10 shadow-2xl border border-neutral-900 relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-2 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest bg-yellow-400/10 text-yellow-400 px-4 py-1.5 rounded-full border border-yellow-400/10">
                  Instant Inquiry
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading">Send a Cab Inquiry</h2>
                <p className="text-gray-400 text-xs md:text-sm font-semibold max-w-md mx-auto">
                  Fill in your details below and our team will get back to you with custom quotes shortly.
                </p>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-gray-900 border border-gray-150">
                <CabForm />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}