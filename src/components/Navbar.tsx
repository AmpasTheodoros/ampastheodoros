'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 text-secondary">
        {/* Logo */}
        <div className="text-xl font-bold ">
          <Link href="/">Theodor Ampas</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Links */}
        <nav
          className={`sm:flex sm:items-center sm:space-x-8 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/expertise"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Expertise
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link href="/schedule">
            <Button className="bg-secondary text-white hover:bg-orange-600">
              Schedule a Call
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
