"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import {
  CalendarDays,
  PencilRuler,
  ClipboardCheck,
  PartyPopper,
} from "lucide-react";

/**
 * SOLUCIÓN DEFINITIVA TS: 
 * Forzamos un objeto de props que cumpla con lo que pide el componente 
 * para silenciar los errores de captura de eventos.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any; // Usamos 'as any' aquí para que TS no valide estas props internas

const steps = [
  {
    icon: CalendarDays,
    title: "Escuchamos tu idea",
    description: "Conocemos tu visión, necesidades y expectativas para crear un evento a tu medida.",
  },
  {
    icon: PencilRuler,
    title: "Diseñamos la experiencia",
    description: "Creamos el concepto, ambientación y planeación cuidando cada detalle.",
  },
  {
    icon: ClipboardCheck,
    title: "Coordinamos todo",
    description: "Nos encargamos de proveedores, tiempos y logística para que todo fluya.",
  },
  {
    icon: PartyPopper,
    title: "Vivimos el evento",
    description: "Ejecutamos el evento con precisión para que tú solo disfrutes el momento.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/30 pointer-events-none" />

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
            Nuestro proceso
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h2"
            className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6"
          >
            Cómo trabajamos
          </Typography>

          <div className="w-12 h-[1px] bg-black mx-auto mb-6" />

          <Typography 
            {...fixMTProps} 
            className="text-slate-500 max-w-xl mx-auto font-light leading-relaxed"
          >
            Un camino estructurado para transformar tu visión en una realidad impecable.
          </Typography>
        </motion.div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-slate-100 rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="h-16 w-16 rounded-2xl bg-slate-50 text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
              </div>

              <Typography
                {...fixMTProps}
                variant="h5"
                className="font-serif font-bold text-black mb-4"
              >
                {step.title}
              </Typography>

              <Typography 
                {...fixMTProps} 
                className="text-slate-500 text-sm font-light leading-relaxed"
              >
                {step.description}
              </Typography>
              
              <div className="mt-6 text-[10px] font-bold text-slate-200">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}