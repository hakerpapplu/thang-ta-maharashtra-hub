
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-thangta-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-2xl font-bold text-thangta-gold">
              All Maharashtra<br />Thang-Ta Association
            </h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Promoting the ancient martial art of Thang-Ta across Maharashtra, preserving tradition while fostering excellence in martial arts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-thangta-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-thangta-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-thangta-light transition-colors">About Us</Link></li>
              <li><Link to="/tournaments" className="hover:text-thangta-light transition-colors">Tournaments</Link></li>
              <li><Link to="/achievements" className="hover:text-thangta-light transition-colors">Achievements</Link></li>
              <li><Link to="/trainees" className="hover:text-thangta-light transition-colors">Trainees</Link></li>
              <li><Link to="/contact" className="hover:text-thangta-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-thangta-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-thangta-light shrink-0 mt-0.5" />
                <span>123 Martial Arts Way, Pune, Maharashtra, India - 411001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-thangta-light shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-thangta-light shrink-0" />
                <span>info@maharashtrathangta.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-thangta-gold">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-thangta-light transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-thangta-light transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-thangta-light transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            <h4 className="font-cinzel text-lg font-semibold mb-2 text-thangta-gold">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm text-black rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-thangta hover:bg-thangta-light px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All Maharashtra Thang-Ta Association. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-xs text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
