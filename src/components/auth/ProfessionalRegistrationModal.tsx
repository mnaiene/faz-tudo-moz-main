import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useProfessionals } from "@/contexts/ProfessionalsContext";

interface ProfessionalRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfessionalRegistrationModal({ isOpen, onClose }: ProfessionalRegistrationModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [service, setService] = useState("");
  const [paymentType, setPaymentType] = useState("undefined");
  const { addApplication } = useProfessionals();

  const convertBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const photoFile = formData.get("photo") as File;
      const idFrontFile = formData.get("idFront") as File;
      const idBackFile = formData.get("idBack") as File;

      let photoBase64 = "";
      let idFrontBase64 = "";
      let idBackBase64 = "";

      if (photoFile && photoFile.size > 0) photoBase64 = await convertBase64(photoFile);
      if (idFrontFile && idFrontFile.size > 0) idFrontBase64 = await convertBase64(idFrontFile);
      if (idBackFile && idBackFile.size > 0) idBackBase64 = await convertBase64(idBackFile);

      const applicationData = {
        name: `${formData.get("firstName")} ${formData.get("lastName")}`,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        service: service,
        otherService: formData.get("customService") as string,
        experience: formData.get("experience") as string,
        bio: formData.get("bio") as string,
        birthDate: formData.get("birthDate") as string,
        location: formData.get("location") as string,
        paymentType: paymentType,
        amount: formData.get("amount") as string,
        photo: photoBase64,
        idFront: idFrontBase64,
        idBack: idBackBase64,
      };

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      addApplication({
        ...applicationData,
        experience: formData.get("experience") as string || "3-5 anos",
      });

      setIsLoading(false);
      setIsSuccess(true);
      toast.success("Registo enviado com sucesso!", {
        description: "Entraremos em contacto em breve.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px] flex flex-col items-center text-center p-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold mb-2">Candidatura Recebida!</DialogTitle>
          <DialogDescription className="text-center mb-6">
            Obrigado pelo seu interesse em juntar-se à Faz Tudo Express. A nossa equipa irá analisar o seu perfil e entrará em contacto.
          </DialogDescription>
          <Button onClick={handleClose} className="w-full bg-brand-primary text-white hover:bg-brand-primary/90">
            Fechar
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-dark">Junte-se à Elite</DialogTitle>
          <DialogDescription>
            Preencha o formulário para se tornar um profissional verificado Faz Tudo Express.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome Próprio</Label>
              <Input name="firstName" id="firstName" required placeholder="João" className="bg-gray-50 border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apelido</Label>
              <Input name="lastName" id="lastName" required placeholder="Silva" className="bg-gray-50 border-gray-200" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Profissional</Label>
            <Input name="email" id="email" type="email" required placeholder="joao@exemplo.com" className="bg-gray-50 border-gray-200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone / WhatsApp</Label>
            <Input name="phone" id="phone" type="tel" required placeholder="+258 84 123 4567" className="bg-gray-50 border-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthDate">Data de Nascimento</Label>
              <Input name="birthDate" id="birthDate" type="date" required className="bg-gray-50 border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Localização Atual</Label>
              <Input name="location" id="location" required placeholder="Cidade, Bairro" className="bg-gray-50 border-gray-200" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Especialidade Principal</Label>
            <Select required onValueChange={setService}>
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue placeholder="Selecione sua área" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electrician">Eletricista</SelectItem>
                <SelectItem value="plumber">Canalizador</SelectItem>
                <SelectItem value="hvac">Técnico de Climatização (AC)</SelectItem>
                <SelectItem value="maid">Doméstica</SelectItem>
                <SelectItem value="painter">Pintor</SelectItem>
                <SelectItem value="cleaning">Limpeza Profissional</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="service" value={service} />
          </div>

          {service === 'other' && (
            <div className="space-y-2">
              <Label htmlFor="customService">Qual é a sua profissão?</Label>
              <Input name="customService" id="customService" required placeholder="Especifique sua área" className="bg-gray-50 border-gray-200" />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="experience">Anos de Experiência</Label>
            <Select required name="experience">
              <SelectTrigger className="bg-gray-50 border-gray-200">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2 anos">1-2 anos</SelectItem>
                <SelectItem value="3-5 anos">3-5 anos</SelectItem>
                <SelectItem value="5-10 anos">5-10 anos</SelectItem>
                <SelectItem value="10+ anos">Mais de 10 anos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="paymentType">Expectativa Salarial</Label>
              <Select required onValueChange={setPaymentType}>
                <SelectTrigger className="bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Tipo de Pagamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undefined">A Combinar</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                  <SelectItem value="visit">Por Visita</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="paymentType" value={paymentType} />
            </div>
            {paymentType !== 'undefined' && paymentType !== '' && (
              <div className="space-y-2">
                <Label htmlFor="amount">Valor ({paymentType === 'monthly' ? 'MZN/Mês' : 'MZN/Visita'})</Label>
                <Input name="amount" id="amount" type="number" required placeholder="0.00" className="bg-gray-50 border-gray-200" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="photo">Sua Foto</Label>
              <Input name="photo" id="photo" type="file" accept="image/*" required className="bg-gray-50 border-gray-200 cursor-pointer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idFront">BI (Frente)</Label>
              <Input name="idFront" id="idFront" type="file" accept="image/*" required className="bg-gray-50 border-gray-200 cursor-pointer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="idBack">BI (Verso)</Label>
              <Input name="idBack" id="idBack" type="file" accept="image/*" required className="bg-gray-50 border-gray-200 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Breve Descrição</Label>
            <Textarea
              name="bio"
              id="bio"
              placeholder="Fale um pouco sobre a sua experiência e qualificações..."
              className="bg-gray-50 border-gray-200 min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 mt-2 text-lg font-bold" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Candidatura"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
