import BlogSection from "@/components/BlogSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import RecognitionSection from "@/components/RecognitionSection";
import ServicesSection from "@/components/ServiceSection";
import TeamIntro from "@/components/TeamIntro";
import TechnologyStack from "@/components/TechnologyStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <Testimonials />
      <TeamIntro />
      <RecognitionSection />
      <TechnologyStack />
      <BlogSection />
      <ContactSection />
    </>
  );
}
