"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

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

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card {...fixMTProps} color="transparent" shadow={false}>
      <CardHeader 
        {...fixMTProps} 
        floated={false} 
        className="mx-0 mt-0 mb-6 h-64 overflow-hidden rounded-[30px]"
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </CardHeader>
      <CardBody {...fixMTProps} className="p-0">
        <a
          href="#"
          className="text-black transition-colors hover:text-slate-600"
        >
          <Typography {...fixMTProps} variant="h5" className="mb-2 font-serif text-2xl">
            {title}
          </Typography>
        </a>
        <Typography {...fixMTProps} className="mb-6 font-light text-slate-500 leading-relaxed">
          {desc}
        </Typography>
        <Button 
          {...fixMTProps} 
          size="sm"
          className="rounded-full bg-black normal-case tracking-widest text-[10px] shadow-none hover:shadow-lg"
        >
          Ver detalles
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;