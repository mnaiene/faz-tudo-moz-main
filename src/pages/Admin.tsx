import { useState } from "react";
import { useProfessionals, Application, Professional } from "@/contexts/ProfessionalsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Trash2, ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { applications, professionals, approveApplication, rejectApplication, deleteProfessional } = useProfessionals();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@faztudo.co.mz" && password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Credenciais incorretas!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative">
        <a href="/" className="absolute top-8 left-8 text-brand-dark hover:text-brand-primary flex items-center gap-2 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Voltar ao site
        </a>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-brand-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Acesso Administrativo</CardTitle>
            <CardDescription>Entre com suas credenciais de administrador</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg"
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg"
              />
              <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOpenOrcamento={() => { }} /> {/* Pass empty handler as we don't need budget here */}

      <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-brand-dark">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie candidaturas e profissionais.</p>
          </div>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Sair</Button>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <TabsTrigger value="pending" className="data-[state=active]:bg-brand-primary data-[state=active]:text-white rounded-lg px-6">
              Candidaturas Pendentes ({applications.length})
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-brand-primary data-[state=active]:text-white rounded-lg px-6">
              Profissionais Ativos ({professionals.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {applications.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <ShieldCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">Nenhuma candidatura pendente</h3>
              </div>
            ) : (
              applications.map((app) => (
                <Card key={app.id} className="overflow-hidden border-l-4 border-l-brand-warning">
                  <CardHeader className="bg-white border-b border-gray-50 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                          {app.name}
                          <Badge variant="outline" className="text-xs font-normal bg-brand-warning/10 text-brand-warning border-brand-warning/20">
                            Pendente
                          </Badge>
                        </CardTitle>
                        <CardDescription>{app.experience} de experiência • {app.location}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-brand-primary">
                          {app.service === 'other' ? app.otherService : app.service}
                        </div>
                        <div className="text-xs text-muted-foreground pt-1">
                          {new Date(app.submittedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bio</span>
                        <p className="text-gray-700 mt-1">{app.bio}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contato</span>
                          <p className="font-medium">{app.phone}</p>
                          <p className="text-sm text-gray-500">{app.email}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Expectativa</span>
                          <p className="font-medium">
                            {app.amount ? `${app.amount} MT` : 'A Combinar'}
                            <span className="text-xs font-normal text-gray-400 ml-1">
                              {app.paymentType === 'monthly' ? '/mês' : app.paymentType === 'visit' ? '/visita' : ''}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Documentos */}
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">Documentos Submetidos</span>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="space-y-1">
                            <span className="text-[10px] text-gray-500">Foto de Perfil</span>
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                              {app.photo ? (
                                <a href={app.photo} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
                                  <img src={app.photo} alt="Foto" className="w-full h-full object-cover" />
                                </a>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">Sem Foto</div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] text-gray-500">BI Frente</span>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                              {app.idFront ? (
                                <a href={app.idFront} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
                                  <img src={app.idFront} alt="BI Frente" className="w-full h-full object-cover" />
                                </a>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">Sem Imagem</div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] text-gray-500">BI Verso</span>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                              {app.idBack ? (
                                <a href={app.idBack} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
                                  <img src={app.idBack} alt="BI Verso" className="w-full h-full object-cover" />
                                </a>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">Sem Imagem</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3 border-l pl-8 border-gray-100">
                      <Button onClick={() => approveApplication(app.id)} className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" /> Aprovar e Publicar
                      </Button>
                      <Button onClick={() => rejectApplication(app.id)} variant="destructive" className="w-full">
                        <XCircle className="w-4 h-4 mr-2" /> Rejeitar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="active" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((pro) => (
              <Card key={pro.id} className="group hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex justifying-between items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      {pro.image ? (
                        <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl">👷</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold">{pro.name}</CardTitle>
                      <CardDescription className="line-clamp-1">{pro.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>{pro.location}</span>
                    <span className="font-bold text-brand-primary">{pro.price} {pro.priceUnit}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => {
                      if (window.confirm(`Tem certeza que deseja remover ${pro.name}?`)) {
                        deleteProfessional(pro.id);
                      }
                    }}
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Remover
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
