import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aura-black text-aura-white py-16 border-t border-aura-gray/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo size="sm" />
            </div>
            <p className="text-aura-silver text-sm leading-relaxed">
              Aura is building India's sovereign, end-to-end AI ecosystem—from OS to processors—designed for simplicity, privacy, and power.
            </p>
          </div>
          
          <div>
            <h3 className="text-aura-white font-medium mb-4">Navigation</h3>
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-aura-silver hover:text-aura-white transition-colors">Home</a>
              <a href="/products" className="text-aura-silver hover:text-aura-white transition-colors">Products</a>
              <a href="/vision" className="text-aura-silver hover:text-aura-white transition-colors">Vision</a>
              <a href="/about" className="text-aura-silver hover:text-aura-white transition-colors">About</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-aura-white font-medium mb-4">Company</h3>
            <div className="flex flex-col space-y-3">
              <a href="/careers" className="text-aura-silver hover:text-aura-white transition-colors">Careers</a>
              <a href="/contact" className="text-aura-silver hover:text-aura-white transition-colors">Contact</a>
              <a href="/privacy" className="text-aura-silver hover:text-aura-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-aura-silver hover:text-aura-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-aura-white font-medium mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-4">
                <a href="https://github.com/aura" target="_blank" rel="noopener noreferrer" className="text-aura-silver hover:text-aura-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/company/aura" target="_blank" rel="noopener noreferrer" className="text-aura-silver hover:text-aura-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com/c/aura" target="_blank" rel="noopener noreferrer" className="text-aura-silver hover:text-aura-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
              <div className="text-aura-silver">
                Email: <a href="mailto:founder@auracorp.co" className="hover:text-aura-white transition-colors">team@auracorp.co</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-aura-gray/10">
          <p className="text-aura-silver text-sm">© 2023 AURA. All rights reserved.</p>
          <p className="text-aura-silver text-sm mt-2 md:mt-0">Designed and built in India with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
