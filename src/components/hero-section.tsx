"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowRight,
  IconPhone,
  IconUsers,
  IconMapPin,
  IconHeadset,
} from "@tabler/icons-react";

import { OneWayForm } from "./booking-forms/one-way-form";
import { RoundTripFormComponent } from "./booking-forms/round-trip-form";
import { MultiCityFormComponent } from "./booking-forms/multi-city-form";
import { LocalFormComponent } from "./booking-forms/local-form";
import { AirportPickupFormComponent } from "./booking-forms/airport-pickup-form";
import { AirportDropFormComponent } from "./booking-forms/airport-drop-form";
import { TaxiPackageFormComponent } from "./booking-forms/taxi-package-form";
import { HolidayPackageFormComponent } from "./booking-forms/holiday-package-form";
import { cn } from "@/lib/utils";

type MainTab = "cabs" | "taxi" | "holiday";
type CabSubTab =
  | "one-way"
  | "round-trip"
  | "multi-city"
  | "local"
  | "airport-pickup"
  | "airport-drop";

const cabSubTabs: { id: CabSubTab; label: string }[] = [
  { id: "one-way", label: "One Way" },
  { id: "round-trip", label: "Round Trip" },
  { id: "multi-city", label: "Multi City" },
  { id: "local", label: "Local" },
  { id: "airport-pickup", label: "Airport Pickup" },
  { id: "airport-drop", label: "Airport Drop" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ backgroundImage: `url('/home.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

      {/* Design Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              Trusted By Thousands Of Travelers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] font-heading tracking-tight"
            >
              India&apos;s Most Reliable <br className="hidden md:inline" />
              <span className="text-yellow-400">Cab &amp; Holiday</span> Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-medium"
            >
              Book Outstation Cabs, Airport Transfers, Taxi Packages and Holiday Tours Across India with Complete Comfort and Safety.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:-translate-y-0.5"
              >
                Explore Services <IconArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 max-w-lg pt-4"
            >
              {[
                { number: "5000+", label: "Happy Customers", icon: <IconUsers className="text-yellow-400" size={20} /> },
                { number: "100+", label: "Destinations", icon: <IconMapPin className="text-yellow-400" size={20} /> },
                { number: "24x7", label: "Support", icon: <IconHeadset className="text-yellow-400" size={20} /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg hover:border-yellow-400/30 transition-all duration-300"
                >
                  <div className="mb-2 p-1.5 bg-white/5 rounded-xl">{stat.icon}</div>
                  <p className="text-xl md:text-2xl font-black text-white font-heading">{stat.number}</p>
                  <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Booking Widget with Glassmorphism */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              id="booking"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-2.5 rounded-[26px] shadow-2xl"
            >
              <BookingWidget />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const [mainTab, setMainTab] = useState<MainTab>("cabs");
  const [subTab, setSubTab] = useState<CabSubTab>("one-way");

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
      {/* Widget Header */}
      <div className="bg-yellow-400 px-6 py-5">
        <h2 className="text-black font-black text-lg font-heading tracking-tight leading-none">
          Book Your Journey
        </h2>
        <p className="text-black/75 text-xs font-semibold mt-1">
          Fill in details for transparent instant quotes
        </p>
      </div>

      <div className="p-5 bg-white">
        {/* Main Tabs */}
        <div className="flex gap-1 mb-5 bg-gray-50 border border-gray-100 rounded-xl p-1">
          {(
            [
              { id: "cabs", label: "Cabs" },
              { id: "taxi", label: "Taxi Packages" },
              { id: "holiday", label: "Holidays" },
            ] as { id: MainTab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setMainTab(tab.id);
                if (tab.id === "cabs") setSubTab("one-way");
              }}
              className={cn(
                "flex-1 py-2 px-1 rounded-lg text-xs font-bold font-heading transition-all duration-300",
                mainTab === tab.id
                  ? "bg-black text-white shadow-sm"
                  : "text-gray-500 hover:text-black hover:bg-gray-100/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub Tabs for Cabs */}
        {mainTab === "cabs" && (
          <div className="flex flex-wrap gap-1 mb-4 bg-gray-50 p-1 rounded-lg border border-gray-100">
            {cabSubTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id)}
                className={cn(
                  "px-2.5 py-1.5 rounded-md text-[10px] md:text-xs font-bold font-heading transition-all duration-200 flex-1 whitespace-nowrap text-center justify-center flex",
                  subTab === tab.id
                    ? "bg-yellow-400 text-black shadow-sm"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mainTab}-${subTab}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="min-h-[260px]"
          >
            {mainTab === "cabs" && subTab === "one-way" && <OneWayForm />}
            {mainTab === "cabs" && subTab === "round-trip" && (
              <RoundTripFormComponent />
            )}
            {mainTab === "cabs" && subTab === "multi-city" && (
              <MultiCityFormComponent />
            )}
            {mainTab === "cabs" && subTab === "local" && <LocalFormComponent />}
            {mainTab === "cabs" && subTab === "airport-pickup" && (
              <AirportPickupFormComponent />
            )}
            {mainTab === "cabs" && subTab === "airport-drop" && (
              <AirportDropFormComponent />
            )}
            {mainTab === "taxi" && <TaxiPackageFormComponent />}
            {mainTab === "holiday" && <HolidayPackageFormComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}