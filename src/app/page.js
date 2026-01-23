import dynamic from "next/dynamic";
import NavDock from "@/components/NavDock";
import { About, Contact, Hero, Tech, Works } from "@/components";

const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* fundo animado */}
      <StarsCanvas />

      {/* conteúdo na frente */}
      <div style={{ position: "relative", zIndex: 10 }} className="siteOverlay">
        <NavDock />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech" className="overflow-hidden">
          <Tech />
        </section>

        <section id="projects">
          <Works />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}
