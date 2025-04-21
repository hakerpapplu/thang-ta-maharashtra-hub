
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import GoogleTranslate from "@/components/GoogleTranslate";

// Custom logo (optionally put your dragon image as an <img> here)
const LOGO = (
  <span className="font-cinzel text-xl md:text-3xl font-bold text-[#075E54] drop-shadow-xl tracking-wider">
    ALL MAHARASHTRA <br />
    <span className="text-gradient-primary">THANG TA ASSOCIATION</span>
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Tournaments", path: "/tournaments" },
    { name: "Achievements", path: "/achievements" },
    { name: "About", path: "/about" },
    { name: "Trainees", path: "/trainees" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 glass-morphism backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-2 md:py-0 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0 py-2">
          {/* Dragon icon/brand, replace with yours if needed */}
          <img
            src="/lovable-uploads/2e8d0326-925b-494c-b452-f7fe4b41d637.png"
            alt="AMTTA Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-[#D4AF37] bg-white hidden sm:block"
          />
          <Link to="/" aria-label="Home">
            {LOGO}
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center ml-auto space-x-4">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-semibold transition story-link ${
                isActive(link.path)
                  ? "bg-[#AEE8D6] text-[#075E54]"
                  : "hover:bg-[#C7FFEB]/60 text-[#185B5B]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Google Translate widget */}
        <div className="hidden md:block ml-6">
          <GoogleTranslate />
        </div>

        {/* Login */}
        <div className="hidden md:block ml-6">
          <Button asChild className="bg-[#60bfa4] hover:bg-[#469887] rounded-full font-semibold shadow">
            <Link to="/login"><User className="h-4 w-4 mr-1" /> Login</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(val => !val)}
          className="md:hidden ml-auto p-2 rounded-lg hover:bg-[#b2f6ee] focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 glass-morphism shadow-lg animate-fade-in pb-4">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-3 rounded-lg font-bold text-lg ${
                  isActive(link.path)
                    ? "bg-[#AEE8D6] text-[#075E54]"
                    : "hover:bg-[#C7FFEB]/80 text-[#185B5B]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-[#60bfa4] hover:bg-[#469887] rounded-full font-semibold shadow">
              <Link to="/login" onClick={() => setIsOpen(false)}><User className="h-4 w-4 mr-1" /> Login</Link>
            </Button>
            {/* Google Translate widget for mobile */}
            <div className="mt-2 mb-1">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
