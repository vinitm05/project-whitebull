import { useEffect } from "react";
import ServicesSection from "../components/sections/ServicesSection";
import CompanyOverviewSection from "../components/sections/CompanyOverviewSection";
import OnboardingProcessSection from "../components/sections/OnboardingProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";

// AOS animation initialization
import AOS from "aos";
import "aos/dist/aos.css";
import HomeVideo from "../components/sections/HomeVideo";
import HomeImageClg from "../components/AboutUs/HomeImageClg";

function Home() {
  useEffect(() => {
    // Update page title
    document.title =
      "WiselyYours | Outsourced Accounting Services for UK Firms";

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
        <HomeVideo />
        <HomeImageClg/>
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
