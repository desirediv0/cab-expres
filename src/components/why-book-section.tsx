import {
  IconCurrencyRupee,
  IconClock24,
  IconShieldCheck,
  IconHeadset,
  IconCar,
  IconMapPin,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconCurrencyRupee,
    title: "Price Transparency",
    desc: "No hidden charges. No surprise fees. What you see is exactly what you pay — every single time.",
  },
  {
    icon: IconClock24,
    title: "24×7 Available",
    desc: "Book anytime, day or night. Our team is always ready to assist you around the clock.",
  },
  {
    icon: IconShieldCheck,
    title: "100% Safe Travel",
    desc: "All drivers are verified and background-checked. GPS-tracked rides and sanitized vehicles guaranteed.",
  },
  {
    icon: IconHeadset,
    title: "Instant Support",
    desc: "Got a question? Reach us instantly via Call or WhatsApp. We respond fast, always.",
  },
  {
    icon: IconCar,
    title: "Premium Fleet",
    desc: "Clean AC sedans, SUVs & luxury vehicles. Every ride is comfortable, stylish and on time.",
  },
  {
    icon: IconMapPin,
    title: "Pan India Service",
    desc: "Serving 500+ cities across India. Wherever you go, CabExpress goes with you.",
  },
];

export function WhyBookSection() {
  return (
    <section className="relative overflow-hidden bg-yellow-400 py-20">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-black/10 text-black/60 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-black/40 rounded-full" />
            India&apos;s Most Trusted Cab Service
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-heading leading-tight">
            Why Book On{" "}
            <span className="relative inline-block">
              CabExpress?
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-black/20 rounded-full" />
            </span>
          </h2>
          <p className="text-black/60 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            We don&apos;t just drive you — we deliver a complete, safe, and
            affordable travel experience that sets us apart from the rest.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 hover:border-white/70 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 flex gap-5 items-start"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-black/10 group-hover:bg-black flex items-center justify-center flex-shrink-0 transition-all duration-300 border-2 border-black/15 group-hover:border-black">
                <feature.icon
                  size={26}
                  className="text-black group-hover:text-yellow-400 transition-colors duration-300"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-black font-bold text-lg mb-2 font-heading leading-tight">
                  {feature.title}
                </h3>
                <p className="text-black/65 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "5000+", label: "Happy Customers" },
              { number: "500+", label: "Cities Covered" },
              { number: "10+", label: "Years of Trust" },
              { number: "₹0", label: "Hidden Charges" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-4xl md:text-5xl font-black text-black font-heading group-hover:scale-110 transition-transform inline-block">
                  {stat.number}
                </p>
                <p className="text-black/70 font-semibold text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
