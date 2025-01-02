'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Technologies', href: '/Technologies' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Suppress React warnings during development (optional)
  if (process.env.NODE_ENV === 'development') {
    console.error = () => {}; // Suppress specific errors during development
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);  // Close mobile menu when clicking outside
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const path = pathname + (searchParams.get('category') ? `?category=${searchParams.get('category')}` : '');
    const active = navItems.find(item => {
      if (item.href.includes('?')) {
        return path.startsWith(item.href.split('?')[0]);
      }
      return item.href === path;
    });
    if (active) {
      setActiveItem(active.name);
    } else {
      setActiveItem('');
    }
  }, [pathname, searchParams]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-none' : 'bg-transparent'}`}
    >
      <div
        className={`mx-auto border rounded-[50px] mt-5 flex items-center justify-between px-6 py-3 transition-all duration-500 ease-in-out ${isScrolled ? '' : 'container'}`}
        style={{
          height: isScrolled ? '60px' : '70px',
          maxWidth: '1200px', // Adjust the width of the navbar
          backgroundColor: isScrolled ? '#ffffff' : 'transparent', // Add background when scrolled
          boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none', // Add shadow when scrolled
        }}
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={60} height={20} className="object-left" />
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => {
            const itemName = String(item.name); // Ensure name is a string
            const itemHref = String(item.href); // Ensure href is a string
            const key = `${itemName}-${itemHref}-${index}`; // Combine name, href, and index for a unique key

            return (
              <Link
                key={key} // Ensure key is unique and stringified
                href={item.href}
                className={`text-sm transition-colors duration-300 rounded-lg px-2 py-1 ${
                  activeItem === item.name
                    ? 'bg-[#f3f1f1] text-[#7045ff]'
                    : 'text-gray-600 hover:text-[#7045ff] hover:bg-[#f3f1f1]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
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
          {navItems.map((item, index) => {
            const itemName = String(item.name); // Ensure name is a string
            const itemHref = String(item.href); // Ensure href is a string
            const key = `${itemName}-${itemHref}-${index}`; // Combine name, href, and index for a unique key

            return (
              <Link
                key={key} // Ensure key is unique and stringified
                href={item.href}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-200">
            <Button
              variant="outline"
              className="w-full mb-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            >
              Log in
            </Button>
            <Button
              variant="default"
              className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
