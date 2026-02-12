import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfessionalRegistrationModal } from "@/components/auth/ProfessionalRegistrationModal";

interface NavbarProps {
  onOpenOrcamento: () => void;
}

const Navbar = ({ onOpenOrcamento }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-12 w-auto flex items-center justify-center">
              <img
                src="/Logo2.png"
                alt="Faz Tudo Express"
                className="h-12 w-auto object-contain transition-transform hover:scale-105"
                onError={(e) => {
                  e.currentTarget.parentElement!.style.display = 'none';
                  e.currentTarget.parentElement!.nextElementSibling?.classList.remove('hidden');
                }}
              />
            </div>
            {/* Fallback Text Logo (Hidden by default, shown if image fails) */}
            <div className="hidden flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="bg-brand-primary text-white p-2 rounded-xl"
              >
                <Zap className="w-5 h-5 fill-current" />
              </motion.div>
              <span className="font-extrabold text-xl text-foreground tracking-tight">
                Faz Tudo<span className="text-brand-primary">.</span>
                <span className="text-brand-accent">Express</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10 items-center">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-primary font-semibold transition"
            >
              Categorias
            </button>
            <button
              onClick={() => scrollToSection("profissionais")}
              className="text-muted-foreground hover:text-primary font-semibold transition"
            >
              Técnicos
            </button>
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="text-foreground font-bold text-sm hover:text-primary transition"
            >
              Sou Profissional
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onOpenOrcamento}
              className="hidden md:flex bg-foreground hover:bg-foreground/90 text-background px-7 py-3 rounded-2xl font-bold transition active:scale-95 shadow-lg"
            >
              Pedir Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left text-muted-foreground hover:text-primary font-semibold transition py-2"
              >
                Categorias
              </button>
              <button
                onClick={() => scrollToSection("profissionais")}
                className="block w-full text-left text-muted-foreground hover:text-primary font-semibold transition py-2"
              >
                Técnicos
              </button>
              <button
                onClick={() => {
                  setIsRegistrationOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-foreground font-bold text-sm hover:text-primary transition py-2"
              >
                Sou Profissional
              </button>
              <Button
                onClick={() => {
                  onOpenOrcamento();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-foreground hover:bg-foreground/90 text-background px-7 py-3 rounded-2xl font-bold"
              >
                Pedir Orçamento
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProfessionalRegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
