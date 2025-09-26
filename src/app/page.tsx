// src/app/page.tsx
import Hero from "@/components/site/Hero";
import ThemeToggle from "@/components/site/ThemeToggle";
import FourPillars from "@/components/sections/FourPillars";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/site/Footer";

export default function HomePage(){
  return (
    <>
      <Hero />
      <FourPillars />
      <Newsletter />
      <ThemeToggle /> 
       <Footer />
    </>
  );
}
