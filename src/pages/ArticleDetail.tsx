import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const articles = {
  "importancia-registro-marca": {
    title: "A Importância do Registro de Marca: Protegendo o Patrimônio Imaterial da Sua Empresa",
    metaDescription: "Descubra por que o registro de marca junto ao INPI é essencial para garantir segurança jurídica e exclusividade nacional. Proteja o patrimônio imaterial da sua empresa.",
    category: "Registro de Marca",
    date: "20 Nov 2024",
    readTime: "12 min",
    author: "Raffaella Bernardino",
    content: `
      <p>No cenário empresarial contemporâneo, marcado por intensa concorrência e constante inovação, a identidade da marca tornou-se um dos ativos mais valiosos de qualquer empreendimento. Mais do que um nome, um logotipo ou um símbolo gráfico, a marca representa a essência da empresa, refletindo sua missão, seus valores e o relacionamento que estabelece com o público. Em meio a este contexto, o registro de marca desponta como medida essencial para garantir a segurança jurídica e o fortalecimento da presença no mercado.</p>

      <h2>O que é o Registro de Marca?</h2>
      <p>O registro de marca é o procedimento administrativo, realizado junto ao Instituto Nacional da Propriedade Industrial (INPI), que confere ao titular o direito exclusivo de uso da marca em todo o território nacional, em seu ramo de atividade. Em termos legais, está fundamentado na Lei nº 9.279/96 (Lei da Propriedade Industrial), que regula os direitos e obrigações relativos à propriedade industrial no Brasil.</p>
      <p>Por meio do registro, a marca passa a ser juridicamente protegida contra utilizações indevidas por terceiros, prevenindo casos de concorrência desleal, plágio, associação indevida e outros conflitos que possam comprometer a reputação e a credibilidade da empresa perante seus consumidores. Além disso, proporciona maior estabilidade e previsibilidade no ambiente de negócios, permitindo que o empreendedor invista com confiança em marketing, publicidade e expansão da marca.</p>

      <h2>Para que Serve o Registro de Marca?</h2>
      <p>A marca é o sinal distintivo que identifica produtos ou serviços e os diferencia dos concorrentes. Ela pode se apresentar sob diversas formas: nominativa (apenas o nome), figurativa (elemento visual), mista (nome e imagem) ou tridimensional (forma do produto ou sua embalagem). Com o registro, o empreendedor assegura:</p>
      <ul>
        <li><strong>Exclusividade:</strong> direito de uso exclusivo da marca em seu segmento;</li>
        <li><strong>Segurança jurídica:</strong> possibilidade de impedir judicialmente o uso indevido por terceiros;</li>
        <li><strong>Valoração do negócio:</strong> marcas registradas têm maior valor econômico, podendo ser licenciadas, cedidas ou vendidas;</li>
        <li><strong>Proteção contra plágio:</strong> evita que outra empresa registre a mesma marca e gere impedimentos legais para o verdadeiro criador;</li>
        <li><strong>Acesso ao mercado internacional:</strong> o registro nacional é etapa essencial para pleitear registros em outros países, ampliando as oportunidades de atuação da marca.</li>
      </ul>

      <h2>A Complexidade do Processo e a Necessidade de Apoio Profissional</h2>
      <p>Embora o procedimento de registro possa parecer simples, ele envolve diversas etapas técnicas e jurídicas, como:</p>
      <ul>
        <li>Definição da natureza da marca e da forma de apresentação adequada;</li>
        <li>Escolha correta da classe e especificação dos produtos ou serviços conforme a Classificação de Nice;</li>
        <li>Realização de busca prévia para verificar existência de marcas semelhantes já registradas;</li>
        <li>Análise de colidência com sinais preexistentes, inclusive nomes empresariais, títulos de estabelecimentos e nomes de domínio;</li>
        <li>Elaboração de manifestações em casos de oposições apresentadas por terceiros;</li>
        <li>Acompanhamento de todo o trâmite administrativo junto ao INPI, inclusive eventual interposição de recursos em caso de indeferimento.</li>
      </ul>
      <p>Cada uma dessas etapas exige conhecimento específico, experiência e atualização constante diante das mudanças nas diretrizes e interpretações adotadas pelo INPI. Um pedido mal instruído pode resultar no indeferimento do registro, ou ainda pior: na vulnerabilidade da marca a ataques de terceiros. Por isso, a atuação de uma equipe técnica especializada é fundamental para garantir que todo o processo seja conduzido com segurança e eficácia.</p>

      <h2>A Solução da WAGR: Segurança, Experiência e Excelência Jurídica</h2>
      <p>A WAGR atua de forma estratégica na proteção da identidade da sua empresa, oferecendo assessoria completa no processo de registro de marcas. Desde a análise prévia de viabilidade, até a interlocução junto ao INPI, elaboramos todo o procedimento com embasamento jurídico e técnico, minimizando riscos e maximizando a chance de deferimento.</p>
      <p>Nosso serviço não se limita à protocolização do pedido: realizamos um acompanhamento ativo do processo, com monitoramento da publicação em RPI, avaliação de oposições, elaboração de petições fundamentadas, orientação estratégica para expansão da marca, além de consultoria preventiva para evitar conflitos futuros. Tudo isso com atendimento personalizado e foco na segurança jurídica.</p>
      <p>Nosso objetivo é blindar juridicamente o seu maior ativo: a marca que representa a história, a missão e os valores do seu negócio. Contar com a WAGR é optar por segurança, transparência e comprometimento.</p>

      <h2>Conclusão</h2>
      <p>Em um mercado cada vez mais competitivo, proteger sua marca não é uma opção: é uma necessidade. E para isso, o registro junto ao INPI é o caminho legal mais seguro e eficaz. Além de garantir o reconhecimento exclusivo do seu sinal distintivo, o registro é um passo essencial para a consolidação da sua presença no mercado, prevenindo litígios e fortalecendo a imagem institucional.</p>
      <p>Evite riscos, fortaleça sua marca e garanta a longevidade do seu empreendimento. Fale com a WAGR e descubra como podemos cuidar da sua marca com a excelência jurídica que o seu negócio merece.</p>
    `,
  },
  "erros-comuns-registro-marca": {
    title: "Os Erros Mais Comuns no Registro de Marca e Como Evitá-los",
    metaDescription: "Conheça os principais erros no registro de marca junto ao INPI e saiba como evitá-los. Assessoria especializada em propriedade industrial.",
    category: "Registro de Marca",
    date: "18 Nov 2024",
    readTime: "10 min",
    author: "Raffaella Bernardino",
    content: `
      <p>Registrar uma marca é um dos passos mais importantes para consolidar juridicamente a identidade de uma empresa. Trata-se de garantir que um dos principais ativos intangíveis do negócio esteja protegido contra usos indevidos, concorrência desleal e plágio. No entanto, o que muitos empreendedores não percebem é que o processo de registro é cercado de aspectos técnicos e legais que, se mal conduzidos, podem comprometer totalmente a segurança do negócio.</p>
      <p>Na tentativa de economizar, muitos optam por realizar o procedimento por conta própria ou por meio de profissionais sem especialização na área. Como resultado, surgem falhas que levam ao indeferimento do pedido, à perda de tempo e dinheiro, e até mesmo ao risco de violação de direitos de terceiros.</p>

      <h2>Quais são os erros mais frequentes?</h2>

      <h3>1. Não realizar a busca prévia de anterioridade</h3>
      <p>Antes de protocolar o pedido de registro, é fundamental verificar se já existe marca idêntica ou semelhante registrada ou em processo de registro para o mesmo segmento de atuação. Muitos empreendedores ignoram essa etapa essencial, o que resulta em indeferimento por colidência com sinais preexistentes. A busca prévia exige conhecimento para interpretar os resultados e avaliar riscos reais de conflito.</p>

      <h3>2. Escolha errada da classe de produtos ou serviços</h3>
      <p>O INPI segue a Classificação Internacional de Nice, que organiza produtos e serviços em diferentes classes. Escolher a classe inadequada pode significar que a marca não estará protegida no ramo em que a empresa efetivamente atua. Além disso, há situações em que é estratégico registrar a marca em mais de uma classe, o que também exige avaliação especializada.</p>

      <h3>3. Erro na forma de apresentação da marca</h3>
      <p>Outro erro comum é definir de forma incorreta o tipo da marca no momento do pedido: nominativa, figurativa, mista ou tridimensional. Cada uma possui um grau diferente de proteção, e a escolha equivocada pode limitar os direitos do titular ou abrir margem para terceiros utilizarem sinais semelhantes.</p>

      <h3>4. Descrição genérica ou indevida dos produtos/serviços</h3>
      <p>Descrever mal os produtos ou serviços vinculados à marca pode gerar vulnerabilidade jurídica ou indeferimento por imprecisão. A especificação deve ser feita de acordo com os parâmetros estabelecidos pelo INPI e alinhada à atividade real da empresa.</p>

      <h3>5. Falta de acompanhamento do processo após o protocolo</h3>
      <p>Muitos acreditam que basta protocolar o pedido e aguardar a concessão. No entanto, o registro de marca é um processo dinâmico, com publicações constantes na RPI (Revista da Propriedade Industrial), e que pode demandar a apresentação de manifestações, oposições ou recursos. Deixar de acompanhar o processo pode significar perda de prazos importantes e prejuízos irreversíveis.</p>

      <h3>6. Desconhecimento das hipóteses de indeferimento automático</h3>
      <p>A legislação brasileira veda o registro de determinados sinais, como marcas genéricas, descritivas, ofensivas, enganosas ou que reproduzam bandeiras, brasões ou nomes de órgãos públicos. Protocolar um pedido com essas características é caminho certo para o indeferimento.</p>

      <h3>7. Subestimar o impacto das oposições</h3>
      <p>Durante o prazo de oposição, qualquer terceiro que se sinta prejudicado pode apresentar contestação ao pedido de registro. Não apresentar uma resposta técnica e bem fundamentada pode levar o INPI a acolher a oposição e indeferir o pedido.</p>

      <h2>Como evitar esses erros?</h2>
      <p>O caminho mais seguro é contar com uma assessoria jurídica especializada em Propriedade Industrial. O trabalho de um profissional qualificado não se limita a preencher formulários: ele atua de forma estratégica desde a fase de análise de viabilidade até o acompanhamento completo do processo junto ao INPI.</p>
      <p>A WAGR oferece exatamente esse tipo de suporte: um serviço completo, que une conhecimento jurídico técnico e experiência prática. Nós realizamos busca prévia com análise de riscos, definimos a melhor estratégia de proteção para sua marca, elaboramos petições em caso de oposições ou exigências do INPI e acompanhamos o processo até a emissão do certificado.</p>

      <h2>Conclusão</h2>
      <p>Evitar erros no processo de registro de marca é essencial para garantir a segurança jurídica do seu negócio. Cada falha representa um risco real ao reconhecimento e à exclusividade da sua marca no mercado. Com o suporte da WAGR, você assegura que todos os passos serão conduzidos com precisão, responsabilidade e compromisso com os resultados.</p>
      <p>Não deixe o futuro da sua marca vulnerável. Proteja seu maior ativo com quem entende do assunto.</p>
    `,
  },
  "diferenca-nome-empresarial-dominio-marca": {
    title: "A Diferença Entre Nome Empresarial, Nome de Domínio e Marca Registrada",
    metaDescription: "Entenda as diferenças entre nome empresarial, nome de domínio e marca registrada. Proteja sua identidade empresarial de forma completa com a WAGR.",
    category: "Jurídico",
    date: "15 Nov 2024",
    readTime: "11 min",
    author: "Raffaella Bernardino",
    content: `
      <p>No ambiente empresarial, é comum que termos como nome empresarial, nome de domínio e marca registrada sejam utilizados como sinônimos. No entanto, esses institutos jurídicos possuem naturezas distintas, são regulados por órgãos diferentes e conferem proteções específicas. Ignorar essas diferenças pode levar o empreendedor a acreditar falsamente que sua marca está protegida, quando, na realidade, ela está vulnerável a conflitos e litígios.</p>
      <p>Neste artigo, explicamos de forma clara e objetiva o que caracteriza cada um desses elementos, quais são suas respectivas proteções legais e como eles se relacionam na formação de uma identidade empresarial sólida e juridicamente segura.</p>

      <h2>1. Nome empresarial</h2>
      <p>O nome empresarial é aquele sob o qual a pessoa jurídica exerce suas atividades econômicas. Ele é registrado na Junta Comercial do Estado onde a empresa está sediada e pode assumir duas formas:</p>
      <ul>
        <li><strong>Firma:</strong> quando inclui o nome civil dos sócios, geralmente utilizada por sociedades em nome coletivo e comandita simples;</li>
        <li><strong>Denominação social:</strong> quando utiliza expressões inventadas, siglas ou palavras de fantasia, comum em sociedades limitadas e anônimas.</li>
      </ul>
      <p>O nome empresarial identifica o sujeito jurídico perante os órgãos públicos, fornecedores e instituições financeiras, mas sua proteção está restrita ao Estado onde foi registrado, salvo em casos de arquivamento simultâneo em várias Juntas Comerciais.</p>

      <h2>2. Nome de domínio</h2>
      <p>O nome de domínio é o endereço eletrônico que permite que uma empresa seja localizada na internet. No Brasil, os domínios com terminação ".br" são regulados pelo Registro.br, vinculado ao Comitê Gestor da Internet no Brasil (CGI.br).</p>
      <p>Ao registrar um domínio, a empresa obtém um direito de uso exclusivo daquele endereço na web. No entanto, esse registro não confere propriedade intelectual, tampouco impede que terceiros utilizem expressões semelhantes em marcas ou razões sociais. Além disso, muitos domínios são registrados de forma especulativa por terceiros, que não são os legítimos proprietários da marca, criando situações de conflito.</p>

      <h2>3. Marca registrada</h2>
      <p>A marca é o sinal distintivo visualmente perceptível que identifica e distingue produtos ou serviços de outros idênticos ou semelhantes. O registro é realizado perante o Instituto Nacional da Propriedade Industrial (INPI), conforme previsto na Lei nº 9.279/96 (Lei da Propriedade Industrial).</p>
      <p>Diferentemente do nome empresarial e do domínio, a marca registrada confere ao titular direito de uso exclusivo em todo o território nacional, dentro do segmento econômico em que foi registrada. Isso significa que mesmo que uma empresa possua nome empresarial e domínio registrados, se ela não registrar a marca junto ao INPI, poderá perder o direito de usá-la caso outro interessado obtenha o registro antes.</p>

      <h2>Principais diferenças entre os institutos</h2>
      <table>
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Onde se registra</th>
            <th>Finalidade</th>
            <th>Proteção geográfica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome empresarial</td>
            <td>Junta Comercial</td>
            <td>Identifica a pessoa jurídica</td>
            <td>Estadual ou nacional (limitada)</td>
          </tr>
          <tr>
            <td>Nome de domínio</td>
            <td>Registro.br</td>
            <td>Localização na internet</td>
            <td>Nacional, apenas na web</td>
          </tr>
          <tr>
            <td>Marca registrada</td>
            <td>INPI</td>
            <td>Identifica produtos ou serviços</td>
            <td>Nacional (e internacional se estendido)</td>
          </tr>
        </tbody>
      </table>

      <h2>Conflitos comuns e riscos jurídicos</h2>
      <p>É comum que empresas possuam domínio e nome empresarial registrados, mas negligenciem o registro da marca. Em tais situações, correm o risco de:</p>
      <ul>
        <li>Serem impedidas de usar sua própria marca após o registro por terceiro;</li>
        <li>Serem acionadas judicialmente por uso indevido de marca alheia;</li>
        <li>Perderem o direito de manter o domínio ou o nome empresarial em razão de conflito com marca registrada;</li>
        <li>Terem prejuízos financeiros e institucionais significativos.</li>
      </ul>

      <h2>A solução estratégica da WAGR</h2>
      <p>Na WAGR, compreendemos que a proteção completa da identidade empresarial exige uma visão integrada desses três elementos. Atuamos de forma personalizada para:</p>
      <ul>
        <li>Realizar diagnóstico da situação atual da empresa;</li>
        <li>Identificar riscos e vulnerabilidades em nome empresarial, domínio e marca;</li>
        <li>Elaborar plano de ação jurídico para regularização e registro eficaz da marca;</li>
        <li>Monitorar a existência de conflitos e preveni-los juridicamente;</li>
        <li>Garantir a coerência entre todos os sinais que compõem a identidade institucional.</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A marca não é apenas um nome bonito ou um logotipo atrativo. É um elemento jurídico essencial que deve ser protegido de forma adequada. Ter um nome empresarial e um domínio registrados é importante, mas insuficiente se a marca não estiver registrada no órgão competente.</p>
      <p>Não deixe a identidade do seu negócio vulnerável. Fale com a WAGR e descubra como proteger integralmente sua marca e construir uma presença segura e consistente no mercado.</p>
    `,
  },
  "como-funciona-processo-registro-marca": {
    title: "Como Funciona o Processo de Registro de Marca: Entenda Antes de Agir",
    metaDescription: "Entenda como funciona o processo de registro de marca no INPI. Conheça todas as etapas técnicas, prazos e exigências para proteger sua marca.",
    category: "Registro de Marca",
    date: "12 Nov 2024",
    readTime: "9 min",
    author: "Raffaella Bernardino",
    content: `
      <p>Registrar uma marca é um procedimento que vai muito além do simples preenchimento de um formulário. Trata-se de um processo administrativo técnico, regido por normas jurídicas específicas, e que exige conhecimento, estratégia e acompanhamento constante. Embora seja realizado junto ao Instituto Nacional da Propriedade Industrial (INPI), muitos desconhecem a complexidade envolvida em cada etapa, bem como os riscos de conduzi-lo sem orientação especializada.</p>

      <h2>Por que registrar uma marca?</h2>
      <p>A marca é o elemento que diferencia uma empresa das demais no mercado. Ela comunica identidade, gera confiança, fideliza clientes e agrega valor ao negócio. Mas somente com o registro a marca passa a ter proteção jurídica exclusiva. Sem ele, qualquer pessoa pode reivindicar a titularidade e impedir seu uso, inclusive judicialmente.</p>

      <h2>Como funciona o processo de registro?</h2>
      <p>O procedimento de registro de marca é composto por várias fases, cada uma com prazos, exigências e análises específicas. Embora não seja necessário ser advogado para realizar o pedido, a complexidade de algumas etapas torna altamente recomendável o acompanhamento por profissionais qualificados.</p>
      <p>De forma geral, o processo se inicia com uma análise de viabilidade, onde é feita uma busca prévia para verificar se já existe marca semelhante ou idêntica registrada ou em fase de registro. Essa fase é crucial para evitar prejuízos com pedidos fadados ao indeferimento.</p>
      <p>A seguir, é feita a elaboração do pedido, que deve conter a descrição adequada da marca, a escolha da classe correta de produtos ou serviços, a forma de apresentação (nominativa, figurativa, mista etc.) e demais informações obrigatórias. Um erro nesse momento pode comprometer a proteção da marca ou levar ao indeferimento por questões formais.</p>
      <p>Após o protocolo, o pedido é publicado na Revista da Propriedade Industrial (RPI), abrindo-se o prazo para que terceiros apresentem oposições ao registro. Essas contestações devem ser analisadas e, se for o caso, rebatidas por meio de petição fundamentada. É uma fase técnica e decisiva, pois muitas marcas são indeferidas por falta de defesa adequada.</p>
      <p>Em seguida, o INPI realiza o exame de mérito, analisando os argumentos apresentados e verificando se a marca atende aos requisitos legais. Ao final, o pedido pode ser deferido ou indeferido. Em caso de deferimento, é necessário pagar uma taxa final para a emissão do certificado de registro, que garante a titularidade pelo prazo de 10 anos, renovável por períodos iguais.</p>

      <h2>Por que contar com um profissional especializado?</h2>
      <p>Embora o processo possa parecer simples em um primeiro momento, ele envolve diversas variáveis jurídicas e técnicas que exigem experiência e formação adequada. Um profissional especializado saberá:</p>
      <ul>
        <li>Avaliar corretamente os riscos de conflito com marcas preexistentes;</li>
        <li>Redigir o pedido de forma precisa, com estratégia e segurança;</li>
        <li>Acompanhar a publicação e responder às oposições de maneira eficaz;</li>
        <li>Interpor recursos, se necessário, com argumentação jurídica embasada;</li>
        <li>Monitorar o processo e manter o cliente informado sobre todas as etapas.</li>
      </ul>
      <p>Um pedido mal elaborado ou mal defendido pode comprometer toda a identidade da empresa, gerando prejuízos financeiros, perda de mercado e conflitos jurídicos.</p>

      <h2>Como a WAGR pode te ajudar</h2>
      <p>A WAGR atua com foco na segurança e na eficiência do processo de registro. Analisamos sua marca com olhar jurídico estratégico, elaboramos pedidos consistentes, acompanhamos cada etapa com atenção técnica e respondemos com agilidade a qualquer intercorrência junto ao INPI.</p>
      <p>Mais do que registrar, nossa missão é blindar juridicamente a marca que representa o seu negócio.</p>

      <h2>Conclusão</h2>
      <p>Registrar uma marca é proteger o que há de mais valioso em uma empresa: sua identidade, sua reputação e seu futuro. O processo, embora administrativo, é jurídico por natureza e exige competência técnica. Não corra riscos desnecessários.</p>
      <p>Conte com a WAGR para garantir que sua marca esteja protegida com a seriedade e a expertise que o seu negócio merece.</p>
    `,
  },
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-ice to-background">
        <div className="section-container text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button variant="outline">Voltar ao Blog</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | WAGR - Propriedade Intelectual</title>
        <meta name="description" content={article.metaDescription} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        <link rel="canonical" href={`https://wagr.com.br/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            author: {
              "@type": "Person",
              name: article.author,
            },
            datePublished: article.date,
            publisher: {
              "@type": "Organization",
              name: "WAGR",
            },
          })}
        </script>
      </Helmet>

      <article className="pt-32 pb-20 bg-gradient-to-b from-brand-ice to-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar ao Blog
            </Link>

            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-12 pb-8 border-b border-border">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                {article.readTime} de leitura
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-4 prose-li:my-1 prose-table:my-8 prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-th:border"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4">
                Proteja sua marca com a WAGR
              </h3>
              <p className="text-muted-foreground mb-6">
                Conte com nossa equipe especializada para garantir a segurança
                jurídica da sua marca.
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Fale com um especialista
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
