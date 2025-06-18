import Link from 'next/link';
import { AsyncPromiseLogo } from './AsyncPromiseLogo';

export function Header() {
  return (
    <header className="backdrop-blur-glass sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white hover:text-[#5e5ce6] transition-colors group">
            <AsyncPromiseLogo className="group-hover:scale-110 transition-transform" />
            <span className="font-mono">async.promise</span>
          </Link>
          
          <nav className="flex items-center gap-8">
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
        </div>
      </div>
    </header>
  );
} 