
import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Theodoros Ampas</h3>
            <p className="text-gray-300">AI Solutions Specialist & Business Mentor</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com/in/theodorosampas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:theodoros@example.com" 
              className="hover:text-gold transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="group flex items-center text-white hover:text-gold transition-colors duration-300"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to Top</span>
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Theodoros Ampas. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold text-sm mx-3 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gold text-sm mx-3 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
