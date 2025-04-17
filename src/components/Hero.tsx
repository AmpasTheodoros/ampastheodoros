import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center bg-navy">
      {/* Split background design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 1. Background Image (right side) */}
        <div className="absolute right-0 top-0 w-[70%] h-full z-0 overflow-hidden md:block hidden" style={{ right: '-15%' }}>
          <div className="relative w-[80%] h-[120%] -top-[10%] -right-[4%]">
            <img
              src="/images/ampastheodoros.png"
              alt="Theodoros Ampas"
              className="w-full h-full object-cover object-[10%_0%]"
            />
          </div>
        </div>
        {/* 2. Diagonal Navy Overlay */}
        <div 
          className="absolute left-0 top-0 w-[60%] h-full bg-navy transform skew-x-12 origin-top-left z-10 md:block hidden"
          style={{
            transform: 'skewX(-12deg)',
          }}
        />
        
        {/* Mobile background - Full teal/navy color */}
        <div className="absolute inset-0 bg-[#0d4d4d] z-0 md:hidden"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Mobile Profile Image - Fixed position only within the hero section height */}
          <div className="md:hidden w-full h-screen absolute top-0 left-0 z-0">
            <img 
              src="/images/ampastheodoros.png" 
              alt="Theodoros Ampas" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent"></div>
          </div>

          {/* Left side content - Name and info */}
          <div className="text-white space-y-6 pt-16 lg:pt-0 relative z-10">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-light text-gold">Hey, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Ampas<br />Theodoros
              </h1>
              <p className="text-base md:text-lg lg:text-xl uppercase tracking-wider mt-4 text-white/80">
                Mentor, Developer & Business Innovator
              </p>
            </div>
            
            <p className="text-base md:text-lg max-w-lg text-white/70 leading-relaxed">
              I empower businesses you might have heard of! AI Solutions Specialist helping 
              companies leverage AI for growth and efficiency.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-white text-navy hover:bg-gray-100 transition-colors duration-300 shadow-md w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button 
                variant="default" 
                size="lg"
                className="bg-gold hover:bg-gold-light text-white transition-colors duration-300 shadow-md w-full sm:w-auto"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
            
            {/* Contact info tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mb-24 md:mb-0">
              <ContactTile icon={<Phone size={16} />} text="(+30) 694-605-1659" link="call:+306946051659"/>
              <ContactTile icon={<Mail size={16} />} text="theodor.ampas@gmail.com" link="mailto:theodor.ampas@gmail.com"/>
              <ContactTile icon={<MapPin size={16} />} text="Thessaloniki, Greece" link="#"/>
              <ContactTile icon={<Linkedin size={16} />} text="linkedin.com/in/theodoros-ampas" link="https://www.linkedin.com/in/theodoros-ampas-72a517203/" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow - Fixed position at bottom of viewport */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 hidden md:flex flex-col items-center">
        <span className="mb-2 text-sm">Scroll</span>
        <ArrowDown size={24} />
      </div>
      
      {/* Mobile-only scroll indicator */}
      <div className="md:hidden fixed bottom-6 right-6 bg-gold/80 rounded-full p-3 shadow-lg animate-bounce z-10">
        <ArrowDown size={20} className="text-white" />
      </div>
    </section>
  );
};

// Contact info tile component
const ContactTile = ({ icon, text, link }: { icon: React.ReactNode, text: string, link: string  }) => {
  return (
    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-white/20">
      <div className="mr-3 text-gold">{icon}</div>
      <a href={link} className="text-sm font-medium text-white">{text}</a>
    </div>
  );
};

export default Hero;