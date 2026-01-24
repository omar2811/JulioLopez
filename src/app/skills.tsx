"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

/**
 * SOLUCIÓN PARA TYPESCRIPT:
 * Limpia las propiedades exigidas por Material Tailwind.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

const events = [
  {
    title: "Bodas",
    description:
      "Creamos bodas únicas, elegantes y llenas de emoción que se viven una sola vez.",
    image: "/image/IMG_0658.JPG",
  },
  {
    title: "Eventos Corporativos",
    description:
      "Lanzamientos, congresos y reuniones que reflejan profesionalismo y estilo.",
    image: "/image/imagen6.jpg",
  },
  {
    title: "Fiestas Sociales",
    description:
      "Cumpleaños, aniversarios y celebraciones inolvidables para compartir.",
    image: "/image/IMG_0659.JPG",
  },
  {
    title: "Eventos Especiales",
    description:
      "Diseñamos experiencias a la medida para momentos que merecen algo extraordinario.",
    image: "/image/IMG_0660.JPG",
  },
];

export default function Skills() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Typography
            {...fixMTProps}
            as="p"
            className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4"
          >
            Lo que hacemos
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h2"
            className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6"
          >
            Tipos de <span className="italic text-slate-400 font-extralight">Eventos</span>
          </Typography>

          <div className="w-12 h-[1px] bg-black mx-auto mb-6" />

          <Typography {...fixMTProps} className="text-slate-500 max-w-2xl mx-auto font-light">
            Cada evento es diferente. Nos adaptamos a tu estilo, objetivo y
            momento especial con una ejecución impecable.
          </Typography>
        </motion.div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[30rem] rounded-[40px] overflow-hidden cursor-pointer shadow-sm"
            >
              {/* Imagen con zoom al hover */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay más elegante (gradiente más suave) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Contenido */}
              <div className="absolute bottom-0 p-10 z-10 w-full">
                <Typography
                  {...fixMTProps}
                  variant="h3"
                  className="text-white font-serif text-3xl mb-4"
                >
                  {event.title}
                </Typography>

                <div className="h-[1px] w-0 bg-white/50 mb-4 transition-all duration-700 group-hover:w-full" />

                <Typography {...fixMTProps} className="text-slate-200 font-light leading-relaxed max-w-sm">
                  {event.description}
                </Typography>
              </div>

              {/* Borde sutil al hover */}
              <div className="absolute inset-0 border-[1px] border-white/20 rounded-[40px] m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}