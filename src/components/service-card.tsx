import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-yellow-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-yellow-50 group-hover:bg-yellow-400 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
        <div className="group-hover:text-black text-yellow-600 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="font-bold text-gray-900 text-sm mb-2 font-heading">
        {title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}