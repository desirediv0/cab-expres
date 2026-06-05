"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend } from "@tabler/icons-react";

import { cabBookingSchema } from "@/lib/validations";
import type { CabBookingForm } from "@/lib/validations";
import { submitCabBooking } from "@/actions/mail-actions";
import { FormField, inputClass, submitButtonClass } from "./form-field";

export function OneWayForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CabBookingForm>({ resolver: zodResolver(cabBookingSchema) });

  const onSubmit = async (data: CabBookingForm) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));
      formData.append("formType", "One Way");
      const result = await submitCabBooking(formData);
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
        <input
          {...register("pickupCity")}
          className={inputClass}
          placeholder="Enter pickup city"
        />
      </FormField>
      <FormField label="Destination City" error={errors.destinationCity?.message}>
        <input
          {...register("destinationCity")}
          className={inputClass}
          placeholder="Enter destination city"
        />
      </FormField>
      <FormField label="Travel Date" error={errors.travelDate?.message}>
        <input
          {...register("travelDate")}
          type="date"
          className={inputClass}
        />
      </FormField>
      <FormField label="Phone Number" error={errors.phoneNumber?.message}>
        <input
          {...register("phoneNumber")}
          className={inputClass}
          placeholder="+91 XXXXX XXXXX"
        />
      </FormField>
      <button
        type="submit"
        disabled={loading}
        className={submitButtonClass}
      >
        {loading ? (
          <IconLoader2 size={18} className="animate-spin" />
        ) : (
          <IconSend size={18} />
        )}
        {loading ? "Please Wait..." : "Get Quote"}
      </button>
    </form>
  );
}