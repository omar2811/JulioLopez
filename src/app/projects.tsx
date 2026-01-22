"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const images = [
  "/image/imagen5.jpg",
  "/image/imagen3.jpg",
  "/image/imagen2.jpg",
  "/image/imagen4.jpg",
  "/image/IMG_0661.jpg",
  "/image/PHOTO-2026-01-10-20-50-19.jpg",
  "/image/PHOTO-2026-01-10-20-51-06 2.jpg",
  "/image/PHOTO-2026-01-10-20-51-06 3.jpg",
  "/image/PHOTO-2026-01-10-20-51-07.jpg",
  "/image/PHOTO-2026-01-10-20-52-30.jpg",
];

export default function Projects() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Typography
            variant="small"
            className="uppercase tracking-widest text-gray-600 mb-4"
          >
            Nuestro trabajo
          </Typography>

          <Typography
            variant="h2"
            className="text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Galería de eventos
          </Typography>

          <Typography className="text-gray-500 max-w-2xl mx-auto">
            Cada imagen cuenta una historia. Así se viven nuestros eventos.
          </Typography>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-3xl overflow-hidden group
                ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              {/* Imagen */}
              <Image
                src={src}
                alt={`Galería ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
