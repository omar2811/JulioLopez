"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  Award,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Experiencia",
    text: "Años creando eventos exitosos y memorables.",
    icon: Award,
  },
  {
    title: "Atención personalizada",
    text: "Cada evento es único y diseñado a tu medida.",
    icon: Users,
  },
  {
    title: "Equipo profesional",
    text: "Expertos en logística, diseño y coordinación.",
    icon: Briefcase,
  },
  {
    title: "Tranquilidad total",
    text: "Nosotros nos encargamos de todo.",
    icon: ShieldCheck,
  },
];

export default function Testimonial() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography
            variant="small"
            className="uppercase tracking-widest text-gray-600 mb-4"
          >
            Nuestro valor
          </Typography>
          <Typography variant="h2" className="text-4xl font-extrabold">
            ¿Por qué elegirnos?
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gray-100">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>

                <Typography variant="h5" className="font-bold mb-3">
                  {r.title}
                </Typography>
                <Typography className="text-gray-500 text-sm leading-relaxed">
                  {r.text}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
