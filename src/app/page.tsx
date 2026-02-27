import { Navbar, Hero, Services, ValueProps, Process, Pricing, CTA, Footer } from "@/components/sections";

export default function HomePage() {
  return (
    <div className="app">
      <a className="skipLink" href="#main">
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <ValueProps />
        <Process />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
