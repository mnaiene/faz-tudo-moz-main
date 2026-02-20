import { motion } from "framer-motion";
import { ShieldCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onOpenOrcamento: () => void;
}

const CTASection = ({ onOpenOrcamento }: CTASectionProps) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-brand-primary/20"
        >
          {/* Background Blur */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-white">
            {/* Left Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight"
              >
                Pronto para resolver seus problemas?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-blue-100/90 text-xl font-medium mb-12 max-w-md"
              >
                Junte-se a milhares de africanos que confiam na Faz Tudo
                Express para cuidar do seu lar.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  onClick={onOpenOrcamento}
                  className="bg-white text-brand-primary px-10 py-6 rounded-[1.5rem] font-black text-lg hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:scale-105 transition-all"
                >
                  Pedir Orçamento Agora
                </Button>
                <Button
                  variant="ghost"
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-6 rounded-[1.5rem] font-black text-lg hover:bg-white/10 transition-all"
                >
                  Ver Preços
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="glass-panel p-8 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Segurança 100%</h4>
                <p className="text-sm text-blue-100/70 leading-relaxed font-medium">
                  BI Verificado de todos os nossos profissionais.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-panel p-8 rounded-[2.5rem] mt-4 sm:mt-12 hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Confiança</h4>
                <p className="text-sm text-blue-100/70 leading-relaxed font-medium">
                  Pagamento seguro realizado apenas após o serviço concluído.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
