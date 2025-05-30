
import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="text-yellow-500" size={40} />,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa para o crescimento do seu negócio."
    },
    {
      icon: <TrendingUp className="text-yellow-500" size={40} />,
      title: "Aumento de Vendas",
      description: "Qualifique leads automaticamente e converta mais prospects em clientes pagantes."
    },
    {
      icon: <Users className="text-yellow-500" size={40} />,
      title: "Melhor Atendimento",
      description: "Ofereça suporte 24 horas por dia, 7 dias por semana, sem aumentar sua equipe."
    },
    {
      icon: <Shield className="text-yellow-500" size={40} />,
      title: "Dados Seguros",
      description: "Todas as informações são protegidas com os mais altos padrões de segurança."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">AutoBot</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos a forma como você se relaciona com seus clientes através da tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Pronto para começar?</h3>
          <a
            href="https://wa.me/5551996413357"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
