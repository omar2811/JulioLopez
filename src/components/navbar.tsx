"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const fixMTProps = {
  placeholder: "",
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
  onResize: undefined,
  onResizeCapture: undefined,
} as any;

const NAV_MENU = [
  { name: "Inicio", href: "#home" },
  { name: "Proceso", href: "#como-trabajamos" },
  { name: "Servicios", href: "#lo-que-hacemos" },
  { name: "Eventos", href: "#tipos-de-eventos" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-[9999] w-full bg-white border-b border-slate-100">
      <MTNavbar
        {...fixMTProps}
        shadow={false}
        fullWidth
        className="mx-auto max-w-screen-xl border-0 bg-transparent py-3 px-4 lg:px-8"
      >
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src="/image/logo.jpg"
              alt="Logo"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* MENÚ DESKTOP - FORZANDO TEXTO NEGRO */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {NAV_MENU.map(({ name, href }) => (
                <li key={name}>
                  <a 
                    href={href}
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-black hover:text-slate-500 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* BOTÓN CTA */}
             <a 
      href="https://wa.me/529241383113?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20de%20fiestas." 
      target="_blank" 
      rel="noopener noreferrer"
    >
            <Button
              {...fixMTProps}
              size="sm"
              className="ml-4 rounded-full bg-black text-white px-8 py-2.5 normal-case text-xs font-bold shadow-none hover:bg-slate-800"
            >
              Contáctanos
            </Button>
</a>
          </div>

          {/* BOTÓN MÓVIL (Hamburguesa en negro) */}
          <IconButton
            {...fixMTProps}
            variant="text"
            className="lg:hidden text-black"
            onClick={handleOpen}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-black" strokeWidth={2.5} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" strokeWidth={2.5} />
            )}
          </IconButton>
        </div>

        {/* MENÚ MÓVIL */}
        <Collapse open={open}>
          <div className="container mx-auto mt-4 bg-white border-t border-slate-100 pt-6 pb-4">
            <ul className="flex flex-col gap-6">
              {NAV_MENU.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-black block"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
                   <a 
      href="https://wa.me/529241383113?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios%20de%20fiestas." 
      target="_blank" 
      rel="noopener noreferrer"
    >
              <Button
                {...fixMTProps}
                fullWidth
                className="rounded-full bg-black text-white py-4 normal-case text-sm font-bold"
                onClick={() => setOpen(false)}
              >
                Contáctanos
              </Button>
              </a>
            </div>
          </div>
        </Collapse>
      </MTNavbar>
    </div>
  );
}

export default Navbar;