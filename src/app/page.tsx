import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import OurTeam from "@/components/OurTeam";
import ModernSpecialsMenu from "@/components/Product";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <ModernSpecialsMenu />
      <Testimonials />
      <OurTeam />
      <Contact />
      <Footer />
    </main>
  );
}
