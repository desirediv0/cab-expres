import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cabexpress.com"),
  title: {
    default: "CabExpress | Travel Smarter. Travel Safer.",
    template: "%s | CabExpress",
  },
  description:
    "Book Cabs, Taxi Packages & Holiday Tours Across India. Reliable Cab Services, Outstation Trips, Airport Transfers and Holiday Packages at Affordable Prices.",
  keywords: [
    "cab booking",
    "taxi service",
    "holiday packages",
    "airport transfer",
    "india travel",
    "outstation cab",
    "one way cab",
    "round trip cab",
  ],
  authors: [{ name: "CabExpress" }],
  creator: "CabExpress",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cabexpress.com",
    siteName: "CabExpress",
    title: "CabExpress | Travel Smarter. Travel Safer.",
    description:
      "Book Cabs, Taxi Packages & Holiday Tours Across India. Reliable Cab Services at Affordable Prices.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CabExpress - Travel Smarter. Travel Safer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CabExpress | Travel Smarter. Travel Safer.",
    description: "Book Cabs, Taxi Packages & Holiday Tours Across India.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, outfit.variable)}>
      <body className={cn("antialiased bg-white text-gray-900 font-sans")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cabexpress.com/#organization",
                  "name": "CabExpress",
                  "url": "https://cabexpress.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://cabexpress.com/#logo",
                    "url": "https://cabexpress.com/images/logo.png",
                    "caption": "CabExpress"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cabexpress.com/#website",
                  "url": "https://cabexpress.com",
                  "name": "CabExpress",
                  "description": "Book outstation cabs, airport transfers, local taxi rentals, and customized holiday tour packages across India.",
                  "publisher": {
                    "@id": "https://cabexpress.com/#organization"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://cabexpress.com/#localbusiness",
                  "name": "CabExpress Taxi & Travel Services",
                  "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
                  "telephone": "+919643902980",
                  "email": "support@cabexpress.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Tower 5, 316, Grand Iva Signature Global Sector 103",
                    "addressLocality": "Gurgaon",
                    "addressRegion": "Haryana",
                    "postalCode": "122006",
                    "addressCountry": "IN"
                  },
                  "priceRange": "$$",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                }
              ]
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
