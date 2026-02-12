import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroCarousel } from "@/components/landing/HeroCarousel";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decor - Adjusted for better readability */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm mb-6 border border-brand-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
            </span>
            #1 em Moçambique
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-5xl lg:text-7xl font-extrabold text-foreground mb-8 leading-tight tracking-tight drop-shadow-sm"
          >
            Sua casa em <br />
            <span className="text-brand-primary relative inline-block">
              Boas Mãos.
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-brand-accent/30 blur-sm rounded-full"></span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed font-medium"
          >
            Conectamos você aos melhores eletricistas, encanadores e técnicos de
            Moçambique. Rápido, seguro e garantido.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-panel p-2 rounded-3xl flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex items-center flex-1 px-4 py-3 w-full">
              <Search className="w-5 h-5 text-muted-foreground/70 mr-3" />
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="O que você precisa hoje?"
                className="bg-transparent border-0 outline-none w-full text-foreground font-medium placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              />
            </div>
            <Button className="w-full md:w-auto bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-6 rounded-2xl font-bold transition-all shadow-[0_10px_20px_-5px_hsla(var(--brand-accent)/0.3)] hover:shadow-[0_10px_30px_-5px_hsla(var(--brand-accent)/0.5)] hover:-translate-y-1">
              Buscar
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Slideshow Area */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="block relative perspective-1000 mt-8 lg:mt-0"
        >
          {/* Container do Slideshow */}
          <div className="rounded-3xl lg:rounded-[40px] overflow-hidden border-[6px] border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm relative z-10 aspect-[4/3]">
            {/* Aqui está o componente do Carrossel substituindo a imagem <img> */}
            <HeroCarousel />
          </div>

          {/* Decorative Elements behind slideshow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 rounded-[48px] blur-xl -z-10 opacity-70" />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                <span className="text-green-500 text-xl font-bold">✓</span>
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">+500</p>
                <p className="text-sm text-muted-foreground font-medium">
                  Profissionais Verificados
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;