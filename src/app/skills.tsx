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

const events = [
  {
    title: "XV Años",
    image: "/image/xvanos.jpg",
  },
  {
    title: "Bodas",
    image: "/image/boda.jpg",
  },
  {
    title: "Eventos Petit",
    image: "/image/petit.jpg",
  },
  {
    title: "Eventos Corporativos",
    image: "/image/Evento-Corporativo.jpg",
  },
  {
    title: "Eventos Sociales",
    image: "/image/PHOTO-2026-02-01-15-03-52.jpg",
  },
    {
    title: "Eventos Especiales",
    image: "/image/IMG_0660.JPG",
  },
];

export default function Skills() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Typography {...fixMTProps} className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4">
            Lo que hacemos
          </Typography>
          <Typography {...fixMTProps} variant="h2" className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6">
            Tipos de <span className="italic text-slate-400 font-extralight">Eventos</span>
          </Typography>
          <div className="w-12 h-[1px] bg-black mx-auto mb-6" />
        </motion.div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative h-[30rem] rounded-[40px] overflow-hidden cursor-pointer bg-black"
            >
              {/* Imagen */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
              />

              {/* OVERLAY: Degradado negro fuerte para que el texto blanco resalte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* CONTENIDO: Forzamos text-white en todo */}
              <div className="absolute bottom-0 p-10 z-20 w-full">
                <Typography
                  {...fixMTProps}
                  variant="h3"
                  className="!text-white font-serif text-3xl mb-4 drop-shadow-lg"
                >
                  {event.title}
                </Typography>

                {/* Línea blanca */}
                <div className="h-[1px] w-0 bg-white/80 mb-4 transition-all duration-700 group-hover:w-full" />

                <Typography 
                  {...fixMTProps} 
                  className="!text-white font-light leading-relaxed max-w-sm drop-shadow-md"
                >

                </Typography>
              </div>

              {/* Borde sutil al hover */}
              <div className="absolute inset-0 border-[1px] border-white/20 rounded-[40px] m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}