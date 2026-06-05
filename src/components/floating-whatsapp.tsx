"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white text-gray-900 border border-gray-100 shadow-xl rounded-2xl py-2.5 px-4 mb-3 text-xs font-bold tracking-tight flex items-center gap-2 group whitespace-nowrap cursor-pointer relative"
            onClick={() => window.open("https://wa.me/919643902980", "_blank")}
          >
            {/* Pulsing indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Need Help? Chat with us!</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-gray-405 hover:text-black transition-colors text-[10px] ml-1.5 font-normal"
            >
              ✕
            </button>
            {/* Tooltip Arrow */}
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919643902980"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 border border-white/20 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none group-hover:scale-110 transition-transform duration-300" />
        
        <Image
          src="/whatsapp.png"
          alt="WhatsApp Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </motion.a>
    </div>
  );
}
