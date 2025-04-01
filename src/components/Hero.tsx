import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy">
      {/* Split background design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 1. Background Image (right side) */}
        <div className="absolute right-0 top-0 w-[70%] h-full z-0 overflow-hidden" style={{ right: '-15%' }}>
          <div className="relative w-[80%] h-[120%] -top-[10%] -right-[4%]">
            <img
              src="/lovable-uploads/ampastheodoros.png"
              alt="Theodoros Ampas"
              className="w-full h-full object-cover object-[10%_0%]"
            />
          </div>
        </div>
        {/* 2. Diagonal Navy Overlay */}
        <div 
          className="absolute left-0 top-0 w-[60%] h-full bg-navy transform skew-x-12 origin-top-left z-10"
          style={{
            transform: 'skewX(-12deg)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content - Name and info */}
          <div className="text-white space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-light text-gold">Hey, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                Theodoros<br />Ampas
              </h1>
              <p className="text-lg md:text-xl uppercase tracking-wider mt-4 text-white/80">
                Mentor, Developer & Business Innovator
              </p>
            </div>
            
            <p className="text-base md:text-lg max-w-lg text-white/70">
              I empower businesses you might have heard of! AI Solutions Specialist helping 
              companies leverage AI for growth and efficiency.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="default" 
                className="bg-white text-navy hover:bg-gray-100 transition-colors duration-300 shadow-md"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="default" 
                className="bg-gold hover:bg-gold-light text-white transition-colors duration-300 shadow-md"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
            
            {/* Contact info tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <ContactTile icon={<Phone size={16} />} text="(+30) 123-456-7890" />
              <ContactTile icon={<Mail size={16} />} text="theodoros@example.com" />
              <ContactTile icon={<MapPin size={16} />} text="Thessaloniki, Greece" />
              <ContactTile icon={<Linkedin size={16} />} text="linkedin.com/theodorosampas" />
            </div>
          </div>
          
          {/* Right side - Profile Image */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl overflow-hidden w-full max-w-md h-[450px] lg:h-[550px] bg-gold/20 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/lovable-uploads/ampastheodoros.png" 
                  alt="Theodoros Ampas" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }} // or try 'center 40%' or 'center 45%'
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Scroll Down Arrow - Fixed position at bottom of viewport */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll</span>
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

// Contact info tile component
const ContactTile = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-white/20">
      <div className="mr-3 text-gold">{icon}</div>
      <span className="text-sm font-medium text-white">{text}</span>
    </div>
  );
};

export default Hero;