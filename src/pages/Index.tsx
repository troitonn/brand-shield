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

  <div className="relative z-10 section-container text-center pt-28 pb-16 font-inter">
    
    {/* Tag — menos espaçamento */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-5 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
    >
      <span className="text-white/80 tracking-wide text-sm font-medium">
        Propriedade Intelectual
      </span>
    </motion.div>

    {/* Título — menos distância vertical */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-white font-semibold mb-6 max-w-4xl mx-auto 
                 text-5xl md:text-7xl leading-[1.07] tracking-tight"
    >
      Protegemos ideias.
      <br />
      <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
        Blindamos marcas.
      </span>
    </motion.h1>

    {/* Subtitulo — mais próximo do título */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="text-white/70 text-xl md:text-2xl max-w-2xl mx-auto 
                 leading-relaxed tracking-tight mb-8"
    >
      Registro, monitoramento e defesa jurídica com precisão, tecnologia e excelência.
    </motion.p>

    {/* Botões — reduzido o espaçamento acima */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
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
        className="border-white/20 text-orange-400 hover:bg-white/10 
                   backdrop-blur-sm font-medium text-lg px-8 py-6 rounded-2xl"
        asChild
      >
        <Link to="/contato">Falar com o Jurídico</Link>
      </Button>
    </motion.div>

    {/* Indicadores — mais próximos ainda */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-base"
    >
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-white/70" />
        <span>+1000 negócios fortalecidos</span>
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
  <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LADO ESQUERDO — TEXTO */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-xl"
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

    {/* LADO DIREITO — IMAGEM */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      <div className="relative w-full max-w-md">
        <img
          src="/src/assets/WARGsorriso.png"
          alt="Equipe WAGR"
          className="w-full object-contain drop-shadow-2xl rounded-xl"
        />

        {/* DEGRADÊ FLUTUANTE NA BASE */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
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
                Atuação Judicial e Extrajudicial especializada em <span className="gradient-text">Propriedade Intelectual</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Registro no INPI",
                "Oposições e defesas",
                "Análises e pareceres",
                "Liminares para retirada imediata",
                "Processos de uso indevido",
                "Perdas e danos",
                "Monitoramento da marca",
                "Notificações Extrajudiciais",
                "Análise de uso indevido online",
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

      {/* Manifesto - Apple-Style Innovation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={manifestoImage}
            alt="Manifesto WAGR"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 section-container py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto space-y-16"
          >
            {/* Main Statement */}
            <div className="space-y-8">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                Marcas nascem de histórias.
              </h2>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #FF7A22 0%, #FFB088 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nós garantimos que elas cresçam protegidas.
              </motion.h3>
            </div>

            {/* DNA Pills - Apple Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-8"
            >
              {["Tecnologia", "Direito", "Estratégia"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.15),
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle, rgba(255,122,34,0.6) 0%, transparent 70%)",
                    }}
                  />
                  
                  <div 
                    className="relative px-6 md:px-10 py-3 md:py-4 rounded-full backdrop-blur-xl border transition-all duration-500 group-hover:scale-105"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 122, 34, 0.3)",
                      boxShadow: "0 0 20px rgba(255,122,34,0.1), inset 0 0 20px rgba(255,255,255,0.05)",
                    }}
                  >
                    <span 
                      className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-white"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        textShadow: "0 0 20px rgba(255,122,34,0.3)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtle separator dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true }}
              className="flex justify-center pt-8"
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: "rgba(255, 122, 34, 0.6)",
                  boxShadow: "0 0 20px rgba(255,122,34,0.8)",
                }}
              />
            </motion.div>
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
