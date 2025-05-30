
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message || "Olá! Gostaria de saber mais sobre os serviços da CSV.");
    window.open(`https://wa.me/5551996413357?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">conversar</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Conte-nos sobre seu projeto e descubra como podemos ajudar seu negócio a crescer
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MessageCircle className="text-yellow-500 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Fale conosco agora</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para seu negócio. O primeiro contato é gratuito!
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Consultoria gratuita</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Proposta personalizada</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Suporte especializado</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sua mensagem (opcional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none resize-none"
                    rows={4}
                  />
                </div>
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar no WhatsApp</span>
                </button>
                <p className="text-gray-500 text-sm text-center mt-3">
                  Você será redirecionado para o WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
