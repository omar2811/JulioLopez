"use client";

import React from "react";
import { Card, Typography } from "@material-tailwind/react";

/**
 * SOLUCIÓN PARA TYPESCRIPT:
 * Silencia los errores de propiedades faltantes en Material Tailwind.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-5 group">
      {/* Contenedor del Icono */}
      <Card
        {...fixMTProps}
        shadow={false}
        className="h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
      >
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </Card>

      {/* Texto descriptivo */}
      <Typography 
        {...fixMTProps} 
        className="w-full font-light leading-relaxed text-slate-500 pt-1"
      >
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;