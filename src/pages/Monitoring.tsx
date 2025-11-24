import { motion } from "framer-motion";
import { Eye, Globe, Share2, Search, AlertCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Monitoring = () => {
  const monitoringAreas = [
    {
      icon: Eye,
      title: "Monitoramento RPI",
      description: "Acompanhamos semanalmente a Revista de Propriedade Industrial (RPI) para detectar pedidos de registro semelhantes à sua marca.",
    },
    {
      icon: Share2,
      title: "Monitoramento de Redes",
      description: "Rastreamos perfis falsos, uso indevido de logo e nome em todas as principais redes sociais e plataformas digitais.",
    },
    {
      icon: Globe,
      title: "Monitoramento de Domínios",
      description: "Verificamos registros de domínios similares que possam causar confusão ou desvio de clientes do seu negócio.",
    },
    {
      icon: Search,
      title: "Detecção Visual",
      description: "Utilizamos tecnologia de reconhecimento de imagem para identificar cópias do seu logo e identidade visual.",
    },
    {
      icon: AlertCircle,
      title: "Tráfego Pago",
      description: "Analisamos campanhas de anúncios pagos que possam estar usando sua marca indevidamente para captar clientes.",
    },
    {
      icon: Shield,
      title: "Ações Judiciais",
      description: "Quando detectamos uso indevido, iniciamos imediatamente procedimentos de notificação, liminar e ações de contencioso.",
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brand-ice to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Proteção 360° para sua Marca
            </h1>
            <p className="text-xl text-foreground">
              Monitoramento contínuo e ações proativas para garantir que sua marca permaneça protegida em todos os ambientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {monitoringAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-brand-ice p-8 rounded-xl border-l-4 border-accent max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Como Funciona Nossa Proteção
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  1
                </div>
                <p className="font-semibold mb-2">Detectamos</p>
                <p className="text-sm text-muted-foreground">Identificamos ameaças em tempo real</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  2
                </div>
                <p className="font-semibold mb-2">Notificamos</p>
                <p className="text-sm text-muted-foreground">Você recebe alertas imediatos</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  3
                </div>
                <p className="font-semibold mb-2">Agimos</p>
                <p className="text-sm text-muted-foreground">Iniciamos as medidas cabíveis</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  4
                </div>
                <p className="font-semibold mb-2">Defendemos</p>
                <p className="text-sm text-muted-foreground">Protegemos seus direitos até o fim</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/contato">Ativar Monitoramento</Link>
            </Button>
          </motion.div>
        </div>
      </section>
  );
};

export default Monitoring;
