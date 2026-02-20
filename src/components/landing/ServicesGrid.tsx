import { motion } from "framer-motion";
import {
  Zap, Plug, Hammer, Sparkles, Box, Leaf, Paintbrush,
  Droplet, Shield, Snowflake, Waves, AppWindow,
  DoorOpen, Wrench, Sun, Flame, Umbrella, LineChart
} from "lucide-react";

const standardServices = [
  { name: "Reparos de electricidade e electrónica", icon: <Zap className="w-6 h-6" /> },
  { name: "Manutenção de equipamentos domésticos", icon: <Plug className="w-6 h-6" /> },
  { name: "Serviços de carpintaria e serralharia", icon: <Hammer className="w-6 h-6" /> },
  { name: "Limpeza e organização de espaços", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Instalação de equipamentos e móveis", icon: <Box className="w-6 h-6" /> },
  { name: "Jardinagem e limpeza de terrenos", icon: <Leaf className="w-6 h-6" /> },
  { name: "Pintura e decoração de interiores", icon: <Paintbrush className="w-6 h-6" /> },
  { name: "Reparos de tubulações e saneamento", icon: <Droplet className="w-6 h-6" /> },
  { name: "Instalação de sistemas de segurança", icon: <Shield className="w-6 h-6" /> },
  { name: "Manutenção de ar condicionado", icon: <Snowflake className="w-6 h-6" /> },
  { name: "Serviços de limpeza de piscinas", icon: <Waves className="w-6 h-6" /> },
  { name: "Instalação de cortinas e persianas", icon: <AppWindow className="w-6 h-6" /> },
  { name: "Reparos de portas e janelas", icon: <DoorOpen className="w-6 h-6" /> },
  { name: "Serviços de desentupimento", icon: <Wrench className="w-6 h-6" /> },
];

const specializedServices = [
  { name: "Instalação de sistemas solares", icon: <Sun className="w-6 h-6" /> },
  { name: "Reparos de sistemas de gás", icon: <Flame className="w-6 h-6" /> },
  { name: "Serviços de impermeabilização", icon: <Umbrella className="w-6 h-6" /> },
  { name: "Consultoria em eficiência energética", icon: <LineChart className="w-6 h-6" /> },
];

export const ServicesGrid = () => {
  return (
    <section id="todos-servicos" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-foreground mb-4"
          >
            Serviços Disponíveis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            A lista completa de soluções para todos os imprevistos da sua casa, feitos por profissionais qualificados.
          </motion.p>
        </div>

        {/* Serviços Normais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {standardServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-background rounded-2xl p-6 border border-border hover:border-brand-primary/50 hover:shadow-lg transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-muted/30 rounded-xl flex items-center justify-center text-foreground group-hover:bg-brand-primary group-hover:text-white transition-colors mb-4">
                {service.icon}
              </div>
              <h4 className="font-bold text-foreground text-sm leading-snug">
                {service.name}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Serviços Especializados */}
        <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-[2.5rem] p-8 md:p-12 border border-brand-primary/20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-foreground mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand-primary" />
                Serviços Especializados
              </h3>
              <p className="text-muted-foreground font-medium">
                Requerem técnicos com certificações específicas para sua maior segurança e qualidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-brand-primary/20"
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-foreground text-sm leading-snug">
                  {service.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
