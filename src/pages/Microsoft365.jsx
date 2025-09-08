import ByTheNumbers from "@/components/microsoft365ui/ByTheNumbers";
import ClientSuccessStories from "@/components/microsoft365ui/ClientSuccessStories";
import CopilotSection from "@/components/microsoft365ui/CopilotSection";
import CTASection from "@/components/microsoft365ui/CTASection";
import EmbeeMicrosoftAwards from "@/components/microsoft365ui/EmbeeMicrosoftAwards";
import EnterpriseCTA from "@/components/microsoft365ui/EnterpriseCTA";
import Footer from "@/components/microsoft365ui/Footer";
import Header from "@/components/microsoft365ui/Header";
import HeroSection from "@/components/microsoft365ui/HeroSection";
import Microsoft365Services from "@/components/microsoft365ui/Microsoft365Services";
import MicrosoftPlans from "@/components/microsoft365ui/MicrosoftPlans";
import MicrosoftSpecializationsCarousel from "@/components/microsoft365ui/MicrosoftSpecializationsCarousel";
import WhyChooseEmbee from "@/components/microsoft365ui/WhyChooseEmbee";
import React from "react";

const Microsoft365 = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MicrosoftPlans />
      <EnterpriseCTA />
      <CopilotSection />
      <MicrosoftSpecializationsCarousel />
      <Microsoft365Services />
      <ClientSuccessStories />
      <ByTheNumbers />
      <EmbeeMicrosoftAwards />
      <WhyChooseEmbee />
      <CTASection />
      <Footer />
    </>
  );
};

export default Microsoft365;
