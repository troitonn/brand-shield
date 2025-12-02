import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Registro de Marca",
    "Jurídico",
  ];

  const articles = [
    {
      title: "A Importância do Registro de Marca: Protegendo o Patrimônio Imaterial da Sua Empresa",
      excerpt: "No cenário empresarial contemporâneo, marcado por intensa concorrência e constante inovação, a identidade da marca tornou-se um dos ativos mais valiosos de qualquer empreendimento. Mais do que um nome, um logotipo ou um símbolo gráfico, a marca representa a essência da empresa.",
      category: "Registro de Marca",
      date: "20 Nov 2024",
      readTime: "12 min",
      author: "Raffaella Bernardino",
      slug: "importancia-registro-marca",
    },
    {
      title: "Os Erros Mais Comuns no Registro de Marca e Como Evitá-los",
      excerpt: "Registrar uma marca é um dos passos mais importantes para consolidar juridicamente a identidade de uma empresa. No entanto, o processo de registro é cercado de aspectos técnicos e legais que, se mal conduzidos, podem comprometer totalmente a segurança do negócio.",
      category: "Registro de Marca",
      date: "18 Nov 2024",
      readTime: "10 min",
      author: "Raffaella Bernardino",
      slug: "erros-comuns-registro-marca",
    },
    {
      title: "A Diferença Entre Nome Empresarial, Nome de Domínio e Marca Registrada",
      excerpt: "No ambiente empresarial, é comum que termos como nome empresarial, nome de domínio e marca registrada sejam utilizados como sinônimos. No entanto, esses institutos jurídicos possuem naturezas distintas, são regulados por órgãos diferentes e conferem proteções específicas.",
      category: "Jurídico",
      date: "15 Nov 2024",
      readTime: "11 min",
      author: "Raffaella Bernardino",
      slug: "diferenca-nome-empresarial-dominio-marca",
    },
    {
      title: "Como Funciona o Processo de Registro de Marca: Entenda Antes de Agir",
      excerpt: "Registrar uma marca é um procedimento que vai muito além do simples preenchimento de um formulário. Trata-se de um processo administrativo técnico, regido por normas jurídicas específicas, e que exige conhecimento, estratégia e acompanhamento constante.",
      category: "Registro de Marca",
      date: "12 Nov 2024",
      readTime: "9 min",
      author: "Raffaella Bernardino",
      slug: "como-funciona-processo-registro-marca",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {article.date}
                    </div>
                    <span className="font-medium text-foreground/70">{article.author}</span>
                  </div>
                  <Link to={`/blog/${article.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                    >
                      Ler artigo completo
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Blog;
