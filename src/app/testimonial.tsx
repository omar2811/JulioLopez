"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  Award,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT:
 * Silencia los errores de Material Tailwind.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

const reasons = [
  {
    title: "Experiencia",
    text: "Años creando eventos exitosos y memorables con un sello de distinción.",
    icon: Award,
  },
  {
    title: "Atención personalizada",
    text: "Cada detalle es diseñado a tu medida, reflejando tu esencia en cada rincón.",
    icon: Users,
  },
  {
    title: "Equipo profesional",
    text: "Expertos en logística y diseño trabajando bajo los más altos estándares.",
    icon: Briefcase,
  },
  {
    title: "Tranquilidad total",
    text: "Nos encargamos de la complejidad para que tú solo vivas el momento.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />

      <div className="relative container mx-auto px-6 z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Typography
            {...fixMTProps}
            as="p"
            className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4"
          >
            Nuestro valor
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h2"
            className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6"
          >
            ¿Por qué <span className="italic text-slate-400 font-extralight">elegirnos?</span>
          </Typography>
          
          <div className="w-12 h-[1px] bg-black mx-auto" />
        </motion.div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Icono con estilo minimalista */}
              <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-slate-50 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <r.icon strokeWidth={1.5} className="w-7 h-7" />
              </div>

              <Typography 
                {...fixMTProps}
                variant="h5" 
                as="h3"
                className="font-serif font-bold text-black mb-4 leading-tight"
              >
                {r.title}
              </Typography>

              <Typography 
                {...fixMTProps}
                className="text-slate-500 text-sm font-light leading-relaxed"
              >
                {r.text}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}