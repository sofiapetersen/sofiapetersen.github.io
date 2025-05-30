
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Contato", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2a3aca1d-eeb9-483f-ab36-8fd6d2cd9b23.png" 
              alt="CSV Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551996413357"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5551996413357"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-6 py-2 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
