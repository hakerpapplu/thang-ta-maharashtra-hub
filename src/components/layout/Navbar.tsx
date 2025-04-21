
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Achievements", path: "/achievements" },
    { name: "Trainees", path: "/trainees" },
    { name: "Contact", path: "/contact" },
  ];

  const languages = ["English", "हिंदी", "मराठी"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-thangta">
                All Maharashtra Thang-Ta Association
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative
                    ${isActive(link.path) 
                      ? "text-thangta after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-thangta" 
                      : "text-gray-700 hover:text-thangta"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="relative ml-3">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-thangta transition-colors"
              >
                <span>Language</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {languageMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Button asChild className="bg-thangta hover:bg-thangta-dark">
              <Link to="/login">
                <User className="h-4 w-4 mr-2" />
                <span>Login</span>
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-thangta hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-thangta text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-thangta"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mt-3 px-3 py-2">
              <div className="font-medium text-gray-700 mb-2">Language</div>
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <Button asChild className="w-full mt-3 bg-thangta hover:bg-thangta-dark">
              <Link to="/login" onClick={toggleMenu}>
                <User className="h-4 w-4 mr-2" />
                <span>Login</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
