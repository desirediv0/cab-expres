"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconCar,
  IconArrowRight,
  IconHeadset,
} from "@tabler/icons-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cabs", label: "Cabs" },
  { href: "/holiday-packages", label: "Holiday Packages" },
  { href: "/contact", label: "Contact" },
];

const popularServices = [
  { label: "One Way Cab", href: "/cabs" },
  { label: "Round Trip Cab", href: "/cabs" },
  { label: "Airport Pickup", href: "/cabs" },
  { label: "Airport Drop", href: "/cabs" },
  { label: "Taxi Packages", href: "/cabs" },
  { label: "Holiday Packages", href: "/holiday-packages" },
];

const socialLinks = [
  { icon: IconBrandWhatsapp, href: "https://wa.me/919643902980", label: "WhatsApp", color: "hover:text-green-500" },
  { icon: IconBrandFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-500" },
  { icon: IconBrandInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
  { icon: IconBrandTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
  { icon: IconBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-700" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-400/10 font-heading">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/10 group-hover:scale-105 transition-transform duration-300">
                <IconCar size={24} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight leading-none">
                  Cab<span className="text-yellow-400">Express</span>
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-0.5 leading-none">
                  Luxury Travel
                </span>
              </div>
            </Link>
            <p className="text-gray-450 text-sm leading-relaxed max-w-sm font-medium">
              CabExpress is your trusted travel partner for outstation cabs,
              airport transfers, taxi packages and holiday tours across India.
            </p>
            {/* Social Icons with Hover Animations */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-yellow-400 flex items-center justify-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 font-extrabold text-[15px] uppercase tracking-widest relative w-fit">
              Quick Links
              <span className="absolute -bottom-2.5 left-0 w-8 h-[2px] bg-yellow-400 rounded-full" />
            </h4>
            <ul className="space-y-4 pt-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-405 hover:text-yellow-400 text-sm transition-all duration-300 group"
                  >
                    <IconArrowRight
                      size={14}
                      className="text-yellow-400/50 group-hover:translate-x-1 group-hover:text-yellow-400 transition-all"
                    />
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 font-extrabold text-[15px] uppercase tracking-widest relative w-fit">
              Services
              <span className="absolute -bottom-2.5 left-0 w-8 h-[2px] bg-yellow-400 rounded-full" />
            </h4>
            <ul className="space-y-4 pt-3">
              {popularServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-gray-455 hover:text-yellow-400 text-sm transition-all duration-300 group"
                  >
                    <IconArrowRight
                      size={14}
                      className="text-yellow-400/50 group-hover:translate-x-1 group-hover:text-yellow-400 transition-all"
                    />
                    <span className="font-semibold">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-yellow-400 font-extrabold text-[15px] uppercase tracking-widest relative w-fit">
              Contact Details
              <span className="absolute -bottom-2.5 left-0 w-8 h-[2px] bg-yellow-400 rounded-full" />
            </h4>
            <ul className="space-y-4 pt-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 transition-colors duration-300">
                  <IconPhone size={15} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-650 uppercase tracking-wider">Phone</p>
                  <div className="flex flex-col">
                    <a href="tel:+919643902980" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
                      +91 96439 02980
                    </a>
                    <a href="tel:+918796782980" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
                      +91 87967 82980
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 transition-colors duration-300">
                  <IconMail size={15} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-655 uppercase tracking-wider">Email</p>
                  <a href="mailto:info@cabexpress.com" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
                    info@cabexpress.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 transition-colors duration-300">
                  <IconMapPin size={15} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Location</p>
                  <p className="text-gray-300 font-semibold">India</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 transition-colors duration-300">
                  <IconHeadset size={15} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Working Hours</p>
                  <p className="text-gray-300 font-semibold">24 Hours / 7 Days</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-neutral-900 bg-neutral-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-gray-500 font-medium">
          <p className="order-3 md:order-1 text-center md:text-left">
            Copyright © 2026 <span className="text-yellow-400 font-bold">CabExpress</span>. All rights reserved.
          </p>
          <div className="order-1 md:order-2 flex gap-4 text-gray-400 font-semibold">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-conditions" className="hover:text-yellow-400 transition-colors">Terms &amp; Conditions</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}