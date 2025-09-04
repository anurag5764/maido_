import React, { useState } from "react";
import { Menu, X, Home, HelpCircle, Heart, Users, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/services", icon: Users, label: "Services" },
    { path: "/how-it-works", icon: HelpCircle, label: "How It Works" },
    { path: "/contact", icon: Phone, label: "Contact" },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-yellow-900 rounded-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Heart className="w-6 h-6 text-yellow-100" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-900 to-yellow-700 bg-clip-text text-transparent">
                Maido
              </span>
              <span className="hidden md:block text-xs text-yellow-700">
                Trusted Home Services
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex space-x-8">
              {navLinks.map(({ path, icon: Icon, label }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className="flex items-center transition-colors group relative text-gray-600 hover:text-yellow-700"
                >
                  <Icon className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform text-gray-500" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-900 hover:text-yellow-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map(({ path, icon: Icon, label }) => (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors
                         text-gray-600 hover:text-yellow-700 hover:bg-yellow-50"
              >
                <Icon className="w-5 h-5 text-gray-500" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
