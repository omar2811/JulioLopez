"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

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
    text: "Profesionalismo total. La organización fue impecable y el evento fue un éxito.",
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

export default function Resume() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Typography
            variant="small"
            className="uppercase tracking-widest text-gray-500 mb-3"
          >
            Opiniones reales
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl font-extrabold text-gray-900"
          >
            Testimonios
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote icon */}
              <Quote className="absolute -top-5 -right-5 h-10 w-10 text-gray-200" />

              {/* Rating */}
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "fill-gray-900 text-gray-900"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {t.rating}.0
                </span>
              </div>

              {/* Text */}
              <Typography className="mb-6 text-gray-700 italic leading-relaxed">
                “{t.text}”
              </Typography>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <Typography className="font-bold text-gray-900">
                    {t.name}
                  </Typography>
                  <Typography className="text-sm text-gray-500">
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
