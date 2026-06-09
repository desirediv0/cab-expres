import { Metadata } from "next";
import { Suspense } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconHeadset,
  IconBrandWhatsapp,
  IconArrowRight,
} from "@tabler/icons-react";

import { ContactForm } from "@/components/contact-form";
import { FadeUp, FadeIn } from "@/components/animation-wrappers";

export const metadata: Metadata = {
  title: "Contact Us | CabExpress",
  description:
    "Get in touch with CabExpress for bookings, customer support, and travel planning questions. Available 24/7 via call, WhatsApp, and online inquiry form.",
  alternates: {
    canonical: "https://cabexpress.com/contact",
  },
  openGraph: {
    title: "Contact Us | CabExpress",
    description: "Get in touch with CabExpress for bookings, customer support, and travel planning questions. Available 24/7.",
    url: "https://cabexpress.com/contact",
  },
};

const contactDetails = [
  {
    icon: <IconPhone size={28} className="text-yellow-600 group-hover:text-black transition-colors" />,
    title: "Phone Support",
    details: ["+91 96439 02980", "+91 87967 82980"],
    href: "tel:+919643902980",
    description: "Call us 24x7 for quick reservations & emergency support.",
  },
  {
    icon: <IconMail size={28} className="text-yellow-600 group-hover:text-black transition-colors" />,
    title: "Email Queries",
    details: ["support@cabexpress.com", "support@cabexpress.com"],
    href: "mailto:support@cabexpress.com",
    description: "Drop us an email. We reply to all inquiries within 2 hours.",
  },
  {
    icon: <IconMapPin size={28} className="text-yellow-600 group-hover:text-black transition-colors" />,
    title: "Headquarters",
    details: ["Tower 5, 316, Grand Iva", "Signature Global Sector 103, Gurgaon"],
    href: "#",
    description: "Serving all major Indian airports, hill stations, and metros.",
  },
  {
    icon: <IconHeadset size={28} className="text-yellow-600 group-hover:text-black transition-colors" />,
    title: "Trip Desk",
    details: ["Active Ride Support", "Whatsapp Chat Line"],
    href: "https://wa.me/919643902980",
    description: "Specialized team to coordinate ongoing trips & schedules.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION (70vh) */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 text-white">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Contact CabExpress
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight">
                India&apos;s Dedicated <br />
                <span className="text-yellow-400">Travel Desk</span> 24x7
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-gray-300 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                Have questions regarding cab bookings, customized tourist packages, or group itineraries? Contact our support staff anytime for direct, flat-rate quotes.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION CARDS */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <FadeUp>
              <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                Get In Touch
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
                Contact Channels
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-gray-500 text-sm font-medium">
                Connect with our team via the most convenient communication channel.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05} className="h-full">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-yellow-400/40 transition-all duration-300 flex flex-col items-center text-center h-full hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 group-hover:bg-yellow-400 flex items-center justify-center mb-5 transition-colors duration-300 border border-yellow-400/5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-heading">
                    {item.title}
                  </h3>
                  <div className="space-y-0.5 mb-3 flex-1 flex flex-col justify-center">
                    {item.details.map((d) => (
                      <p key={d} className="text-gray-800 text-sm font-bold tracking-tight">
                        {d}
                      </p>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs font-semibold leading-normal border-t border-gray-100 pt-3 mt-1 w-full">
                    {item.description}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="py-14 md:py-16 bg-gray-50 border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-6 space-y-6">
              <FadeUp>
                <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                  Quick Query
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3 mb-2">
                  Send Us A Message
                </h2>
                <p className="text-gray-500 text-sm font-medium mb-6">
                  Complete the inquiry form below and our staff will reply within 2 hours.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                {/* Wrapped in a beautiful container styling */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/80 shadow-md">
                  <Suspense fallback={<div className="p-8 text-center text-gray-500 font-semibold">Loading Form...</div>}>
                    <ContactForm />
                  </Suspense>
                </div>
              </FadeUp>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-32">
              <FadeUp>
                <span className="text-xs font-extrabold text-yellow-600 uppercase tracking-widest bg-yellow-400/10 px-4 py-1.5 rounded-full">
                  Our Base
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 font-heading mt-3 mb-2">
                  Locate Us On Map
                </h2>
                <p className="text-gray-500 text-sm font-medium mb-6">
                  We coordinate intermediate cab routes and pilgrim packages nationwide from our Delhi desk.
                </p>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="rounded-[32px] overflow-hidden shadow-md border border-gray-200/80 h-[360px] md:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95099840414!2d76.76357457498887!3d28.644287356958985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CabExpress Office Location Map"
                  />
                </div>

                {/* Quick actions row */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <a
                    href="tel:+919643902980"
                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <IconPhone size={16} /> Call Hotline
                  </a>
                  <a
                    href="https://wa.me/919643902980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <IconBrandWhatsapp size={16} /> Chat WhatsApp
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-14 md:py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.02),transparent)]" />
        <div className="absolute top-10 left-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight leading-tight">
            Need Help Planning Your Journey?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Our trip planning executives are standing by to prepare custom routes and vehicle allocations. Contact us now.
          </p>
          <div className="pt-2">
            <a
              href="tel:+919643902980"
              className="inline-flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Call Us Today <IconArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}