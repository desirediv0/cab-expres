"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { IconLoader2, IconBriefcase } from "@tabler/icons-react";
import { partnerSchema, type PartnerForm as PartnerFormType } from "@/lib/validations";
import { submitPartnerRegistration } from "@/actions/mail-actions";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition bg-white text-gray-900";
const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

interface PartnerFormProps {
  onSuccess?: () => void;
}

export function PartnerForm({ onSuccess }: PartnerFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnerFormType>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = async (data: PartnerFormType) => {
    setLoading(true);
    try {
      const result = await submitPartnerRegistration(data);
      if (result.success) {
        toast.success("Request Submitted Successfully", {
          description: "Thank you for contacting CabExpress. Our team will contact you shortly.",
        });
        reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error("Something Went Wrong", {
          description: "Unable to send your request right now. Please try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong", {
        description: "Unable to send your request right now. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <label className={labelClass}>Company Name *</label>
          <input
            {...register("companyName")}
            className={inputClass}
            placeholder="Your company name"
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Mobile Number *</label>
          <input
            {...register("phone")}
            className={inputClass}
            placeholder="e.g. 9643902980"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>City *</label>
          <input
            {...register("city")}
            className={inputClass}
            placeholder="Your city"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>State *</label>
          <input
            {...register("state")}
            className={inputClass}
            placeholder="Your state"
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Vehicle Type *</label>
          <select {...register("vehicleType")} className={inputClass}>
            <option value="">Select type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Innova">Innova</option>
            <option value="Tempo Traveller">Tempo Traveller</option>
            <option value="Luxury Car">Luxury Car</option>
            <option value="Bus">Bus</option>
            <option value="Other">Other</option>
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-xs mt-1">{errors.vehicleType.message}</p>
          )}
        </div>
        <div>
          <label className={labelClass}>Number Of Vehicles *</label>
          <input
            {...register("numberOfVehicles")}
            type="number"
            min="1"
            className={inputClass}
            placeholder="Total vehicles fleet size"
          />
          {errors.numberOfVehicles && (
            <p className="text-red-500 text-xs mt-1">{errors.numberOfVehicles.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass}>Business Description</label>
        <textarea
          {...register("description")}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Briefly describe your business, areas of service, etc."
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            {...register("agree")}
            type="checkbox"
            className="mt-1 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500/20 h-4 w-4"
          />
          <span className="text-xs text-gray-500 leading-normal">
            I agree to be contacted by CabExpress
          </span>
        </label>
        {errors.agree && (
          <p className="text-red-500 text-xs mt-1">{errors.agree.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black hover:bg-yellow-400 hover:text-black disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg text-sm uppercase tracking-wider mt-2 border border-black hover:border-yellow-400"
      >
        {loading ? (
          <IconLoader2 size={18} className="animate-spin" />
        ) : (
          <IconBriefcase size={18} />
        )}
        {loading ? "Registering..." : "Become a Partner"}
      </button>
    </form>
  );
}
