// page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Ecosystem from "@/components/sections/Ecosystem";
import Subscribers from "@/components/sections/Subscribers";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Ecosystem />
        <Subscribers />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}