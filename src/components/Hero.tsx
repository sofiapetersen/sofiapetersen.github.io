
import { MessageCircle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Automatize seu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> negócio</span>
              <br />
              com inteligência
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Criamos automações e chatbots para WhatsApp que revolucionam a forma como você se comunica com seus clientes. Aumente suas vendas, reduza custos e melhore o atendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Ver Serviços
              </a>
              <a
                href="https://wa.me/5551996413357"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300"
              >
                Falar Conosco
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <MessageCircle className="text-yellow-500 mb-4" size={40} />
                    <h3 className="font-semibold text-gray-800 mb-2">ChatBots</h3>
                    <p className="text-gray-600 text-sm">Atendimento 24/7 automatizado</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Zap className="text-yellow-500 mb-4" size={40} />
                    <h3 className="font-semibold text-gray-800 mb-2">Automações</h3>
                    <p className="text-gray-600 text-sm">Processos inteligentes e eficientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
