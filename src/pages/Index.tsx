import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import heroImage from "@/assets/hero-abstract.jpg";
import manifestoImage from "@/assets/manifesto-tech.jpg";
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
    <>
      {/* Hero Section */}
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  {/* Background minimalista Apple-style */}
  <div className="absolute inset-0">
    <img
      src={heroImage}
      alt=""
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />
  </div>

  <div className="relative z-10 section-container text-center pt-32 pb-20 font-inter">
    {/* Tag acima do título */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <span className="text-white/80 tracking-wide text-sm font-medium">
        Propriedade Intelectual
      </span>
    </motion.div>

    {/* Título Apple-style */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-white font-semibold mb-10 max-w-4xl mx-auto 
                 text-5xl md:text-7xl leading-[1.07] tracking-tight"
    >
      Protegemos ideias.
      <br />
      <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
        Blindamos marcas.
      </span>
    </motion.h1>

    {/* Subtitulo Apple-like */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto 
                 leading-relaxed tracking-tight"
    >
      Registro, monitoramento e defesa jurídica com precisão, tecnologia e excelência.
    </motion.p>

    {/* Botões minimalistas */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
    >
      <Button
        size="lg"
        className="bg-white text-black hover:bg-white/90 
                   font-medium text-lg px-8 py-6 rounded-2xl transition-all"
        asChild
      >
        <Link to="/contato">Registrar minha marca</Link>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="border-white/20 text-white hover:bg-white/10 
                   backdrop-blur-sm font-medium text-lg px-8 py-6 rounded-2xl"
        asChild
      >
        <Link to="/contato">Falar com o Jurídico</Link>
      </Button>
    </motion.div>

    {/* Trust Indicators estilo Apple */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-20 flex flex-wrap justify-center gap-10 text-white/60 text-base"
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-white/70" />
        <span>+1000 marcas protegidas</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-white/70" />
        <span>Resposta em 24h</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-white/70" />
        <span>Monitoramento contínuo</span>
      </div>
    </motion.div>
  </div>
</section>

      {/* Sobre a WAGR */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">SOBRE A WAGR</span>
            </div>
            <h2 className="font-display mb-8">
              A união entre <span className="gradient-text">tech e direito</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A WAGR une tecnologia de ponta, advocacia especializada e estratégia de marca. 
              Protegemos negócios do início ao fim — do nome ao crescimento exponencial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jurídico */}
      <section className="py-32 bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-6 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-semibold text-sm">JURÍDICO ESPECIALIZADO</span>
              </div>
              <h2 className="font-display mb-4">
                Atuação jurídica especializada em <span className="gradient-text">Propriedade Intelectual</span>
              </h2>
            </div>
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
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-semibold text-sm">NOSSOS SERVIÇOS</span>
            </div>
            <h2 className="font-display">Proteção <span className="gradient-text">completa</span> para sua marca</h2>
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
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${manifestoImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-3xl md:text-4xl text-white/90 leading-relaxed mb-8 font-display">
              Marcas nascem de histórias.
            </p>
            <p className="text-3xl md:text-4xl text-white leading-relaxed mb-8 font-display">
              Nós garantimos que elas cresçam <span className="text-accent">protegidas</span>.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white font-bold text-lg">Tecnologia</span>
              <span className="text-accent">•</span>
              <span className="text-white font-bold text-lg">Direito</span>
              <span className="text-accent">•</span>
              <span className="text-white font-bold text-lg">Estratégia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display mb-6">
              Sua marca merece <span className="gradient-text">proteção real</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Fale com nossa equipe especializada e descubra como blindar seu negócio com tecnologia e direito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-accent/90 hover:shadow-glow text-white text-lg px-8 py-6 rounded-xl font-semibold"
                asChild
              >
                <Link to="/contato">Registrar agora</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-8 py-6 rounded-xl font-semibold hover:bg-muted"
                asChild
              >
                <Link to="/contato">Falar com o Jurídico</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
