import { motion } from "framer-motion";
import { Zap, Instagram, Facebook, Linkedin, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 text-foreground overflow-hidden relative">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-brand-primary/5 via-brand-dark to-brand-dark pointer-events-none" />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8 group">
              <div className="bg-white p-2 rounded-2xl shadow-lg shadow-black/20">
                <img
                  src="/Logo2.png"
                  alt="Faz Tudo Express"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.parentElement!.style.display = 'none';
                    e.currentTarget.parentElement!.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              </div>
              {/* Fallback Text Logo */}
              <div className="hidden flex items-center gap-2">
                <div className="bg-brand-primary p-2 rounded-xl">
                  <Zap className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white">
                  Faz Tudo<span className="text-brand-primary">.</span>
                  <span className="text-brand-accent">Express</span>
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              A plataforma mais confiável de África para serviços
              domésticos. Qualidade garantida em cada visita.
            </p>

            {/* Newsletter */}
            <div className="relative max-w-sm group">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="w-full glass-panel border-white/5 rounded-2xl py-6 px-6 outline-none focus:border-brand-primary/50 transition-all text-sm text-foreground placeholder:text-muted-foreground/50"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary hover:bg-brand-primary/90 p-2 px-4 rounded-xl text-sm font-bold text-white shadow-lg shadow-brand-primary/20">
                Assinar
              </Button>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">
                Serviços
              </h4>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Eletricidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Climatização
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Canalização
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Limpeza
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">
                Empresa
              </h4>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Segurança
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors duration-300"
                  >
                    Termos
                  </a>
                </li>
                <li>
                  <a
                    href="/admin"
                    className="hover:text-brand-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <Lock className="w-3 h-3" />
                    Admin
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="col-span-2 md:col-span-1"
            >
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">
                Social
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white text-muted-foreground transition-all duration-300 border border-white/5"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white text-muted-foreground transition-all duration-300 border border-white/5"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white text-muted-foreground transition-all duration-300 border border-white/5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-muted-foreground text-sm font-medium">
            © 2026 Faz Tudo Express. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-muted-foreground/60 text-xs font-bold uppercase tracking-widest">
            <span>Lagos</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Luanda</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span>Joanesburgo</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
