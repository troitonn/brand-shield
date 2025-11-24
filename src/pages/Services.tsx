import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Eye, Scale, Building2, Search, FileText, Bell, Gavel } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Análise de Viabilidade",
      description: "Antes de iniciar o registro, realizamos uma busca detalhada no banco de dados do INPI para verificar a disponibilidade da marca e avaliar as chances reais de aprovação. Reduzimos riscos e evitamos investimentos desnecessários.",
    },
    {
      icon: Shield,
      title: "Registro de Marca",
      description: "Cuidamos de todo o processo de registro no INPI: redação técnica do pedido, escolha correta das classes, protocolo e acompanhamento completo até a concessão. Garantimos que sua marca esteja protegida legalmente.",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Nosso sistema monitora continuamente a Revista de Propriedade Industrial (RPI), redes sociais, domínios e campanhas de tráfego pago. Detectamos ameaças em tempo real e agimos rapidamente.",
    },
    {
      icon: Scale,
      title: "Defesa Jurídica",
      description: "Quando sua marca é copiada ou usada indevidamente, nossa equipe jurídica especializada age imediatamente: liminares, notificações extrajudiciais, derrubada de páginas e ações completas de perdas e danos.",
    },
    {
      icon: Building2,
      title: "Gestão para Escritórios (B2B)",
      description: "Oferecemos soluções de automação e escalabilidade para escritórios de advocacia através do dashboard WAGR. Gerencie múltiplos clientes, processos e monitoramentos em uma única plataforma white-label.",
    },
    {
      icon: FileText,
      title: "Pareceres e Análises",
      description: "Elaboramos pareceres jurídicos especializados sobre viabilidade de registro, riscos de conflito marcário e estratégias de proteção. Documentação técnica para tomadas de decisão seguras.",
    },
    {
      icon: Bell,
      title: "Oposições e Recursos",
      description: "Defendemos seus interesses em processos de oposição contra terceiros e em recursos administrativos no INPI. Atuação estratégica para garantir a aprovação e manutenção dos seus direitos.",
    },
    {
      icon: Gavel,
      title: "Contencioso",
      description: "Representação completa em processos judiciais: ações de nulidade, abstenção de uso, perdas e danos. Nossa equipe está preparada para defender sua marca em todas as instâncias.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Serviços de Proteção e Estratégia
            </h1>
            <p className="text-xl text-muted-foreground">
              Soluções completas para registro, monitoramento e defesa da sua marca.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;
