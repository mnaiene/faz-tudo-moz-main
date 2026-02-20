import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Instalação Elétrica",
    description: "Reparações rápidas, instalações completas e manutenção preventiva para sua casa ou empresa.",
    image: "https://images.unsplash.com/photo-1581094794329-cd1096a7a5e1?q=80&w=2000&auto=format&fit=crop",
    color: "bg-blue-600",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Canalização",
    description: "Resolução de fugas, desentupimentos e instalação de loiças sanitárias com garantia.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop",
    color: "bg-orange-600",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Climatização",
    description: "Instalação e manutenção de Ar Condicionado para enfrentar o calor de Maputo.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
    color: "bg-slate-900",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Pintura & Acabamentos",
    description: "Renove o visual da sua casa com pintores profissionais e acabamentos de luxo.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
    color: "bg-green-600",
    textColor: "text-white"
  }
];

interface CardProps {
  i: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  rotation: string;
}

const Card = ({ i, title, description, image, color, textColor, progress, range, targetScale, rotation }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={`relative flex flex-col w-[1000px] h-[500px] rounded-[2.5rem] p-10 origin-top shadow-2xl border border-white/10 ${color} ${rotation} transition-transform duration-500`}
      >
        <div className="grid lg:grid-cols-5 gap-8 h-full">
          {/* Texto */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-4">
            <div>
              <h3 className={`text-3xl md:text-5xl font-black ${textColor} mb-6 leading-none tracking-tight`}>
                {title}
              </h3>
              <p className={`text-lg ${textColor} opacity-90 leading-relaxed font-medium`}>
                {description}
              </p>
            </div>
            <Button className="w-fit bg-white text-black hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-bold group shadow-xl">
              Agendar Agora
              <ArrowUpRight className="ml-3 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </Button>
          </div>

          {/* Imagem */}
          <div className={`lg:col-span-2 relative h-full w-full rounded-[1.5rem] overflow-hidden border-4 border-white/10 shadow-inner group`}>
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StickyServices = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div id="servicos" ref={container} className="bg-background relative pt-24 pb-48">
      <div className="max-w-7xl mx-auto mb-16 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground mb-6"
        >
          Nossos Serviços
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-xl max-w-2xl mx-auto"
        >
          Excelência técnica em cada detalhe.
        </motion.p>
      </div>

      <div className="px-6">
        {services.map((project, i) => {
          const targetScale = 1 - ((services.length - i) * 0.05);
          // Alternated rotation for crooked effect
          const rotation = i % 2 === 0 ? "rotate-2" : "-rotate-2";

          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              rotation={rotation}
            />
          );
        })}
      </div>
    </div>
  );
};