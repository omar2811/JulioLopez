"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT:
 * Silencia los errores de propiedades faltantes en Material Tailwind.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

const testimonials = [
  {
    name: "María González",
    role: "Boda",
    rating: 5,
    text: "Superaron todas nuestras expectativas. Cada detalle fue perfecto y solo nos dedicamos a disfrutar.",
    image: "/image/testimonials/maria.jpg",
  },
  {
    name: "Carlos Ramírez",
    role: "Evento Corporativo",
    rating: 5,
    text: "Profesionalismo total. La organización fue impecable y el evento fue un éxito rotundo.",
    image: "/image/testimonials/carlos.jpg",
  },
  {
    name: "Ana López",
    role: "Fiesta Social",
    rating: 5,
    text: "Hicieron de mi evento algo inolvidable. Atención, diseño y ejecución increíbles.",
    image: "/image/testimonials/ana.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-slate-50/30 pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-8 z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Typography
            {...fixMTProps}
            as="p"
            className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4"
          >
            Opiniones Reales
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h2"
            className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6"
          >
            Testimonios de <span className="italic text-slate-400 font-extralight">Nuestros Clientes</span>
          </Typography>

          <div className="w-12 h-[1px] bg-black mx-auto" />
        </motion.div>

        {/* Grid de Testimonios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-[40px] bg-white p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500"
            >
              {/* Icono de cita minimalista */}
              <Quote className="absolute top-10 right-10 h-8 w-8 text-slate-100" />

              {/* Estrellas */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-3 w-3 ${
                      idx < t.rating
                        ? "fill-black text-black"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Texto del testimonio */}
              <Typography 
                {...fixMTProps}
                className="mb-10 text-slate-600 italic font-light leading-relaxed text-lg"
              >
                “{t.text}”
              </Typography>

              {/* Información del Usuario */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl grayscale">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <Typography 
                    {...fixMTProps}
                    className="font-bold text-black text-sm"
                  >
                    {t.name}
                  </Typography>
                  <Typography 
                    {...fixMTProps}
                    className="text-[10px] uppercase tracking-widest text-slate-400"
                  >
                    {t.role}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}