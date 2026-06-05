"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PartnerForm } from "@/components/partner-form";

export function PartnerCtaSection() {
  const [partnerOpen, setPartnerOpen] = useState(false);

  return (
    <section className="py-14 md:py-16 bg-gray-50 border-y border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-[32px] overflow-hidden p-8 md:p-12 shadow-xl border border-yellow-500">
          {/* Pattern/Shape overlays */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[150px] h-[150px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 text-black">
              <span className="text-[10px] font-black uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full border border-black/10">
                Partner Program
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-heading tracking-tight leading-none">
                Become A CabExpress Partner
              </h2>
              <p className="text-black/80 text-sm font-semibold max-w-xl">
                Join India&apos;s growing travel network. Register your vehicle fleet, Sedan, SUV or coach and generate extra business.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Dialog open={partnerOpen} onOpenChange={setPartnerOpen}>
                <DialogTrigger asChild>
                  <button className="bg-black hover:bg-neutral-900 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg shadow-black/10 text-sm">
                    Become A Partner
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
                  <PartnerForm onSuccess={() => setPartnerOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
