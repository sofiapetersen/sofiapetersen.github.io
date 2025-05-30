
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AutoBot</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos negócios através de automações inteligentes e chatbots para WhatsApp. Sua empresa mais eficiente e conectada com seus clientes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  ChatBots para WhatsApp
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  Automações de Processos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  WhatsApp Business API
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">
                  Analytics e Relatórios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5551996413357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <MessageCircle size={20} className="mr-3" />
                <span>(51) 99641-3357</span>
              </a>
              <div className="flex items-center text-gray-400">
                <Mail size={20} className="mr-3" />
                <span>contato@autobot.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-3" />
                <span>Porto Alegre, RS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2024 AutoBot. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
