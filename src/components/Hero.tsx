
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-navy z-0"></div>
        <div 
          className="absolute right-0 bottom-0 w-2/3 h-full bg-gold transform -skew-x-12 origin-bottom-right z-0" 
          style={{ right: '-10%' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        {/* Profile Image in Circle */}
        <div className="mb-8 md:mb-0 md:mr-12 relative">
          <div className="rounded-full border-4 border-white overflow-hidden h-64 w-64 md:h-80 md:w-80 relative">
            <img 
              src="/lovable-uploads/56c45240-964d-4142-b308-6adf48d036c2.png" 
              alt="Theodoros Ampas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-green-600 text-white font-bold px-4 py-2 rounded-tr-lg">
              #OPENTOWORK
            </div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="text-center md:text-left text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Theodoros Ampas
          </h1>
          <p className="text-lg md:text-xl uppercase tracking-wider mb-6">
            Mentor, Developer & Business Innovator
          </p>
          <p className="text-base md:text-lg mb-8 max-w-lg">
            I empower businesses you might have heard of! AI Solutions Specialist helping 
            companies leverage AI for growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline" 
              className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold-light text-white transition-colors duration-300"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
