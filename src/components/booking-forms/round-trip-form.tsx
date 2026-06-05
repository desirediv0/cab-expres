"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { roundTripSchema, type RoundTripForm } from "@/lib/validations";
import { FormField, inputClass, submitButtonClass } from "./form-field";

export function RoundTripFormComponent() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoundTripForm>({ resolver: zodResolver(roundTripSchema) });

  const onSubmit = async (data: RoundTripForm) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      fd.append("formType", "Round Trip");
      const { submitCabBooking } = await import("@/actions/mail-actions");
      const result = await submitCabBooking(fd);
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <FormField label="Pickup City" error={errors.pickupCity?.message}>
        <input {...register("pickupCity")} className={inputClass} placeholder="Enter pickup city" />
      </FormField>
      <FormField label="Destination City" error={errors.destinationCity?.message}>
        <input {...register("destinationCity")} className={inputClass} placeholder="Enter destination city" />
      </FormField>
      <div className="grid grid-cols-2 gap-2">
        <FormField label="Start Date" error={errors.startDate?.message}>
          <input {...register("startDate")} type="date" className={inputClass} />
        </FormField>
        <FormField label="Return Date" error={errors.returnDate?.message}>
          <input {...register("returnDate")} type="date" className={inputClass} />
        </FormField>
      </div>
      <FormField label="Phone Number" error={errors.phoneNumber?.message}>
        <input {...register("phoneNumber")} className={inputClass} placeholder="+91 XXXXX XXXXX" />
      </FormField>
      <button type="submit" disabled={loading} className={submitButtonClass}>
        {loading ? <IconLoader2 size={18} className="animate-spin" /> : <IconSend size={18} />}
        {loading ? "Please Wait..." : "Get Quote"}
      </button>
    </form>
  );
}