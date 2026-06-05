import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
    </div>
  );
}

// Shared input class
export const inputClass =
  "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition";

// Shared submit button
export const submitButtonClass =
  "w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-md";
