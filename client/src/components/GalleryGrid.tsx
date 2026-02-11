import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface GalleryItem {
  src: string;
  alt: string;
  className?: string;
}

const images: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", alt: "Life in Gaza" },
  { src: "/images/gallery-2.jpg", alt: "Resilience" },
  { src: "/images/gallery-3.jpg", alt: "Moments of Hope" },
  { src: "/images/header-bg.jpg", alt: "Landscapes" },
];

// Fallback to placeholder if image fails to load (defensive coding)
const ImageWithFallback = ({ src, alt, className }: GalleryItem) => {
  return (
    <div className={cn("overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group bg-muted", className)}>
      <div className="relative w-full h-full">
        <img 
          src={src} 
          alt={alt}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=800&auto=format&fit=crop"; // Minimal fallback
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            index === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"
          )}
        >
          <AspectRatio ratio={index === 0 ? 16 / 10 : 4 / 3}>
             <ImageWithFallback {...img} className="w-full h-full" />
          </AspectRatio>
        </motion.div>
      ))}
    </div>
  );
}
