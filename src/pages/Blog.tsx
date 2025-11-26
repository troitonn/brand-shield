import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Registro de Marca",
    "Monitoramento",
    "Jurídico",
    "B2B",
  ];

  const articles = [
    {
      title: "A Importância do Registro de Marca: Protegendo o Patrimônio Imaterial da Sua Empresa",
      excerpt: "No cenário empresarial contemporâneo, a identidade da marca tornou-se um dos ativos mais valiosos de qualquer empreendimento. Descubra por que o registro junto ao INPI é essencial para garantir segurança jurídica e exclusividade nacional.",
      category: "Registro de Marca",
      date: "20 Nov 2024",
      readTime: "12 min",
    },
    {
      title: "Os Erros Mais Comuns no Registro de Marca e Como Evitá-los",
      excerpt: "Registrar uma marca é cercado de aspectos técnicos e legais que, se mal conduzidos, podem comprometer totalmente a segurança do negócio. Conheça os principais erros e como evitá-los com assessoria especializada.",
      category: "Registro de Marca",
      date: "18 Nov 2024",
      readTime: "10 min",
    },
    {
      title: "A Diferença Entre Nome Empresarial, Nome de Domínio e Marca Registrada",
      excerpt: "Entenda as diferenças fundamentais entre esses institutos jurídicos e como proteger sua identidade empresarial de forma completa. Cada um possui natureza distinta e proteções específicas.",
      category: "Jurídico",
      date: "15 Nov 2024",
      readTime: "11 min",
    },
    {
      title: "Como Funciona o Processo de Registro de Marca: Entenda Antes de Agir",
      excerpt: "O procedimento vai muito além do simples preenchimento de um formulário. Conheça todas as etapas técnicas, prazos e exigências do processo junto ao INPI e por que contar com profissionais especializados.",
      category: "Registro de Marca",
      date: "12 Nov 2024",
      readTime: "9 min",
    },
    {
      title: "A Importância do Monitoramento de Marcas",
      excerpt: "Entenda por que o monitoramento contínuo é essencial para proteger sua marca contra uso indevido.",
      category: "Monitoramento",
      date: "10 Nov 2024",
      readTime: "6 min",
    },
    {
      title: "Liminares em Propriedade Intelectual",
      excerpt: "Como obter tutelas de urgência para proteger sua marca rapidamente contra concorrentes.",
      category: "Jurídico",
      date: "05 Nov 2024",
      readTime: "10 min",
    },
    {
      title: "Gestão de Marcas para Escritórios de Advocacia",
      excerpt: "Soluções tecnológicas para escritórios escalarem a gestão de propriedade intelectual.",
      category: "B2B",
      date: "01 Nov 2024",
      readTime: "7 min",
    },
    {
      title: "Classes de Marca: Qual Escolher?",
      excerpt: "Guia prático para escolher as classes corretas no registro de marca no INPI.",
      category: "Registro de Marca",
      date: "28 Out 2024",
      readTime: "5 min",
    },
    {
      title: "Uso Indevido de Marca: Como Agir",
      excerpt: "Ações jurídicas disponíveis quando sua marca é copiada ou usada sem autorização.",
      category: "Jurídico",
      date: "22 Out 2024",
      readTime: "9 min",
    },
  ];

  const filteredArticles =
    selectedCategory === "Todos"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-brand-ice to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights sobre Propriedade Intelectual
            </h1>
            <p className="text-xl text-muted-foreground">
              Mantenha-se atualizado com as estratégias de blindagem e as últimas notícias do INPI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    {article.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Blog;
