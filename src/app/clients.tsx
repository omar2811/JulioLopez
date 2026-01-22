"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  CalendarDays,
  PencilRuler,
  ClipboardCheck,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Escuchamos tu idea",
    description:
      "Conocemos tu visión, necesidades y expectativas para crear un evento a tu medida.",
  },
  {
    icon: PencilRuler,
    title: "Diseñamos la experiencia",
    description:
      "Creamos el concepto, ambientación y planeación cuidando cada detalle.",
  },
  {
    icon: ClipboardCheck,
    title: "Coordinamos todo",
    description:
      "Nos encargamos de proveedores, tiempos y logística para que todo fluya.",
  },
  {
    icon: PartyPopper,
    title: "Vivimos el evento",
    description:
      "Ejecutamos el evento con precisión para que tú solo disfrutes el momento.",
  },
];

export default function Clients() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white pointer-events-none" />

      <div className="relative container mx-auto px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="small"
            className="uppercase tracking-widest text-gray-600 mb-4"
          >
            Nuestro proceso
          </Typography>

          <Typography
            variant="h2"
            className="text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Cómo trabajamos
          </Typography>

          <Typography className="text-gray-500 max-w-2xl mx-auto">
            Un proceso claro, creativo y bien estructurado para lograr eventos
            memorables.
          </Typography>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="h-14 w-14 rounded-full bg-gray-900 text-white flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                </div>

                <Typography
                  variant="h5"
                  className="font-bold mb-3"
                >
                  {step.title}
                </Typography>

                <Typography className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
