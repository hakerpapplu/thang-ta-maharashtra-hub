
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import GoogleTranslate from "@/components/GoogleTranslate";

const LOGO = (
  <span className="logo-text select-none">
    AMTTA<br />
    <span className="text-gradient-primary tracking-wider">THANG TA</span>
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
    <nav className="navbar-blur sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center px-2 py-1.5 md:px-4 md:py-1">
        {/* Nav left: Logo */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 py-1">
          <img
            src="/lovable-uploads/2e8d0326-925b-494c-b452-f7fe4b41d637.png"
            alt="AMTTA Logo"
            className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-brand-accent bg-white"
            />
          <Link to="/" aria-label="Home">
            {LOGO}
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center ml-auto space-x-2">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-lg font-semibold text-base transition story-link ${
                isActive(link.path)
                  ? "bg-brand-accent/30 text-brand-accent"
                  : "hover:bg-brand-accent/10 text-brand-text-secondary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-2 flex items-center">
            <Button asChild className="bg-brand-accent hover:bg-brand-accent2 rounded-full font-semibold shadow text-brand-bg">
              <Link to="/login"><User className="h-4 w-4 mr-1" /> Login</Link>
            </Button>
          </div>
        </div>

        {/* Google Translate widget */}
        <div className="hidden md:block ml-4 min-w-[120px]">
          <GoogleTranslate />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(val => !val)}
          className="md:hidden ml-auto p-2 rounded-lg hover:bg-brand-accent/20 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brand-card/95 glass-morphism shadow-lg animate-fade-in pb-3">
          <div className="flex flex-col px-6 py-3 gap-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-3 rounded-lg font-bold text-lg ${
                  isActive(link.path)
                    ? "bg-brand-accent/25 text-brand-accent"
                    : "hover:bg-brand-accent/10 text-brand-text-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-brand-accent hover:bg-brand-accent2 rounded-full font-semibold shadow text-brand-bg">
              <Link to="/login" onClick={() => setIsOpen(false)}><User className="h-4 w-4 mr-1" /> Login</Link>
            </Button>
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
