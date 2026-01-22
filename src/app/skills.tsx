"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const events = [
  {
    title: "Bodas",
    description:
      "Creamos bodas únicas, elegantes y llenas de emoción que se viven una sola vez.",
    image: "/image/IMG_0658.jpg",
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
    image: "/image/IMG_0659.jpg",
  },
  {
    title: "Eventos Especiales",
    description:
      "Diseñamos experiencias a la medida para momentos que merecen algo extraordinario.",
    image: "/image/IMG_0660.jpg",
  },
];

export default function Skills() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
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
            Lo que hacemos
          </Typography>

          <Typography
            variant="h2"
            className="text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Tipos de eventos
          </Typography>

          <Typography className="text-gray-500 max-w-2xl mx-auto">
            Cada evento es diferente. Nos adaptamos a tu estilo, objetivo y
            momento especial.
          </Typography>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[26rem] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Imagen */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Contenido */}
              <div className="absolute bottom-0 p-8 z-10">
                <Typography
                  variant="h3"
                  className="text-white font-extrabold mb-3"
                >
                  {event.title}
                </Typography>

                <Typography className="text-gray-200 max-w-md leading-relaxed">
                  {event.description}
                </Typography>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
