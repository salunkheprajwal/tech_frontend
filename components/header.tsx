'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/home' },
  { name: 'Services', href: 'services' },
  { name: 'About Us', href: 'aboutus' },
  { name: 'Technologies', href: 'technologies' },
  { name: 'Contact Us', href: '/contact' }, // Keep full path for "Contact Us"
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false); // Close mobile menu when clicking outside
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (id: string) => {
    // Skip scrolling for "Home"
    if (id === '/home') return;

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-none' : 'bg-transparent'}`}
    >
      <div
        className={`mx-auto border rounded-[50px] mt-5 flex items-center justify-between px-6 py-3 transition-all duration-500 ease-in-out ${isScrolled ? '' : 'container'}`}
        style={{
          height: isScrolled ? '60px' : '70px',
          maxWidth: '1200px',
          backgroundColor: isScrolled ? '#ffffff' : 'transparent',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={20} className="object-left" />
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) =>
            item.name === 'Contact Us' ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm transition-colors duration-300 rounded-lg px-2 py-1 text-gray-600 hover:text-[#7045ff] hover:bg-[#f3f1f1]"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm transition-colors duration-300 rounded-lg px-2 py-1 text-gray-600 hover:text-[#7045ff] hover:bg-[#f3f1f1]"
              >
                {item.name}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="bg-[#121212] text-[#ffffff] hover:bg-[#a42f2f] hover:text-[#ffffff] transition-colors duration-300 rounded-xl border-none"
          >
            Get In Touch
          </Button>

          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) =>
            item.name === 'Contact Us' ? (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </div>
    </header>
  );
}
