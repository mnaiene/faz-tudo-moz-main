import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Column: Quem Somos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm mb-6 border border-brand-primary/20">
              <ShieldCheck className="w-4 h-4" />
              Sua plataforma de confiança
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Ajudamos a cuidar da sua casa com <span className="text-brand-primary">segurança</span>.
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-8">
              Somos a <strong className="text-foreground">Faz Tudo Express</strong>, a primeira plataforma em África que conecta clientes a profissionais de reparo doméstico qualificados, facilitando a resolução de problemas em casa de forma rápida, segura e eficiente.
              <br /><br />
              Nosso objetivo é tornar a vida das pessoas mais fácil, oferecendo soluções práticas e de confiança.
            </p>
          </motion.div>

          {/* Right Column: Cards for Missão e Visão */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-xl bg-card/50 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">A Nossa Missão</h3>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                  Conectar clientes a profissionais de reparo doméstico confiáveis, oferecendo soluções rápidas e de qualidade, com foco na satisfação e segurança.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-xl bg-card/50 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">A Nossa Visão</h3>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                  Ser a plataforma líder de reparos domésticos em África, reconhecida pela eficiência, confiança e inovação.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
