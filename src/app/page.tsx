"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { useEffect, useRef } from "react";
import { Bunner } from "@/components/Bunner";

const Home = () => {
  const bunner = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const projects = useRef<null | HTMLDivElement>(null);
  const contact = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="body min-h-screen">
      <Bunner bunner={bunner} />
      <Header
        bunner={bunner}
        about={about}
        projects={projects}
        contact={contact}
      />
      <main>
        <About about={about} />
        <Projects projects={projects} />
        <Contact contact={contact} />
      </main>
      <Footer />
    </section>
  );
};

export default Home;