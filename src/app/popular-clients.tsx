"use client";

import { motion } from "framer-motion";
import { Button, Typography, Input, Textarea } from "@material-tailwind/react";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT:
 * Aplicamos esto a todos los componentes de Material Tailwind
 * para silenciar los errores de propiedades faltantes.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

export default function ContactSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Fondo sutil para dar profundidad */}
      <div className="absolute inset-0 bg-slate-50/30 pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-2xl z-10">
        
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            {...fixMTProps}
            as="p"
            className="uppercase tracking-[0.3em] text-[10px] font-bold text-slate-400 mb-4"
          >
            Contacto
          </Typography>

          <Typography
            {...fixMTProps}
            variant="h2"
            className="text-4xl lg:text-5xl font-serif font-medium text-black mb-6"
          >
            Comencemos a <br />
            <span className="italic text-slate-400 font-extralight">Planear tu Evento</span>
          </Typography>

          <div className="w-12 h-[1px] bg-black mx-auto mb-6" />
        </motion.div>

        {/* Formulario Estilizado */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input 
              {...fixMTProps} 
              variant="standard" 
              label="Nombre completo" 
              className="focus:border-black"
              containerProps={{ className: "min-w-0" }}
            />
            <Input 
              {...fixMTProps} 
              variant="standard" 
              label="Teléfono" 
              className="focus:border-black"
              containerProps={{ className: "min-w-0" }}
            />
          </div>

          <Input 
            {...fixMTProps} 
            variant="standard" 
            label="Correo electrónico" 
            className="focus:border-black"
          />

          <Textarea 
            {...fixMTProps} 
            variant="standard" 
            label="Cuéntanos sobre tu idea (Tipo de evento, fecha, invitados...)" 
            className="focus:border-black"
          />

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="pt-4"
          >
            <Button 
              {...fixMTProps}
              fullWidth 
              size="lg" 
              className="bg-black hover:bg-slate-900 rounded-full normal-case text-sm font-medium py-4 shadow-none"
            >
              Enviar mensaje
            </Button>
          </motion.div>
          
          <Typography 
            {...fixMTProps}
            className="text-center text-[10px] text-slate-400 uppercase tracking-widest"
          >
            Te responderemos en menos de 24 horas
          </Typography>
        </motion.form>
      </div>
    </section>
  );
}