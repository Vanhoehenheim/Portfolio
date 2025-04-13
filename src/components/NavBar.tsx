'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="font-mono text-xl font-bold tracking-tighter">
          prajay<span className="text-playful-pink">.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-playful-purple transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-foreground hover:text-playful-purple transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-playful-purple transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-playful-purple transition-colors"
          >
            Contact
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            className="ml-2 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 md:hidden"
          >
            <nav className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-playful-purple transition-colors py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-foreground hover:text-playful-purple transition-colors py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-playful-purple transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-playful-purple transition-colors py-2"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
