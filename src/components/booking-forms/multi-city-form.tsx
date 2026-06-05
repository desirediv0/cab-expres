"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconSend, IconPlus, IconTrash } from "@tabler/icons-react";
import { multiCitySchema, type MultiCityForm } from "@/lib/validations";
import { FormField, inputClass, submitButtonClass } from "./form-field";

export function MultiCityFormComponent() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<MultiCityForm>({
    resolver: zodResolver(multiCitySchema),
    defaultValues: { cities: ["", ""] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cities" as never,
  });

  const onSubmit = async (data: MultiCityForm) => {
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("cities", data.cities.join(" → "));
      fd.append("startDate", data.startDate);
      fd.append("endDate", data.endDate);
      fd.append("phoneNumber", data.phoneNumber);
      fd.append("formType", "Multi City");
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
      <div className="space-y-2">
        <label className="block text-xs font-medium text-gray-700">Cities</label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...register(`cities.${index}` as const)}
              className={`${inputClass} flex-1`}
              placeholder={`City ${index + 1}`}
            />
            {fields.length > 2 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="p-2 text-red-400 hover:text-red-600 transition"
              >
                <IconTrash size={16} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => append("")}
          className="flex items-center gap-1 text-xs text-yellow-600 hover:text-yellow-700 font-medium"
        >
          <IconPlus size={14} /> Add City
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <FormField label="Start Date" error={errors.startDate?.message}>
          <input {...register("startDate")} type="date" className={inputClass} />
        </FormField>
        <FormField label="End Date" error={errors.endDate?.message}>
          <input {...register("endDate")} type="date" className={inputClass} />
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