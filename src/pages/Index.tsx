import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Shield,
  Eye,
  Scale,
  Building2,
  Search,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-sunrise.jpg";
import manifestoImage from "@/assets/manifesto-forest.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const services = [
    {
      icon: Search,
      title: "Análise de Viabilidade",
      description: "Verificação de risco + chances reais de aprovação antes do registro.",
    },
    {
      icon: Shield,
      title: "Registro de Marca",
      description: "Protocolo com redação técnica + acompanhamento total no INPI.",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "RPI, redes sociais, domínios e tráfego pago sob vigilância constante.",
    },
    {
      icon: Scale,
      title: "Defesa Jurídica",
      description: "Liminares, derrubadas, notificações e ações completas de proteção.",
    },
    {
      icon: Building2,
      title: "Gestão para Escritórios (B2B)",
      description: "Automação e escalabilidade com dashboard WAGR exclusivo.",
    },
  ];

  const benefits = [
    "Exclusividade nacional (INPI)",
    "Blindagem jurídica completa",
    "Ações rápidas contra cópia",
    "Redução de risco comercial",
    "Segurança para escalar",
    "Avaliação contínua da marca",
  ];

  const testimonials = [
    {
      quote: "Tivemos um concorrente usando nossa marca — a WAGR conseguiu liminar em 48h.",
      author: "CEO, Tech Startup",
    },
    {
      quote: "Evitei um indeferimento graças à análise prévia detalhada.",
      author: "Empreendedor",
    },
    {
      quote: "Conseguimos derrubar perfis falsos que estavam desviando clientes.",
      author: "Gerente de Marketing",
    },
  ];

  const faqItems = [
    {
      question: "Por que registrar minha marca?",
      answer: "Só o registro no INPI garante exclusividade legal no Brasil (Lei 9.279/96). Sem ele, você pode perder seu nome para concorrentes.",
    },
    {
      question: "Quanto tempo leva o processo?",
      answer: "Geralmente de 8 a 24 meses, dependendo da classe e fluxo do INPI. Durante todo o processo, acompanhamos cada etapa.",
    },
    {
      question: "Posso registrar sozinho?",
      answer: "Pode, mas recomenda-se análise jurídica prévia para evitar indeferimento e perda de investimento.",
    },
    {
      question: "A WAGR é escritório de advocacia?",
      answer: "Atuamos com advogados especialistas integrados à nossa plataforma tecnológica, unindo o melhor dos dois mundos.",
    },
    {
      question: "E se copiarem minha marca?",
      answer: "Entramos com liminar para retirada imediata e medidas judiciais completas de perdas e danos.",
    },
    {
      question: "Registro garante direito ao nome da empresa?",
      answer: "Sim — você passa a ter exclusividade nacional para usar aquela marca no seu segmento de atuação.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>
        
        <div className="relative z-10 section-container text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            Protegemos ideias.<br />Blindamos marcas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Registro, monitoramento e defesa jurídica com precisão e tecnologia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contato">Registrar minha marca</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/contato">Falar com o Jurídico</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sobre a WAGR */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              A união entre tech e direito.
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              A WAGR une tecnologia, advocacia especializada e estratégia de marca. 
              Protegemos negócios do início ao fim — do nome ao crescimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jurídico */}
      <section className="py-20 bg-brand-ice">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Atuação jurídica especializada em Propriedade Intelectual.
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Registro no INPI",
                "Análises e pareceres",
                "Oposições e defesas",
                "Liminares para retirada imediata",
                "Processos de uso indevido",
                "Perdas e danos",
                "Recursos e contencioso",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Monitoramento */}
      <section className="py-20 bg-brand-ice">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Proteção contínua da sua marca.
            </h2>
            <p className="text-lg mb-8">
              Monitoramos semanalmente: Marcas semelhantes • Nomes • Logos • Domínios • 
              Páginas falsas • Campanhas pagas com uso indevido.
            </p>
            <div className="bg-background p-6 rounded-lg border-l-4 border-accent">
              <p className="font-semibold">
                Ao detectar risco → notificamos → agimos → defendemos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Uso Indevido */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">
              Liminares e Ações Contra Uso Indevido.
            </h2>
            <p className="text-lg text-center mb-8">
              Detectamos cópia, concorrência desleal e perfis falsos.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Tutela de urgência (liminar imediata)",
                "Ações de Obrigação de Fazer",
                "Perdas e danos",
                "Derrubada de páginas",
                "Relatórios periciais",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <AlertTriangle className="text-accent flex-shrink-0" size={20} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-brand-ice">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Sua Marca Blindada.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-lg shadow-sm border border-border"
                >
                  <TrendingUp className="text-primary mb-3" size={24} />
                  <p className="font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos / Prova Social */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Resultados que Blindam.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <Users className="text-accent mb-4" size={32} />
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-ice">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Dúvidas comuns sobre registro e proteção de marcas
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manifestoImage})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 section-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-white leading-relaxed max-w-4xl mx-auto"
          >
            Marcas nascem de histórias. Nós garantimos que elas cresçam protegidas.<br />
            <span className="font-bold">Tecnologia + Direito + Estratégia.</span><br />
            Somos WAGR.
          </motion.p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              Sua marca merece proteção real.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <Link to="/contato">Registrar agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contato">Falar com o Jurídico</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
