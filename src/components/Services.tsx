
import { Bot, MessageSquare, Workflow, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bot className="text-yellow-500" size={48} />,
      title: "ChatBots Inteligentes",
      description: "Desenvolvemos chatbots personalizados para WhatsApp que atendem seus clientes 24/7, qualificam leads e aumentam suas conversões.",
      features: ["Atendimento 24 horas", "Qualificação de leads", "Integração com CRM", "Respostas personalizadas"]
    },
    {
      icon: <Workflow className="text-yellow-500" size={48} />,
      title: "Automações Avançadas",
      description: "Criamos fluxos automatizados que otimizam seus processos, desde o primeiro contato até o pós-venda.",
      features: ["Fluxos personalizados", "Integração com sistemas", "Agendamentos automáticos", "Follow-up inteligente"]
    },
    {
      icon: <MessageSquare className="text-yellow-500" size={48} />,
      title: "WhatsApp Business API",
      description: "Implementamos soluções completas usando a API oficial do WhatsApp para empresas de todos os tamanhos.",
      features: ["API oficial", "Múltiplos atendentes", "Relatórios detalhados", "Backup de conversas"]
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={48} />,
      title: "Analytics e Relatórios",
      description: "Acompanhe métricas importantes e tome decisões baseadas em dados concretos sobre seu atendimento.",
      features: ["Dashboards interativos", "Métricas de conversão", "Relatórios personalizados", "Insights de performance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em automação e chatbots para transformar seu atendimento e impulsionar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
