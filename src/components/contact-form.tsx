"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { contactSchema, type ContactForm as ContactFormType } from "@/lib/validations";
import { submitContact } from "@/actions/mail-actions";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition bg-white";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const vehicle = searchParams.get("vehicle");
  const subjectParam = searchParams.get("subject");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormType>({ resolver: zodResolver(contactSchema) });

  useEffect(() => {
    if (vehicle) {
      setValue("subject", `Car Rental Enquiry: ${vehicle}`);
      setValue("message", `Hi, I would like to inquire about the rental details, availability, and pricing for a ${vehicle}. Please contact me back with the options.`);
    } else if (subjectParam) {
      setValue("subject", subjectParam);
      if (subjectParam === "B2B Partnership") {
        setValue("message", `Hi, I am interested in establishing a B2B Car Rental partnership with CabExpress. Please share the details, pricing structure, and terms.`);
      }
    }
  }, [vehicle, subjectParam, setValue]);

  const onSubmit = async (data: ContactFormType) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      const result = await submitContact(fd);
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
          <label className={labelClass}>Subject *</label>
          <input
            {...register("subject")}
            className={inputClass}
            placeholder="How can we help you?"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass}>Message *</label>
          <textarea
            {...register("message")}
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg text-base"
        >
          {loading ? (
            <IconLoader2 size={20} className="animate-spin" />
          ) : (
            <IconSend size={20} />
          )}
          {loading ? "Sending Request..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}