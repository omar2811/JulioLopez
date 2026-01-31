/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Great_Vibes, Montserrat } from "next/font/google"; //
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// Configuración de la fuente para la firma
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
});

// Configuración de la fuente para el subtítulo
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sub",
});

export const metadata: Metadata = {
  title: "Julio Lopez | Event Planner",
  description: "Organización profesional de eventos.",
  icons: {
    icon: "/image/event.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Aplicamos las variables de las fuentes al body */}
      <body className={`${roboto.className} ${greatVibes.variable} ${montserrat.variable}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}