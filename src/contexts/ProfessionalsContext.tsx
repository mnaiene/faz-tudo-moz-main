import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

// Define the shape of a Professional
export interface Professional {
  id: number;
  name: string;
  role: string;
  image: string | null;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  priceUnit: string;
  verified: boolean;
  isPro: boolean;
  available: boolean;
  skills?: string[];
  featured?: boolean;
}

// Define the shape of an Application (Registration)
export interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  otherService?: string;
  experience: string;
  bio: string;
  birthDate: string;
  location: string;
  paymentType: string;
  amount?: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  photo?: string;
  idFront?: string;
  idBack?: string;
}

interface ProfessionalsContextType {
  professionals: Professional[];
  applications: Application[];
  addApplication: (data: Omit<Application, "id" | "status" | "submittedAt">) => void;
  approveApplication: (id: string) => void;
  rejectApplication: (id: string) => void;
  deleteProfessional: (id: number) => void;
}

const ProfessionalsContext = createContext<ProfessionalsContextType | undefined>(undefined);

// Initial Mock Data
const INITIAL_PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: "João Mussagy",
    role: "Eletricista Industrial & Doméstico",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    reviews: 120,
    location: "Polana, Maputo",
    price: 800,
    priceUnit: "MT/visita",
    verified: true,
    isPro: true,
    available: true,
  },
  {
    id: 2,
    name: "Dona Ana P.",
    role: "Gestão Doméstica & Cozinha",
    image: null,
    rating: 5.0,
    reviews: 45,
    location: "Matola Rio",
    price: 1200,
    priceUnit: "MT/dia",
    verified: true,
    featured: true,
    available: true,
  },
  {
    id: 3,
    name: "Ricardo Sitoe",
    role: "Mestre de Obras & Pintura",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 30,
    location: "Maputo Centro",
    price: 1500,
    priceUnit: "MT/visita",
    verified: true,
    skills: ["Drywall", "Impermeabilização"],
    available: true,
  },
];

export const ProfessionalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [professionals, setProfessionals] = useState<Professional[]>(() => {
    const saved = localStorage.getItem("faztudo_professionals");
    return saved ? JSON.parse(saved) : INITIAL_PROFESSIONALS;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem("faztudo_applications");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("faztudo_professionals", JSON.stringify(professionals));
  }, [professionals]);

  useEffect(() => {
    localStorage.setItem("faztudo_applications", JSON.stringify(applications));
  }, [applications]);

  const addApplication = (data: Omit<Application, "id" | "status" | "submittedAt">) => {
    const newApp: Application = {
      ...data,
      id: crypto.randomUUID(),
      status: "pending",
      submittedAt: new Date().toISOString(),
    };
    setApplications((prev) => [newApp, ...prev]);
  };

  const approveApplication = (id: string) => {
    const app = applications.find((a) => a.id === id);
    if (!app) return;

    // Create new professional from application
    const newPro: Professional = {
      id: Date.now(),
      name: app.name,
      role: app.service === "other" ? app.otherService || "Profissional" : getRoleLabel(app.service),
      image: app.photo || null, // Use the uploaded photo if available
      rating: 5.0, // New pros start with 5 stars? Or 0? Let's say 5 for encouragement
      reviews: 0,
      location: app.location,
      price: app.amount ? Number(app.amount) : 0,
      priceUnit: app.paymentType === "monthly" ? "MT/mês" : "MT/visita",
      verified: true,
      isPro: true,
      available: true,
    };

    setProfessionals((prev) => [newPro, ...prev]);
    setApplications((prev) => prev.filter((a) => a.id !== id));
    toast.success(`${app.name} aprovado e adicionado à lista pública!`);
  };

  const rejectApplication = (id: string) => {
    setApplications((prev) => prev.filter((a) => a.id !== id));
    toast.info("Candidatura rejeitada.");
  };

  const deleteProfessional = (id: number) => {
    setProfessionals((prev) => prev.filter((p) => p.id !== id));
    toast.success("Profissional removido.");
  };

  return (
    <ProfessionalsContext.Provider
      value={{
        professionals,
        applications,
        addApplication,
        approveApplication,
        rejectApplication,
        deleteProfessional,
      }}
    >
      {children}
    </ProfessionalsContext.Provider>
  );
};

export const useProfessionals = () => {
  const context = useContext(ProfessionalsContext);
  if (context === undefined) {
    throw new Error("useProfessionals must be used within a ProfessionalsProvider");
  }
  return context;
};

// Helper to map service codes to labels
const getRoleLabel = (service: string) => {
  const map: Record<string, string> = {
    electrician: "Eletricista",
    plumber: "Canalizador",
    hvac: "Técnico de Climatização",
    maid: "Doméstica",
    painter: "Pintor",
    cleaning: "Limpeza Profissional",
  };
  return map[service] || service;
};
