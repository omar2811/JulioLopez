"use client";

import { motion } from "framer-motion";
import { Button, Typography } from "@material-tailwind/react";
import { Input, Textarea } from "@material-tailwind/react";

export default function PopularClients() {
  return (
    <>
   
        <section className="py-28 bg-white">
      <div className="container mx-auto px-8 max-w-3xl">
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl font-extrabold mb-4">
            Contáctanos
          </Typography>
          <Typography className="text-gray-500">
            Escríbenos y comencemos a planear tu evento.
          </Typography>
        </div>

        <form className="space-y-6">
          <Input label="Nombre" />
          <Input label="Correo electrónico" />
          <Input label="Teléfono" />
          <Textarea label="Cuéntanos sobre tu evento" />

          <Button fullWidth size="lg">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
    </>
  );
}
