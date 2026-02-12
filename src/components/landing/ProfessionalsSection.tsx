import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProfessionals } from "@/contexts/ProfessionalsContext";

const ProfessionalsSection = () => {
  const { professionals } = useProfessionals();

  return (
    <section id="profissionais" className="py-24 bg-background relative overflow-hidden">
      {/* Mesh Background for Professionals */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-4xl font-black text-foreground tracking-tight">
              Profissionais Certificados
            </h2>
            <p className="text-muted-foreground font-medium mt-2">
              Confira os perfis com as melhores avaliações da semana.
            </p>
          </div>
          <a
            href="#"
            className="text-brand-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all"
          >
            Ver todos{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-[2.5rem] p-8 card-hover h-full flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    {pro.image ? (
                      <img
                        src={pro.image}
                        alt={pro.name}
                        className="w-20 h-20 rounded-3xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-3xl bg-muted/20 flex items-center justify-center border border-muted/30">
                        <span className="text-3xl">👷</span>
                      </div>
                    )}
                    {pro.isPro && (
                      <span className="absolute -bottom-2 -right-2 bg-brand-primary text-white text-[10px] px-2 py-1 rounded-lg font-black uppercase shadow-lg shadow-brand-primary/20">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1.5 rounded-full text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3" /> BI VALIDADO
                  </div>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-1">
                  {pro.name}
                </h3>
                <p className="text-brand-primary font-bold text-sm mb-6">
                  {pro.role}
                </p>

                {pro.skills && (
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {pro.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 text-muted-foreground text-[10px] font-bold px-3 py-1 rounded-lg border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 mb-8">
                  <div>
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                      Avaliação
                    </span>
                    <span className="text-lg font-black text-foreground flex items-center">
                      <Star className="w-4 h-4 text-brand-accent fill-brand-accent mr-1" />
                      {pro.rating}
                      {pro.reviews && (
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          ({pro.reviews})
                        </span>
                      )}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                      Local
                    </span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {pro.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-black text-foreground">
                      {pro.price}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground ml-1">
                      {pro.priceUnit}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-2 border-white/10 hover:border-brand-primary hover:text-brand-primary bg-transparent text-muted-foreground px-6 py-2 rounded-2xl font-bold transition-all"
                  >
                    Perfil
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
