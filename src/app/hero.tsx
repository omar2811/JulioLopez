"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT:
 * Este objeto contiene todas las propiedades que Material Tailwind exige
 * pero que React/TS a veces no inyecta automáticamente.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

function Hero() {
  return (
    <header className="relative bg-white min-h-[75vh] flex items-center overflow-hidden pt-12 lg:pt-0">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(241,245,249,1)_0%,_rgba(255,255,255,1)_100%)] z-0" />

      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10">
        
        {/* LADO IZQUIERDO: TEXTO Y BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <Typography
            {...fixMTProps}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400"
          >
            Experiencias de Autor
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h1"
            className="mb-6 text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-black tracking-tight"
          >
            Organizamos <br />
            <span className="italic text-slate-400 font-extralight">Tu Evento Ideal</span>
          </Typography>

          <Typography
            {...fixMTProps}
            className="mb-10 text-slate-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Diseño, logística y coordinación impecable. Elevamos cada detalle 
            para crear atmósferas únicas y sofisticadas.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                {...fixMTProps} // Aplicado aquí para corregir el error del botón
                size="lg" 
                className="bg-black hover:bg-slate-900 px-10 rounded-full normal-case text-sm font-medium shadow-none transition-all"
              >
                Contáctanos
              </Button>
            </motion.div>
            
            <Button 
              {...fixMTProps} // Aplicado aquí para corregir el error del botón
              variant="text" 
              size="lg" 
              className="flex items-center gap-2 rounded-full normal-case text-sm text-black font-semibold hover:bg-slate-50 transition-colors"
            >
              Ver Galería
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* LADO DERECHO: IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative h-[320px] w-[320px] md:h-[480px] md:w-[480px] group">
            <div className="absolute inset-0 bg-slate-100 rounded-[60px] lg:rounded-[100px] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
            
            <div className="relative h-full w-full rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border-[10px] border-white">
              <Image
                src="/image/IMG_0642.jpg"
                alt="Julio López"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 bg-white/90 backdrop-blur-md py-4 px-8 rounded-2xl shadow-xl border border-slate-100"
            >
              <Typography {...fixMTProps} className="text-black font-serif text-3xl font-light italic">100%</Typography>
              <Typography {...fixMTProps} className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Dedicación</Typography>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}

export default Hero;