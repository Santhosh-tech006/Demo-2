import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookTrialClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookTrialClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Journey', href: '#journey' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition duration-300" />
              </div>
            </div>
            <div>
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                CHECKMATE <span className="text-amber-400">CITY</span>
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-amber-200/70 font-medium">
                CHESS ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors duration-200 tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onBookTrialClick}
              className="relative group px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Book a Free Trial
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-neutral-900 border border-slate-800"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 border-b border-amber-500/20 px-6 py-6 backdrop-blur-xl shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-200 hover:text-amber-400 py-1 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookTrialClick();
                }}
                className="w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Trial Class
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
