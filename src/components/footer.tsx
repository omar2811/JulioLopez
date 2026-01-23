"use client";

import { Typography } from "@material-tailwind/react";

/**
 * SOLUCIÓN DEFINITIVA PARA TYPESCRIPT:
 * Silencia los errores de propiedades faltantes en Material Tailwind.
 */
const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

const FOOTER_LINKS = [
  { name: "Inicio", href: "#home" },
  { name: "Proceso", href: "#como-trabajamos" },
  { name: "Servicios", href: "#lo-que-hacemos" },
  { name: "Eventos", href: "#tipos-de-eventos" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative bg-white px-8 pt-24 pb-12 overflow-hidden">
      {/* Línea decorativa superior sutil */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Logo con efecto de escala suave */}
          <a href="#home" className="transition-transform hover:scale-105 duration-500">
            <img
              src="/image/logo.jpg"
              alt="Julio López Logo"
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-700"
            />
          </a>

          {/* Navegación Minimalista */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {FOOTER_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Typography
                    {...fixMTProps}
                    as="a"
                    href={href}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-black transition-colors duration-300"
                  >
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          </nav>

          {/* Frase de Cierre */}
          <Typography
            {...fixMTProps}
            className="max-w-md text-slate-400 font-serif italic text-sm font-light"
          >
            "Diseñando atmósferas donde cada detalle cuenta una historia inolvidable."
          </Typography>
        </div>

        {/* Sección Inferior / Copyright */}
        <div className="mt-20 border-t border-slate-100 pt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Typography
            {...fixMTProps}
            className="text-[10px] uppercase tracking-widest text-slate-400 text-center md:text-left font-medium"
          >
            © {CURRENT_YEAR} Julio López • Event Planner. Todos los derechos reservados.
          </Typography>

          <div className="flex items-center gap-6">
             <Typography
                {...fixMTProps}
                className="text-[10px] uppercase tracking-widest text-slate-300 font-medium"
              >
                Elegancia • Precisión • Pasión
              </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
