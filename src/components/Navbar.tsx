
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navy shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          Theodoros Ampas
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden bg-navy fixed top-[60px] left-0 right-0 min-h-screen px-4 py-6 flex flex-col space-y-4 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
        <MobileNavLink href="#skills" onClick={toggleMenu}>Skills</MobileNavLink>
        <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
        <MobileNavLink href="#experience" onClick={toggleMenu}>Experience</MobileNavLink>
        <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-gold transition-colors duration-300 font-medium"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-gold transition-colors duration-300 text-lg font-medium py-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
