'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AsyncPromiseLogo } from './AsyncPromiseLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="backdrop-blur-glass sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white hover:text-[#5e5ce6] transition-colors group">
            <AsyncPromiseLogo className="group-hover:scale-110 transition-transform" />
            <span className="font-mono">async.promise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5e5ce6] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5e5ce6] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5e5ce6] transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                Home
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}