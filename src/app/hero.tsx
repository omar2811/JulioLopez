"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <header className="relative bg-white min-h-[75vh] flex items-center overflow-hidden">
      {/* Sutil toque de luz en el fondo para evitar que sea plano */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(241,245,249,1)_0%,_rgba(255,255,255,1)_100%)] z-0" />

      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10">
        
        {/* LADO IZQUIERDO: CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <Typography
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400"
          >
            Experiencias de Autor
          </Typography>

          <Typography
            variant="h1"
            className="mb-6 text-5xl lg:text-7xl font-serif font-light leading-[1.1] text-black tracking-tight"
          >
            Organizamos <br />
            <span className="italic text-gray-400 font-extralight">Tu Evento Ideal</span>
          </Typography>

          <Typography
            className="mb-10 text-gray-500 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Diseño, logística y coordinación impecable. Elevamos cada detalle 
            para crear atmósferas únicas y sofisticadas que perduran en el tiempo.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-900 px-10 rounded-full normal-case text-sm font-medium shadow-none transition-all"
              >
                Contáctanos
              </Button>
            </motion.div>
            
            <Button 
              variant="text" 
              size="lg" 
              className="flex items-center gap-2 rounded-full normal-case text-sm text-black font-semibold hover:bg-gray-50"
            >
              Ver Galería
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* LADO DERECHO: IMAGEN FLOTANTE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Contenedor de imagen con estética de revista */}
          <div className="relative h-[350px] w-[350px] md:h-[500px] md:w-[500px] group">
            <div className="absolute inset-0 bg-gray-100 rounded-[60px] lg:rounded-[120px] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
            
            <div className="relative h-full w-full rounded-[60px] lg:rounded-[120px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-[12px] border-white">
              <Image
                src="/image/IMG_0642.jpg"
                alt="Diseño de Eventos Premium"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
            </div>

            {/* Etiqueta flotante minimalista */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50"
            >
              <Typography className="text-black font-serif text-3xl font-light italic">100%</Typography>
              <Typography className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Dedicación</Typography>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}

export default Hero;