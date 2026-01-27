"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Typography, Input, Textarea } from "@material-tailwind/react";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

export default function ContactSection() {
  // 1. Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    idea: "",
  });

  // 2. Manejador de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Función de envío a WhatsApp
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const numero = "529241383113"; // Tu número con código de país (México)
    const { nombre, telefono, correo, idea } = formData;

    // Formateo del mensaje para WhatsApp
    const mensaje = 
      `*Nuevo Registro de Evento*%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Teléfono:* ${telefono}%0A` +
      `*Correo:* ${correo}%0A` +
      `*Idea del Evento:* ${idea}`;

    const url = `https://wa.me/${numero}?text=${mensaje}`;
    
    // Abre la ventana de WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Fondo sutil */}
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

        {/* Formulario */}
        <motion.form 
          onSubmit={handleWhatsAppSend}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input 
              {...fixMTProps} 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              variant="standard" 
              label="Nombre completo" 
              className="focus:border-black"
              containerProps={{ className: "min-w-0" }}
            />
            <Input 
              {...fixMTProps} 
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              variant="standard" 
              label="Teléfono" 
              className="focus:border-black"
              containerProps={{ className: "min-w-0" }}
            />
          </div>

          <Input 
            {...fixMTProps} 
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            type="email"
            variant="standard" 
            label="Correo electrónico" 
            className="focus:border-black"
          />

          <Textarea 
            {...fixMTProps} 
            name="idea"
            value={formData.idea}
            onChange={handleChange}
            required
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
              type="submit"
              fullWidth 
              size="lg" 
              className="bg-black hover:bg-slate-900 rounded-full normal-case text-sm font-medium py-4 shadow-none"
            >
              Enviar mensaje por WhatsApp
            </Button>
          </motion.div>
          
          <Typography 
            {...fixMTProps}
            className="text-center text-[10px] text-slate-400 uppercase tracking-widest"
          >
            Se abrirá una nueva ventana con tu mensaje listo para enviar
          </Typography>
        </motion.form>
      </div>
    </section>
  );
}