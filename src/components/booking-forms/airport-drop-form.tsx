"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend } from "@tabler/icons-react";
import { airportDropSchema, type AirportDropForm } from "@/lib/validations";
import { FormField, inputClass, submitButtonClass } from "./form-field";

export function AirportDropFormComponent() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AirportDropForm>({
    resolver: zodResolver(airportDropSchema),
  });

  const onSubmit = async (data: AirportDropForm) => {
    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      fd.append("formType", "Airport Drop");
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
      <FormField label="Drop City" error={errors.dropCity?.message}>
        <input {...register("dropCity")} className={inputClass} placeholder="Enter drop city" />
      </FormField>
      <FormField label="Airport" error={errors.airport?.message}>
        <input {...register("airport")} className={inputClass} placeholder="e.g. Chhatrapati Shivaji Airport" />
      </FormField>
      <FormField label="Travel Date" error={errors.travelDate?.message}>
        <input {...register("travelDate")} type="date" className={inputClass} />
      </FormField>
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