import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alexsandro Braga",
      role: "CEO & Tecnologia",
      description: "Liderança em Defesa Cibernética e Transformação Digital. Visão estratégica que une profundidade técnica e sensibilidade humana.",
      bio: "Formação em Defesa Cibernética com certificações de IBM, USP e Cisco. Especialista em unir tecnologia de ponta com estratégias de proteção empresarial.",
    },
    {
      name: "Dr. Gustavo Rocco",
      role: "Advogado Sócio",
      description: "Especialista em Direito Processual Civil, Consumidor e Tributário.",
      bio: "Formação multidisciplinar em Direito e Contábeis, oferece visão integrada e estratégica em Contencioso. Atuação focada em resultados mensuráveis para clientes corporativos.",
    },
    {
      name: "Dra. Raffaella Bernardino",
      role: "Especialista em Propriedade Intelectual",
      description: "Atuação sólida Brasil e Portugal. Visão de negócios e resultados.",
      bio: "Mente estratégica em Propriedade Intelectual, com abordagem prática orientada a performance. Experiência internacional em defesa de marcas e patentes.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
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

      <Footer />
    </div>
  );
};

export default About;
