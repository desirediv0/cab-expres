"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { cabInquirySchema, type CabInquiryForm } from "@/lib/validations";
import { submitCabInquiry } from "@/actions/mail-actions";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition bg-white text-gray-900";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

const services = [
  "One Way Cab",
  "Round Trip Cab",
  "Airport Pickup",
  "Airport Drop",
  "Local Cab",
  "Multi City Cab",
  "Taxi Package",
  "Holiday Package",
];

export function CabForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CabInquiryForm>({ resolver: zodResolver(cabInquirySchema) });

  const onSubmit = async (data: CabInquiryForm) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v ?? ""));
      const result = await submitCabInquiry(fd);
      if (result.success) {
        toast.success("Request Submitted Successfully", {
          description: "Thank you for contacting CabExpress. Our team will contact you shortly.",
        });
        reset();
      } else {
        toast.error("Something Went Wrong", {
          description: "Unable to send your request right now. Please try again later.",
        });
      }
    } catch {
      toast.error("Something Went Wrong", {
        description: "Unable to send your request right now. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              {...register("name")}
              className={inputClass}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input
              {...register("phone")}
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            {...register("email")}
            type="email"
            className={inputClass}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Service Required *</label>
          <select {...register("service")} className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us your travel details, requirements, or questions..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/30 text-base"
        >
          {loading ? (
            <IconLoader2 size={20} className="animate-spin" />
          ) : (
            <IconSend size={20} />
          )}
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}