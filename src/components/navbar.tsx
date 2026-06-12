"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconMenu2,
  IconX,
  IconCar,
  IconBriefcase,
  IconChevronRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PartnerForm } from "@/components/partner-form";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cabs", label: "Cabs" },
  { href: "/holiday-packages", label: "Holiday Packages" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        {/* Top Header Bar */}
        <div className="bg-white border-b border-gray-100 py-2.5 text-gray-600 text-xs font-medium tracking-wide">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/919643902980"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-200"
              >
                <IconBrandWhatsapp size={15} className="text-green-500" />
                <span>+91 96439 02980</span>
              </a>
              <a
                href="tel:+919643902980"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-200"
              >
                <IconPhone size={14} className="text-yellow-500" />
                <span>+91 96439 02980</span>
              </a>
              <a
                href="tel:+918796782980"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-200 hidden md:flex"
              >
                <IconPhone size={14} className="text-gray-400" />
                <span>+91 87967 82980</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:support@cabexpress.com"
                className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-200"
              >
                <IconMail size={14} className="text-gray-400" />
                <span>support@cabexpress.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={cn(
            "w-full transition-all duration-300 border-b",
            scrolled
              ? "bg-white/80 backdrop-blur-md border-gray-200/80 shadow-lg shadow-gray-100/40 py-3"
              : "bg-white border-gray-100 py-5"
          )}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Premium Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="CabExpress Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </Link>

            {/* Desktop Navigation Center */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[15px] font-bold transition-all duration-300 relative py-2 font-heading tracking-wide block",
                        isActive
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-400 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Action Button Right */}
            <div className="hidden md:flex items-center gap-4">
              <Dialog open={isPartnerOpen} onOpenChange={setIsPartnerOpen}>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 bg-black hover:bg-yellow-400 text-white hover:text-black text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-black/10 hover:shadow-yellow-400/20 transition-all duration-300 border border-black hover:border-yellow-400"
                  >
                    <IconBriefcase size={16} />
                    <span>Become a Partner</span>
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                      Become a CabExpress Partner
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      Join our growing travel network and expand your business with CabExpress.
                    </DialogDescription>
                  </DialogHeader>
                  <PartnerForm onSuccess={() => setIsPartnerOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <IconX size={20} className="text-gray-900" /> : <IconMenu2 size={20} className="text-gray-900" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl p-6 md:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="CabExpress Logo"
                      width={120}
                      height={36}
                      className="h-8 w-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
                  >
                    <IconX size={18} />
                  </button>
                </div>

                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold font-heading transition-all duration-200",
                            isActive
                              ? "bg-yellow-400/10 text-yellow-600 border-l-4 border-yellow-400"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          <span>{link.label}</span>
                          <IconChevronRight size={16} className={isActive ? "text-yellow-600" : "text-gray-400"} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <Dialog open={isPartnerOpen} onOpenChange={(val) => {
                  setIsPartnerOpen(val);
                  if (val) setIsOpen(false); // Close mobile menu when dialog opens
                }}>
                  <DialogTrigger asChild>
                    <button className="w-full flex items-center justify-center gap-2 bg-black hover:bg-yellow-400 text-white hover:text-black font-bold py-4 rounded-xl transition-all duration-300 shadow-md">
                      <IconBriefcase size={18} />
                      <span>Become a Partner</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        Become a CabExpress Partner
                      </DialogTitle>
                      <DialogDescription>
                        Join our growing travel network and expand your business with CabExpress.
                      </DialogDescription>
                    </DialogHeader>
                    <PartnerForm onSuccess={() => setIsPartnerOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}