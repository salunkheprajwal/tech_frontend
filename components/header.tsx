'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' }, // Update href to use section IDs
  { name: 'Technologies', href: '#technologies' },
  { name: 'About Us', href: '#aboutus' },
  { name: 'Contact Us', href: '/contact' }, // External page
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
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-transparent`}
    >
      <div
        className={`mx-auto border rounded-[50px] mt-5 flex items-center justify-between px-6 py-3 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-white shadow-md' : 'container'
        }`}
        style={{
          height: '70px',
          maxWidth: '1200px',
          backgroundColor: isScrolled ? '#ffffff' : 'transparent',
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div className="flex items-center">
          
          <Image src="/logo.png" alt="Logo" width={60} height={20} className="object-left" />
          
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false} // Prevent default browser scroll to enable smooth scrolling
              className={`text-sm transition-colors duration-300 rounded-lg px-2 py-1 text-gray-600 hover:text-[#7045ff] hover:bg-[#f3f1f1]`}
              onClick={() => {
                if (item.href.startsWith('#')) {
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-[#121212] text-[#ffffff] hover:bg-[#a42f2f] hover:text-[#ffffff] transition-colors duration-300 rounded-xl border-none"
            >
              Get In Touch
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-12">
            <Image src="/logo.png" alt="Logo" width={80} height={30} className="object-left" />
            <Button
              variant="ghost"
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={toggleMobileMenu}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                className="block text-2xl font-semibold transition-colors duration-300 text-gray-800 hover:text-[#7045ff]"
                onClick={(e) => {
                  toggleMobileMenu();
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
