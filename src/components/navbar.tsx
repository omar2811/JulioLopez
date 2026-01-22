"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import {
  HomeIcon,
  Cog6ToothIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

/* =======================
   NAV MENU
======================= */
const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "#home",
  },
  {
    name: "Cómo trabajamos",
    icon: Cog6ToothIcon,
    href: "#como-trabajamos",
  },
  {
    name: "Servicios",
    icon: BriefcaseIcon,
    href: "#lo-que-hacemos",
  },
  {
    name: "Eventos",
    icon: CalendarDaysIcon,
    href: "#tipos-de-eventos",
  },
];

/* =======================
   NAV ITEM
======================= */
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={onClick}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-black transition"
      >
        {children}
      </Typography>
    </li>
  );
}

/* =======================
   NAVBAR
======================= */
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
    <MTNavbar
      shadow={false}
      fullWidth
      className="sticky top-0 z-50 border-0 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/image/logo.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            size="sm"
            className="rounded-full bg-black text-white hover:bg-gray-900"
          >
            Contáctanos
          </Button>
        </div>

        {/* Mobile Button */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-4 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem
                key={name}
                href={href}
                onClick={() => setOpen(false)}
              >
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>

          <div className="mt-6 mb-4">
            <Button
              fullWidth
              className="rounded-full bg-black text-white hover:bg-gray-900"
              onClick={() => setOpen(false)}
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
