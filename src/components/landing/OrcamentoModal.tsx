import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface OrcamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrcamentoModal = ({ isOpen, onClose }: OrcamentoModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);
    toast.success("Pedido enviado com sucesso!", {
      description: "Entraremos em contacto com o seu orçamento.",
    });
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 bg-gray-100/50 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center text-center p-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-2">Pedido Recebido!</h2>
                  <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                    Obrigado pela preferência. A nossa equipa irá analisar o seu pedido e enviar um orçamento em breve.
                  </p>
                </div>
                <Button
                  onClick={handleClose}
                  className="w-full max-w-xs bg-brand-primary text-white hover:bg-brand-primary/90 h-12 rounded-xl text-lg font-bold"
                >
                  Voltar ao Site
                </Button>
              </div>
            ) : (
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-3xl font-black text-brand-dark tracking-tight mb-2">
                    Pedir <span className="text-brand-primary">Orçamento</span>
                  </h2>
                  <p className="text-muted-foreground font-medium">
                    Descreva o que precisa e receba propostas de profissionais qualificados.
                  </p>
                </div>

                {/* Form Content - Scrollable */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                  <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">

                    {/* Contact Info Section */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-accent"></span>
                        Seus Dados
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <div className="relative">
                            <Input id="name" required placeholder="Seu nome" className="pl-4 bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0 transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone / WhatsApp</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="phone" type="tel" required placeholder="+258 84 123 4567" className="pl-10 bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0 transition-all" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email (Opcional)</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="email" type="email" placeholder="seu@email.com" className="pl-10 bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0 transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Localização</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input id="location" required placeholder="Cidade, Bairro" className="pl-10 bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-gray-100 w-full" />

                    {/* Service Details Section */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-accent"></span>
                        Detalhes do Serviço
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service-type">Tipo de Serviço</Label>
                          <Select required>
                            <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0">
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="eletricidade">Eletricidade</SelectItem>
                              <SelectItem value="canalizacao">Canalização</SelectItem>
                              <SelectItem value="climatizacao">Climatização (AC)</SelectItem>
                              <SelectItem value="pintura">Pintura</SelectItem>
                              <SelectItem value="limpeza">Limpeza</SelectItem>
                              <SelectItem value="obras">Pequenas Obras</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Para quando?</Label>
                          <Select required>
                            <SelectTrigger className="bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0">
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">O mais rápido possível</SelectItem>
                              <SelectItem value="week">Esta semana</SelectItem>
                              <SelectItem value="month">Este mês</SelectItem>
                              <SelectItem value="flexible">Flexível</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Descrição do Pedido</Label>
                        <Textarea
                          id="description"
                          required
                          placeholder="Descreva o problema ou o que precisa ser feito com o máximo de detalhes possível..."
                          rows={4}
                          className="bg-gray-50 border-gray-200 focus:border-brand-primary focus:ring-0 resize-none min-h-[100px]"
                        />
                      </div>
                    </div>

                  </form>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
                  <p className="text-xs text-muted-foreground text-center md:text-left">
                    Ao enviar, concorda com os nossos <a href="#" className="underline hover:text-brand-primary">termos de serviço</a>.
                  </p>
                  <Button
                    type="submit"
                    form="quote-form"
                    disabled={isLoading}
                    className="w-full md:w-auto min-w-[200px] bg-brand-primary hover:bg-brand-primary/90 text-white h-12 rounded-xl font-bold shadow-lg shadow-brand-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Orçamento"
                    )}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrcamentoModal;
