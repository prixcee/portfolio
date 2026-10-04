import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Building from "@/components/Building";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Building />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}