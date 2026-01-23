"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

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

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card {...fixMTProps} color="transparent" shadow={false} className="group">
      <CardBody {...fixMTProps} className="grid justify-center text-center">
        {/* Contenedor del Icono - Estilo minimalista */}
        <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-slate-50 text-black transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:shadow-xl group-hover:shadow-slate-200">
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </div>

        {/* Título - Fuente Serif para coherencia */}
        <Typography 
          {...fixMTProps} 
          variant="h5" 
          className="mb-3 font-serif text-2xl text-black"
        >
          {title}
        </Typography>

        {/* Descripción - Fuente ligera */}
        <Typography 
          {...fixMTProps} 
          className="px-4 font-light leading-relaxed text-slate-500"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;