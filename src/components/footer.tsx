"use client";

import { Typography } from "@material-tailwind/react";

const FOOTER_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Cómo trabajamos", href: "#como-trabajamos" },
  { name: "Servicios", href: "#lo-que-hacemos" },
  { name: "Eventos", href: "#tipos-de-eventos" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-20 bg-white px-8 pt-20">
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <a href="#home">
            <img
              src="/image/logo.jpg"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-8">
            {FOOTER_LINKS.map(({ name, href }) => (
              <li key={name}>
                <Typography
                  as="a"
                  href={href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-black transition-colors"
                >
                  {name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200 pt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="text-gray-500 text-center md:text-left"
          >
            © {CURRENT_YEAR} Todos los derechos reservados.
          </Typography>

          <Typography
            variant="small"
            className="text-gray-500"
          >
            Hecho con ❤️ para eventos inolvidables
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
