"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

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
  "/image/PHOTO-2026-01-10-20-52-30.jpg",
  "/image/PHOTO-2026-01-10-20-52-30.jpg",
];

export default function Projects() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

      <div className="relative container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Typography {...fixMTProps} as="p" className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4">
            Nuestro trabajo
          </Typography>
          <Typography {...fixMTProps} variant="h2" className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6">
            Galería de <span className="italic text-slate-400 font-extralight">Eventos</span>
          </Typography>
          <div className="w-12 h-[1px] bg-black mx-auto mb-6" />
        </motion.div>

        {/* CLAVE: grid-flow-dense rellena los huecos automáticamente */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[200px] gap-4 md:gap-6">
          {images.map((src, index) => {
            let gridClasses = "relative rounded-[32px] md:rounded-[40px] overflow-hidden group border-4 border-white shadow-sm hover:shadow-xl transition-all duration-700";
            
            // Distribuimos tamaños de forma aleatoria/estratégica para que el dense flow trabaje bien
            if (index % 7 === 0) {
                gridClasses += " md:col-span-2 md:row-span-2"; // Grandes cada cierto intervalo
            } else if (index % 4 === 0) {
                gridClasses += " md:row-span-2"; // Altas para romper la monotonía
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={gridClasses}
              >
                <Image
                  src={src}
                  alt={`Evento ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                     <div className="w-4 h-[0.5px] bg-black absolute" />
                     <div className="w-4 h-[0.5px] bg-black absolute rotate-90" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}