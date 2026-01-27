// app/portfolio/page.tsx (o donde esté este componente)

import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import FloatingContact from "./FloatingContact";

export default function Portfolio() {
  return (
    <>
    <FloatingContact />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="como-trabajamos">
        <Clients />
      </section>

      <section id="lo-que-hacemos">
        <Skills />
      </section>

      <section id="servicios">
        <Testimonial />
      </section>

      <section id="tipos-de-eventos">
        <Projects />
      </section>

      <section id="opiniones">
        <Resume />
      </section>

      <section id="galeria">
        <PopularClients />
      </section>

      <section id="contacto">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
