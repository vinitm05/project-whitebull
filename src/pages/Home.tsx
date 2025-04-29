import React, { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import CompanyOverviewSection from "../components/sections/CompanyOverviewSection";
import OnboardingProcessSection from "../components/sections/OnboardingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";

// AOS animation initialization
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    // Update page title
    document.title = "White Bull | Outsourced Accounting Services for UK Firms";

    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <CompanyOverviewSection />
        <OnboardingProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  );
}

export default Home;
