import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const About = () => {
  const team = [
  {
    name: "Alexsandro Braga",
    role: "Sócio & Co-Founder | Tecnologia",
    description: "Liderança em Defesa Cibernética e Transformação Digital, unindo profundidade técnica, visão estratégica e foco em resultados.",
    bio: "CEO & Founder da **Troiton Projects+**. Profissional com formação em Defesa Cibernética e certificações pela IBM, USP e Cisco. Atua na construção de soluções tecnológicas seguras e escaláveis, alinhando inovação, governança e proteção empresarial para acelerar negócios."
  },
  {
    name: "Dr. Gustavo Rocco",
    role: "Sócio & Co-Founder | Advogado",
    description: "Especialista em Direito Processual Civil, Direito do Consumidor e Tributário, com atuação orientada a performance jurídica empresarial.",
    bio: "Sócio e Co-Founder do escritório **Rocco Correa Advogados**. Possui formação multidisciplinar em Direito e Ciências Contábeis, o que lhe confere visão integrada de negócios e litígios. Seu foco é a condução estratégica de contencioso com métricas, eficiência e previsibilidade jurídica."
  },
  {
    name: "Dra. Raffaella Braga Bernardino",
    role: "Sócia & Co-Founder | Advogada Especialista em Propriedade Intelectual",
    description: "Advogada com atuação no Brasil e em Portugal. Visão jurídica global com foco em marcas, imigração, contratos e compliance.",
    bio: "Founder da **BB Advocacia**. Advogada com experiência internacional, pós-graduada em Direito Digital e Compliance, e em formação de Mestrado em Business em Portugal. Atua estrategicamente em propriedade intelectual, imigração, contratos e planejamento tributário, oferecendo soluções jurídicas que conectam proteção legal, expansão de negócios e crescimento corporativo."
  }
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
              Tecnologia, Direito e Estratégia em nosso DNA
            </h1>
            <p className="text-xl text-muted-foreground">
              A WAGR nasceu da união entre expertise jurídica e inovação tecnológica. 
              Nossa missão é proteger marcas com inteligência, agilidade e precisão.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Propósito</h3>
              <p className="text-muted-foreground">
                Blindar marcas e ideias, transformando proteção jurídica em vantagem competitiva.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-muted-foreground">
                Oferecer soluções tecnológicas e jurídicas integradas para proteção completa de marcas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border text-center"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em proteção de marcas com tecnologia e excelência jurídica.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              A Liderança que Blinda Sua Marca
            </h2>
            <div className="space-y-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-accent font-semibold mb-4">{member.role}</p>
                      <p className="text-foreground mb-4">{member.description}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                    <button
                      className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">DNA WAGR</h2>
            <p className="text-xl">
              Tech + Jurídico + Estratégia = Proteção Completa
            </p>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
