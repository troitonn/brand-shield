import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WAGR</h3>
            <p className="text-sm text-background/80">
              Protegemos ideias. Blindamos marcas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-colors">
                  Registro de Marca
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-colors">
                  Monitoramento
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-colors">
                  Defesa Jurídica
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-colors">
                  Gestão B2B
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre a WAGR
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">contato@wagr.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; 2024 WAGR. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-background transition-colors">
              Privacidade
            </Link>
            <Link to="#" className="hover:text-background transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
