import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { StickyServices } from "@/components/landing/StickyServices";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import ProfessionalsSection from "@/components/landing/ProfessionalsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import OrcamentoModal from "@/components/landing/OrcamentoModal";
import FloatingChatButton from "@/components/landing/FloatingChatButton";

const Index = () => {
  const [isOrcamentoOpen, setIsOrcamentoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenOrcamento={() => setIsOrcamentoOpen(true)} />

      {/* Secção Principal */}
      <HeroSection />

      {/* Sobre nós */}
      <AboutSection />

      {/* Serviços em Destaque */}
      <StickyServices />

      {/* Lista Completa de Serviços */}
      <ServicesGrid />

      {/* Resto do site */}
      <ProfessionalsSection />
      <CTASection onOpenOrcamento={() => setIsOrcamentoOpen(true)} />
      <Footer />

      <OrcamentoModal
        isOpen={isOrcamentoOpen}
        onClose={() => setIsOrcamentoOpen(false)}
      />
      <FloatingChatButton />
    </div>
  );
};

export default Index;