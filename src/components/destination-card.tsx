import Image from "next/image";

interface DestinationCardProps {
  name: string;
  image: string;
}

export function DestinationCard({ name, image }: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 50vw, 25vw"

      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* Name tag */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg font-heading">{name}</h3>
        <div className="w-8 h-0.5 bg-yellow-400 mt-1 group-hover:w-16 transition-all duration-300" />
      </div>
    </div>
  );
}