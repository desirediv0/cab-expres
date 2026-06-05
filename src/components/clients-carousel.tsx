"use client";

const partners = [
  { name: "MakeMyTrip", code: "MMT" },
  { name: "Cleartrip", code: "CT" },
  { name: "IndiGo", code: "6E" },
  { name: "Booking.com", code: "BK" },
  { name: "Agoda", code: "AG" },
  { name: "Airbnb", code: "AB" },
  { name: "Vistara", code: "UK" },
  { name: "Yatra", code: "YT" },
  { name: "EaseMyTrip", code: "EMT" },
  { name: "Expedia", code: "EX" },
  { name: "Thomas Cook", code: "TC" },
  { name: "Club Mahindra", code: "CM" },
];

export function ClientsCarousel() {
  // Duplicate for infinite marquee
  const row1 = [...partners, ...partners];
  const row2 = [...partners].reverse().concat([...partners].reverse());

  return (
    <section className="py-14 md:py-16 bg-white overflow-hidden border-b border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
          PARTNERS
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mt-3 tracking-tight">
          Trusted By Travel Partners Across India
        </h2>
        <div className="h-1 w-16 bg-yellow-400 rounded-full mx-auto mt-4" />
      </div>

      <div className="relative space-y-4">
        {/* Row 1 (Desktop + Mobile) */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-4 py-1">
            {row1.map((partner, i) => (
              <div
                key={`r1-${i}`}
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg rounded-2xl px-6 py-3.5 transition-all duration-300 cursor-pointer select-none"
                style={{ minWidth: "170px" }}
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-600 flex items-center justify-center font-black text-xs">
                  {partner.code}
                </div>
                <span className="text-sm font-bold text-gray-800 font-heading">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Hidden on Mobile, Visible on Desktop) */}
        <div className="relative hidden md:flex overflow-x-hidden">
          <div className="animate-marquee-reverse flex whitespace-nowrap gap-4 py-1">
            {row2.map((partner, i) => (
              <div
                key={`r2-${i}`}
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-lg rounded-2xl px-6 py-3.5 transition-all duration-300 cursor-pointer select-none"
                style={{ minWidth: "170px" }}
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-400/10 text-yellow-600 flex items-center justify-center font-black text-xs">
                  {partner.code}
                </div>
                <span className="text-sm font-bold text-gray-800 font-heading">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
