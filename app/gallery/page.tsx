"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Link from "next/link";

const heroImages = [
  "/counter2.jpg",
  "/chef1.jpg",
  "/wine2.jpg",
  "/pizza1.jpg",
];

// Interior section now has images + videos
const interiorMedia = [
  { type: "image", src: "/int10.jpg" },
  { type: "image", src: "/int16.jpg" },
  { type: "video", src: "/bnb-video.mp4" },
  { type: "video", src: "/gallery6.mp4" },
];

const mealImages = ["/dish13.jpg", "/dish2.jpg", "/dish8.jpg"];

const chefImages = ["/chef1.jpg", "/chef2.jpg"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Simple autoplay without extra package
  useEffect(() => {
    if (!emblaApi) return;
    let interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Carousel */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="embla h-full" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((src, idx) => (
              <div key={idx} className="flex-[0_0_100%] relative">
                <img
                  src={src}
                  alt={`Hero slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-serif font-bold text-white text-center drop-shadow-lg"
                  >
                    Discover Maria Havens
                  </motion.h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-10">
          Elegant Interiors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interiorMedia.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg shadow-lg cursor-pointer flex justify-center items-center"
              onClick={() =>
                item.type === "image" ? setSelectedImage(item.src) : null
              }
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Interior ${idx + 1}`}
                  className="w-full h-[70%] object-cover rounded-lg"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[70%] object-cover rounded-lg"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-10">
            Signature Dishes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mealImages.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-10">
          Behind the Scenes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chefImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Ready to Experience Maria Havens?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Book your table today and immerse yourself in fine dining
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg"
        >
          <Link href="/reservations">
            <Calendar className="mr-2 h-5 w-5" />
            Reserve Now
          </Link>
        </Button>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-5xl max-h-[80vh] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
